import React from 'react';
import "./intro.css";
import { Link } from 'react-router-dom'

export default function MainPanel() {
    return (
    <div className="Mainboard">
        <div className='parent'>
    <h1>SkyScale</h1>
            <h2>Upscaling the world</h2>
      <p>
      SkyScale new world's upscaler which pretend to upscale everything. 
      <br></br>
      With SkyScale, you can upscale your old family archives by one click, make homemade content more good and etc.
      <br></br>
      It's not just a upscale app; it's a content upgrader of your life.
      </p>
      </div>
      <div className='parent'>
      <h2 className="subtitle">Models</h2>
      <p>We use an ensemble of models that are selected based on the user's key task</p>
      
      <h2 className="subtitle">Demo</h2>
      <p id="demo">This is an example of what we intend to present:</p>
      <div className='image-container'>
                </div>
                </div>

        <div className='parent'>
        <h2 className="subtitle">Try for free:</h2>

        <Link to="/pgs">
      <button className='button_upscale1'>Click here for trial</button>
        </Link>
        </div>

        <div className='parent'>
      <h2 className="subtitle">Our models:</h2>
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
        </div>

        <div className='parent'>
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
    </div>
    )
  }