from fastapi import FastAPI, File, UploadFile
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import FileResponse
import requests
import httpx
from pathlib import Path
import numpy as np
import base64
from fastapi import Response
from PIL import Image, ImageOps
import io
import os

###########
# import sys
# sys.path.insert(1, '/home/moksyasha/Projects/OTD/4/my-app/fastapi/uploads/GAN/')
# import main_upscale

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=['*'],
    allow_credentials=True,
    allow_methods=['*'],
    allow_headers=['*'],
)

@app.get("/")
def root():
    return {'message': 'Root dir!'}
 
@app.get('/get_posts')
async def async_get_post():
    api_url = 'https://jsonplaceholder.typicode.com/posts'
    async with httpx.AsyncClient() as client:
        response = await client.get(api_url)
        all_users = response.json()
        group = all_users[:30]
        return group

UPL_DIR = Path() / "uploads/GAN"

@app.get("/download/{filename}")
async def download_image(filename: str):
    file_path = Path() / "out.png"
    print(file_path)
    return FileResponse(file_path)

@app.post("/upload")
async def upload(file: UploadFile):
    try:
        data = file.file.read()
        save_to = UPL_DIR / file.filename
        with open(save_to, 'wb') as f:
            f.write(data)

        print(type(file.filename), file.filename)
        os.system("export MKL_SERVICE_FORCE_INTEL=1")
        cmd = "python3 uploads/GAN/main_upscale.py --img_path " + file.filename
        os.system(cmd)

        img = Image.open("out.png")
        #im_mirror = ImageOps.mirror(img)
        with io.BytesIO() as buf:
            img.save(buf, format='PNG')
            im_bytes = buf.getvalue()
            
    except Exception as e:
        return {f"{e} message": "There was an error uploading the file"}
    headers = {'Content-Disposition': f'inline; filename={file.filename}'}
    return Response(im_bytes, media_type='image/jpeg')
    # return templates.TemplateResponse("display.html", {"request": request,  "myImage": base64_encoded_image})
    # return {"message": f"Successfully uploaded {file.filename}"}