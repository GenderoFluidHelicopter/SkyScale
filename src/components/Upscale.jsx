import React from "react";
import { Link } from 'react-router-dom';
import DocSideBar from './DocSideBar';

export default function Upscale() {

return(
<div className="app">
    <DocSideBar />
    <div className="parent">
        <h1>Upscale method</h1>
        <p>Video enhancement technologies are advancing steadily
forward. Modern <Link to="/trm">
        <span style={{ textDecoration: 'underline', cursor: 'pointer' }}>upscaling</span>
      </Link> and video processing algorithms have reached a high level
perfection, providing a result that is pleasing to the eye. However, it is important to note that this
the point reached is not final, and technological development continues
forward movement.</p>
<p>Early research in this area was fraught with limitations
computing power and image processing methods. <Link to="/trm">
        <span style={{ textDecoration: 'underline', cursor: 'pointer' }}>Upscaling</span>
      </Link> algorithms,
such as bilinear and bicubic interpolation provided results, but they remained limited in their ability to preserve detail and maintain high
quality at a significant increase in resolution [https://tensorpix.ai/blog/ai-upscaling-vs-standard-upscaling-methods.].
With the advent of neural networks, a revolutionary revolution occurred in the field of upscaling.
shift. Initial attempts to apply <Link to="/trm">
        <span style={{ textDecoration: 'underline', cursor: 'pointer' }}> convolutional neural networks</span>
      </Link> (CNN) to problems 
<Link to="/trm">
        <span style={{ textDecoration: 'underline', cursor: 'pointer' }}> upscaling</span>
      </Link> devices such as SRCNN (Super-Resolution Convolutional Neural Network) have become
an important step forward [https://arxiv.org/pdf/1501.00092.pdf.]. However, over time it was discovered that for more complex problems Upscaling requires deeper and more complex architectures. With increasing depth the neural network increases its ability to extract more complex features and patterns Images. But it is important to consider that increasing depth can also lead to increasing complexity of training and requirements for computing resources, which can significantly affect the speed of video processing. Therefore, it is important to conduct experiments and restructuring the model architecture to achieve an optimal balance between depth network and upscaling quality.</p>
<p>One method to increase speed is subpixel convolution, which has been
proposed a little later than the release of the first version of the <Link to="/trm">
        <span style={{ textDecoration: 'underline', cursor: 'pointer' }}> convolutional neural networks</span>
      </Link>  network for upscale. Initially
the last operation was a bicubic filter, which was applied to the output of the neural network in
high resolution space. This is suboptimal and increases computational overhead.
difficulty in processing video content. The Next Generation of <Link to="/trm">
        <span style={{ textDecoration: 'underline', cursor: 'pointer' }}> convolutional neural networks</span>
      </Link>  Neural
networks is now represented by a new architecture in which feature maps are retrieved in
low resolution space. In addition, a sub-pixel convolution layer is now used internally, which effectively replaces the bicubic filter, reducing
computational complexity of the <Link to="/trm">
        <span style={{ textDecoration: 'underline', cursor: 'pointer' }}> upscaling</span>
      </Link> operation [https://arxiv.org/pdf/1609.05158.pdf.].
Now, applying techniques to increase processing speed in <Link to="/trm">
        <span style={{ textDecoration: 'underline', cursor: 'pointer' }}> convolutional neural networks</span>
      </Link> 
neural networks, it was possible to achieve quality improvements in real time. Such
models have been successfully used in various fields: video surveillance, recognition
objects, video stream processing and the gaming industry. But there was a problem -
<Link to="/trm">
        <span style={{ textDecoration: 'underline', cursor: 'pointer' }}> convolutional neural networks </span>
      </Link>  neural networks, each frame is processed independently of the previous ones, the model
may not take into account time dependencies and movement structure in the video, which led to
potential artifacts and a decrease in the overall quality of <Link to="/trm">
        <span style={{ textDecoration: 'underline', cursor: 'pointer' }}>upscaling</span>
      </Link>.</p>
<p>
<Link to="/trm">
        <span style={{ textDecoration: 'underline', cursor: 'pointer' }}> Recurrent neural networks</span>
      </Link>  (RNN) were developed to solve this problem.
or combinations of CNN and RNN. <Link to="/trm">
        <span style={{ textDecoration: 'underline', cursor: 'pointer' }}> Recurrent</span>
      </Link> models are able to capture temporal
dependencies between frames and store information about previous states, which makes
they are more suitable for processing video sequences. Now neural network solutions
about changes in the video stream made in earlier samples influence decisions that
will be accepted in the future. To do this, the output of previous samples
stored in a "latent state" - a form of memory that combines the results of all
input data viewed so far.
The most striking representative of <Link to="/trm">
        <span style={{ textDecoration: 'underline', cursor: 'pointer' }}> Recurrent neural networks</span>
      </Link> is the architecture
BasicVSR
[https://arxiv.org/pdf/2012.02181.pdf.], which is the basis for experiments and the creation of new ones,
improved models. author's changes: components processing optical flow, subpixel
convolution and spatial distortion modules.</p>
    </div>
    </div>
)


}