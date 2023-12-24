import React from 'react';
import "./intro.css";

export default function MainPanel() {
    return (
    <div className="Mainboard">
    <h1>SkyScale</h1>
            <h2>Upscaling the world</h2>
      <p>
      SkyScale new world's upscaler which pretend to upscale everything. 
      <br></br>
      With SkyScale, you can upscale your old family archives by one click, make homemade content more good and etc.
      <br></br>
      It's not just a upscale app; it's a content upgrader of your life.
      </p>

      <h2 className="subtitle">Models</h2>
      <p>We use an ensemble of models that are selected based on the user's key task</p>
      
      <h2 className="subtitle">Demo</h2>
      <p id="demo">This is an example of what we intend to present:</p>
      <div className='image-container'>
                </div>

      <h2 className="subtitle">Our advantages:</h2>
      <ul>
          <li>Quality</li>
          <li>Capacity</li>
          <li>Speed</li>
          <li>For free trial</li>
          <li>не придумал</li>
      </ul>
      <table>
            <thead>
                <td>Example</td>
                <td>Model</td>  
            </thead>
            <tbody>
                <tr>
                    <td>Upscaling photo</td>
                    <td>SRGAN</td>
                </tr>
                <tr>
                    <td>Upsaling video</td>
                    <td>BasicVSR</td>
                </tr>
                <tr>
                    <td>Upscaling and increasing video's FPS</td>
                    <td>FPsRife + BasicVSR</td>
                </tr>
            </tbody>
        </table>
       <div className='git'>
      <h2>Our own</h2>
      <h3><a href="https://github.com/moksyasha/SkyScale">
          Our project github
      </a></h3>
      <h3><a href="https://github.com/GenderoFluidHelicopter/skyscale">
          This pages
      </a></h3>
      </div> 
    </div>
    )
  }