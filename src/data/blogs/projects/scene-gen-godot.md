# **RESEARCHING SCENE RECONSTRUCTION IN GODOT**

A research paper I've worked on in collaberation with Dr. Xin @ CSULB about facilitating Cyber-physical system validation in recontructed scenes built in the Godot engine.

![Road in Simulation](/images/blogs/projects/scene-gen-godot/project-demo.png)

---
## 🔧 Tools Used 
- Godot
- Python
- OpenCV

## 📋 About This Project 
---
Cyber-physical systems (CPS) combine cyber and physical components engineered to make decisions and interact within dynamic
environments. Ensuring the safety of CPS is of great importance, requiring extensive testing across diverse and complex scenarios.
To generate as many testing scenarios as possible, previous efforts have focused on describing scenarios using formal languages to
generate scenes. In this paper, we introduce an alternative approach: reconstructing roads inside the open-source game engine, Godot.
We have developed a pipeline that enables the reconstruction of testing roads directly from provided images of scenarios. These
reconstructed roads can then be deployed within simulated environments to assess a CPS. We demonstrate our methods on real world images
of roads.

[PAPER LINK](https://dl.acm.org/doi/10.1145/3716550.3725164)

## 🔨 How It Works 
---
We proposed a pipeline consisting of two components. First, we analyze the input image to extract the desired information. Second,
we pass this information to the simulator, which generates the corresponding scene. This approach allows us to fine-tune
scenarios within the simulator with great flexibility. We can directly add controllers and various agents to enable interactions,
and the design is adaptable for connecting multiple scenarios seamlessly in the future.
<br><br />
### *Extracting The Road*
The initial stage of the pipeline follows common practices, applying robust image processing and computer vision techniques — adjusting
brightness, contrast, and sharpness, applying Gaussian blur, and performing contour extraction and spline fitting — to detect roads. We
use Python in conjunction with OpenCV to compute and extract the road’s contour from the image.
![Extracting the road](/images/blogs/projects/scene-gen-godot/road-extraction.png)
<br><br />
### *Modifying The Road*
This segment in the pipeline has yet to come to full fruition, however, the idea is the ability to apply modifications to the scene
before it is transmitted to the simluator. Additionally, we plan on using Signal Temporal Logic to constrain the modifications
applied to the road ensuring that the newly generated road remains meaningful for testing.
![Extracting the road](/images/blogs/projects/scene-gen-godot/road-modify.png)
<br><br />
### *Transmitting The Road*
Godot operates a UDP server on the back end, listening for incoming messages via a socket. Data transmission to Godot is managed by Python
scripts. Once Godot detects incomming information, it processes the data and creates and renders an identical mesh inside the environment.
![Road in Simulation](/images/blogs/projects/scene-gen-godot/road-demo.png)

## 🔨 Development
---
This is a research project I was assigned, in early 2025, by my professor whom I've been doing research with. I was tasked on figuring out if it was possible to
reconstruct vehicle testing environments inside a game engine like Godot.

We applied and got accepted to present our progress at the [16th ACM/IEEE International Conference on Cyber-Physical Systems](https://iccps.acm.org/2025/index.html).
![Not a Good Picture of Myself](/images/blogs/projects/scene-gen-godot/ICCPS.JPEG)

**WILL WRITE MORE!**