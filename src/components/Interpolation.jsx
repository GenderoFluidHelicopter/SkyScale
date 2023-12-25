import React from "react";
import { Link } from 'react-router-dom';
import DocSideBar from './DocSideBar';

export default function Interpolation() {

return(
<div className="app">
    <DocSideBar />
    <div className="parent">
    <h1>Frame Interpolation</h1>
    <p>Frame <Link to="/trm">
        <span style={{ textDecoration: 'underline', cursor: 'pointer' }}>interpolation</span>
      </Link>. has become a key technique in video processing, providing
Improved motion smoothness and visual perception. Development of <Link to="/trm">
        <span style={{ textDecoration: 'underline', cursor: 'pointer' }}>interpolation</span>
      </Link> methods
continues, including the integration of modern machine learning methods to create
more accurate and high-quality results. Interpolation is often used in symbiosis with
using <Link to="/trm">
        <span style={{ textDecoration: 'underline', cursor: 'pointer' }}>upscaling</span>
      </Link> methods, so the video will look more natural and detailed,
especially when increasing its resolution.
The history of frame <Link to="/trm">
        <span style={{ textDecoration: 'underline', cursor: 'pointer' }}>interpolation</span>
      </Link> includes various stages of development, starting with
simple methods of averaging frames, then applying optical flow and finally
transition to the use of neural networks for more accurate and high-quality <Link to="/trm">
        <span style={{ textDecoration: 'underline', cursor: 'pointer' }}>interpolation</span>
      </Link>.</p>
<p>Main stages of development:
Simple averaging methods. Initially, one of the simplest methods
interpolation was frame averaging. This means taking the average of the color or
pixel brightness between two adjacent frames. This method ensured smooth
transitional state between frames, but often resulted in blur and loss of detail. <Link to="/trm">
        <span style={{ textDecoration: 'underline', cursor: 'pointer' }}>Optical Flow Study</span>
      </Link>
. With the development of methods
Motion analysis techniques such as optical flow have emerged in computer vision.
It allows you to estimate the direction and magnitude of pixel movement between frames. This
provides more accurate information about the movement of objects, which can be used
for more complex frame <Link to="/trm">
        <span style={{ textDecoration: 'underline', cursor: 'pointer' }}>interpolation</span>
      </Link>.
Neural network methods. In recent years, with the development of deep learning
Methods have emerged that use neural networks for frame <Link to="/trm">
        <span style={{ textDecoration: 'underline', cursor: 'pointer' }}>interpolation</span>
      </Link>. Neural network
methods allow you to create more accurate and realistic intermediate frames, taking into account
complex data dependencies.</p>
    </div>
    </div>
)


}