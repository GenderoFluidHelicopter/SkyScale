import React, { useState, useRef } from "react";
import "./Pages.css";
import uploadImg from "../imgs/upload.png";

const ExpandableList = ({ items }) => {
  const [expandedItem, setExpandedItem] = useState(null);

  const toggleItem = (index) => {
    setExpandedItem(expandedItem === index ? null : index);
  };

  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>
          <div
            onClick={() => toggleItem(index)}
            style={{ cursor: 'pointer', fontWeight: expandedItem === index ? 'bold' : 'normal' }}
          >
            {item.title}
          </div>
          {expandedItem === index && <div>{item.content}</div>}
        </li>
      ))}
    </ul>
  );
};

export default function Concl() {

  const [file, setFile] = useState(null);
  const [image, setImage] = useState(null);
  const [upscaledImage, setInvertedImage] = useState(null);
  const [button1Clicked, setButton1Clicked] = useState(false);
  const [fileClicked, setFileClicked] = useState(false);
  const sampleItems = [
    { title: ' Find file with low resolution', content: 'Perhaps you\
    have ever encountered problems with the quality of photos taken on\
    mobile devices, especially in low light conditions or when using\
    older cameras.' },
    { title: ' Upload your file', content: 'Click the box to upload file with low resolution. Youre able to upload a JPG, PNG or HEIC file for upscaling.' },
    { title: ' Click button "Upscale"', content: 'Sit back while our AI automatically upscales your image. Your new, upscaled image will be ready in seconds.' },
    { title: ' Download your image', content: 'Download your new, enlarged image to share with your friends.' },
  ];

  const handleDownload = async () => {
    const response = await fetch('http://localhost:8000/download/название_изображения.jpg'); // Замените на реальное имя файла
    const blob = await response.blob();

    // Создаем временную ссылку для скачивания
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.download = 'upscaled_img.jpg'; // Замените на реальное имя файла
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleChange = (e) => {
    //console.log(e.target.files);
  
    const file = e.target.files[0];

    if (file) {
      readFile(file, (imageUrl) => {
        setImage(imageUrl);
      });
    }
    setFile(e.target.files[0]);
    setFileClicked(true);
    
  }

  const readFile = (file, callback) => {
    const reader = new FileReader();

    reader.onload = (event) => {
      callback(event.target.result);
    };

    reader.readAsDataURL(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setButton1Clicked(true);
    // const formData = new FormData();
    // formData.append('file', file);
    const endpoint = "http://localhost:8000/upload"
 
  try {
    const formData = new FormData();
    formData.append('file', file);

    const response = await fetch(endpoint, {
      method: 'POST',
      body: formData,
    });

    if (response.ok) {
      var upscaledImageData = await response.blob();
      setInvertedImage(URL.createObjectURL(upscaledImageData));
      console.log(upscaledImage)
      // image.onload = function(){
      //   URL.revokeObjectURL(this.src); // release the blob URL once the image is loaded
      // }
      // image.src = invertedImageData;
    } else {
      console.error('Error uploading image:', response.statusText);
    }
    } catch (error) {
      console.error('Error uploading image:', error.message);
    }
  };

  return (
    <div className="content">
      
      
        
        <div className="app">
          
          <div className="parent">
            <h1>Enchance image with AI:</h1>
            <h2>SkyScale is the best AI image upscaler online. 
            Upload your photo, then sit back and watch our 
            AI image enhancer work its magic. Our AI is smart - 
            it will intelligently improve the image quality by adding
            more pixels to your image. <br></br> <br></br>How to upscale your image?</h2>
            <ExpandableList items={sampleItems} />
          </div>

          <div className="parent">
            <form onSubmit={handleSubmit}>
            <div className="file-upload">
              <img src={uploadImg} alt="fireSpot" style={{height:100, width:100}}/>
              <h3>Click box to upload</h3>
              <p>Maximun file size 5mb</p>
              <input type="file" accept="image/*" onChange={handleChange} name="name"/>
            </div>

            <button className="button_upscale" disabled={!fileClicked} type="submit">upscale</button>
            </form>
            <button className="button_upscale" disabled={!button1Clicked} onClick={handleDownload}>download</button>
            <h2 style={{ visibility: fileClicked ? 'visible' : 'hidden' }}>Initial Image</h2>
            {image && <img src={image} alt="Uploaded" style={{height:400, width:400}} />}
            {upscaledImage && (
            <div>
              <h2>Upscaled Image</h2>
              <img src={upscaledImage} style={{height:400, width:400}}/>
            </div>
            )}
            
          </div>
        </div>      
        

      
        
    </div>
  );
}
