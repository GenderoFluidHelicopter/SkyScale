import React from "react";
import DocSideBar from './DocSideBar';

export default function Terms() {

return(
<div className="app">
<DocSideBar />
    <div className="parent">
        <h1>LIST OF ABBREVIATIONS AND TERMS</h1>
        <p> <strong>Upscaling</strong> is the process of increasing the resolution of an image or video.
        by adding additional pixels or data points. The purpose of upscaling is
        improving image clarity and detail, especially when increasing its size for
        playback on higher resolution devices.</p>
        <p>
        <strong>Video interpolation</strong> is the process of creating additional frames between
        existing video frames to increase its frame rate. This method is used
        to improve the smoothness of video playback, especially in cases where
        The original video has a low frame rate.
        </p>
        <p>
        <strong>Dataset</strong> — is a structured set of data collected and
        organized for a specific purpose. A dataset is usually a collection
        data, which can be numeric, text, multimedia, etc. He
        used for training, testing and evaluating machine learning algorithms,
        statistical models or other data analysis methods.
        </p>
        <p>
        <strong>Benchmarking</strong> neural network models is a comparison process
        performance of various machine learning models or neural networks with
        using standard data sets and metrics. The purpose of benchmarking is
        determining how efficient, accurate, and time efficient the work is
        different models for solving a specific machine learning problem.
        </p>
        <p>
        <strong>Optical flow</strong> or optic flow is the pattern of apparent motion of objects,
         surfaces, and edges in a visual scene caused by the relative motion between an observer 
         and a scene. Optical flow can also be defined as the 
        distribution of apparent velocities of movement of brightness pattern in an image.
        </p>
        <p>
        <strong>Convolutional neural network </strong>(CNN) is a regularized type 
        of feed-forward neural network that learns feature engineering
        by itself via filters (or kernel) optimization. Vanishing gradients
        nd exploding gradients, seen during backpropagation in earlier neural 
        networks, are prevented by using regularized weights over fewer connections.
        For example, for each neuron in the fully-connected layer 10,000 weights would 
        be required for processing an image sized 100 × 100 pixels. However, applying 
        cascaded convolution (or cross-correlation) kernels, only 25 neurons are 
        required to process 5x5-sized tiles. Higher-layer features are extracted 
        from wider context windows, compared to lower-layer features.
        </p>
        <p>
        <strong>Reccurent neural network </strong> (RNN) is one of the two broad types
         of artificial neural network, characterized by direction of the flow of information
          between its layers. In contrast to the uni-directional feedforward neural network,
           it is a bi-directional artificial neural network, meaning that it allows the output
            from some nodes to affect subsequent input to the same nodes. Their ability to use
             internal state (memory) to process arbitrary sequences of inputs makes 
             them applicable to tasks such as unsegmented, connected handwriting recognition
              or speech recognition.[5][6] The term "recurrent neural network" is used to 
              refer to the class of networks with an infinite impulse response, whereas 
              "convolutional neural network" refers to the class of finite impulse response.
               Both classes of networks exhibit temporal dynamic behavior. A finite impulse
               recurrent network is a directed acyclic graph that can be unrolled and replaced
                with a strictly feedforward neural network, while an infinite impulse 
                recurrent network is a directed cyclic graph that can not be unrolled.
        </p>
    </div>
</div>
)
}