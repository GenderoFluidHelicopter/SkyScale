import React from "react";

export default function Articles() {

return(
<div className="app">
    <div className="parent">
        <h1>Upscale method</h1>
        <p>Video enhancement technologies are advancing steadily
forward. Modern upscaling and video processing algorithms have reached a high level
perfection, providing a result that is pleasing to the eye. However, it is important to note that this
the point reached is not final, and technological development continues
forward movement.</p>
<p>Early research in this area was fraught with limitations
computing power and image processing methods. Upscaling algorithms,
such as bilinear and bicubic interpolation provided results, but they remained limited in their ability to preserve detail and maintain high
quality at a significant increase in resolution [https://tensorpix.ai/blog/ai-upscaling-vs-standard-upscaling-methods.].
With the advent of neural networks, a revolutionary revolution occurred in the field of upscaling.
shift. Initial attempts to apply convolutional neural networks (CNN) to problems
upscaling devices such as SRCNN (Super-Resolution Convolutional Neural Network) have become
an important step forward [https://arxiv.org/pdf/1501.00092.pdf.]. However, over time it was discovered that for more complex problems Upscaling requires deeper and more complex architectures. With increasing depth the neural network increases its ability to extract more complex features and patterns Images. But it is important to consider that increasing depth can also lead to increasing complexity of training and requirements for computing resources, which can significantly affect the speed of video processing. Therefore, it is important to conduct experiments and restructuring the model architecture to achieve an optimal balance between depth network and upscaling quality.</p>
<p>One method to increase speed is subpixel convolution, which has been
proposed a little later than the release of the first version of the convolutional network for upscale. Initially
the last operation was a bicubic filter, which was applied to the output of the neural network in
high resolution space. This is suboptimal and increases computational overhead.
difficulty in processing video content. The Next Generation of Convolutional Neural
networks is now represented by a new architecture in which feature maps are retrieved in
low resolution space. In addition, a sub-pixel convolution layer is now used internally, which effectively replaces the bicubic filter, reducing
computational complexity of the upscaling operation [https://arxiv.org/pdf/1609.05158.pdf.].
Now, applying techniques to increase processing speed in convolutional
neural networks, it was possible to achieve quality improvements in real time. Such
models have been successfully used in various fields: video surveillance, recognition
objects, video stream processing and the gaming industry. But there was a problem -
convolutional neural networks, each frame is processed independently of the previous ones, the model
may not take into account time dependencies and movement structure in the video, which led to
potential artifacts and a decrease in the overall quality of upscaling.</p>
<p>Recurrent neural networks (RNN) were developed to solve this problem.
or combinations of CNN and RNN. Recurrent models are able to capture temporal
dependencies between frames and store information about previous states, which makes
they are more suitable for processing video sequences. Now neural network solutions
about changes in the video stream made in earlier samples influence decisions that
will be accepted in the future. To do this, the output of previous samples
stored in a "latent state" - a form of memory that combines the results of all
input data viewed so far.
The most striking representative of recurrent neural networks is the architecture
BasicVSR
[https://arxiv.org/pdf/2012.02181.pdf.], which is the basis for experiments and the creation of new ones,
improved models. author's changes: components processing optical flow, subpixel
convolution and spatial distortion modules.</p>
    </div>
    <div className="parent">
    <h1>Frame Interpolation</h1>
    <p>Frame interpolation has become a key technique in video processing, providing
Improved motion smoothness and visual perception. Development of interpolation methods
continues, including the integration of modern machine learning methods to create
more accurate and high-quality results. Interpolation is often used in symbiosis with
using upscale methods, so the video will look more natural and detailed,
especially when increasing its resolution.
The history of frame interpolation includes various stages of development, starting with
simple methods of averaging frames, then applying optical flow and finally
transition to the use of neural networks for more accurate and high-quality interpolation.</p>
<p>Main stages of development:
Simple averaging methods. Initially, one of the simplest methods
interpolation was frame averaging. This means taking the average of the color or
pixel brightness between two adjacent frames. This method ensured smooth
transitional state between frames, but often resulted in blur and loss of detail.
Optical Flow Study. With the development of methods
Motion analysis techniques such as optical flow have emerged in computer vision.
It allows you to estimate the direction and magnitude of pixel movement between frames. This
provides more accurate information about the movement of objects, which can be used
for more complex frame interpolation.
Neural network methods. In recent years, with the development of deep learning
Methods have emerged that use neural networks for frame interpolation. Neural network
methods allow you to create more accurate and realistic intermediate frames, taking into account
complex data dependencies.</p>
    </div>
</div>
)


}