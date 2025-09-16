# **RESEARCHING SCENE RECONSTRUCTION IN GODOT**

A research paper I've worked on in collaberation with Dr. Xin @ CSULB about facilitating Cyber-physical system validation in recontructed scenes built in the Godot engine.

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
I used Python-OpenCV to isolate the contour of a road image taken from a birds-eye view. 

## 🔨 Development
---
This is a research project I was assigned to by my professor whom I've been doing research with in early 2025. I was tasked on figuring out if it was possible to
reconstruct vehicle testing environments inside a game engine like Godot.