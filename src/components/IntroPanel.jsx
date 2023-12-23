import React from 'react';
import "./intro.css";

export default function MainPanel() {
    return (
      <div className='main'>
        <div className='header'>
            <h1>SkyScale</h1>
            <h2>Upscaling the world</h2>
            
            <div className='headerlogo'>              

            </div>
        </div>
        <div className='image-container'>
                </div>
        <div className='3-steps'>
            <p>Получай самые качественные фото в 3 шага</p>
            <ul>
            <li>1. Используй пробную период</li>
            <li>2. Оформи подписку</li>
            <li>3. Пользуся программой и улучшай изображения</li>
            </ul>
        </div>

      </div>
    )
  }