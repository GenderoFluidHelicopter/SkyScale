#!/usr/bin/python

# -*- coding: utf8 -*-

import torch
from utils_gan import *
from PIL import Image, ImageDraw, ImageFont
import time
import warnings
import argparse

warnings.filterwarnings("ignore")

#320 180
#1280 720
#2�073�600 = 1920 * 1080 fullhd
#3�686�400 = 2560 * 1440 2k
#8�294�400 = 3840 * 2160 4k

def main():

    torch.cuda.empty_cache()
    parser = argparse.ArgumentParser()
    parser.add_argument('--img_path', type=str, default='')
    args = parser.parse_args()
    img_path = args.img_path
    device = torch.device("cuda" if torch.cuda.is_available() else "cpu")
    print(device)

    # Model checkpoints
    srgan_checkpoint = "/home/moksyasha/Projects/OTD/4/my-app/fastapi/uploads/GAN/checkpoint_srgan.pth.tar"

    # Load GAN model
    srgan_generator = torch.load(srgan_checkpoint)['generator'].to(device)
    srgan_generator.eval()

    torch.cuda.empty_cache()
    print("PATH: ", img_path)
    """
    Visualizes the super-resolved images from the SRGAN for comparison with the bicubic-upsampled image
    and the original high-resolution (HR) image, as done in the paper.

    :param img: filepath of the HR iamge
    """
    # Load image, downsample to obtain low-res version
    hr_img = Image.open("/home/moksyasha/Projects/OTD/4/my-app/fastapi/uploads/GAN/" + img_path, mode="r")
    hr_img = hr_img.convert('RGB')
    
    # lr_img = hr_img.resize((int(hr_img.width / 6), int(hr_img.height / 6)),
    #                        Image.BICUBIC)
    
    # print("Size lr: ", lr_img.size)
    # print("Size hr: ", hr_img.size)
    # # Bicubic Upsampling
    # bicubic_img = lr_img.resize((hr_img.width, hr_img.height), Image.BICUBIC)

    # Super-resolution (SR) with SRGAN
    start = time.time()
    sr_img_srgan = srgan_generator(convert_image(hr_img, source='pil', target='imagenet-norm').unsqueeze(0).to(device))
    sr_img_srgan = sr_img_srgan.squeeze(0).cpu().detach()
    sr_img_srgan = convert_image(sr_img_srgan, source='[-1, 1]', target='pil')
    print("upscaled")
    sr_img_srgan.save('/home/moksyasha/Projects/OTD/4/my-app/fastapi/out.png')
    
    return 0


if __name__ == '__main__':
    main()
