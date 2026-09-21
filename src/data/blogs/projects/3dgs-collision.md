# **Dynamic Collision Detection for Large-Scale Gaussian Splats in Godot**

My thesis project I've worked on under the guidance of Dr. Xin @ CSULB about a novel pipeline that facilitates robotic simulation though constructing interactive environments from 3D Gaussian Splat scans.  

![thumbnail](/images/blogs/projects/3dgs-collision/thumbnail.png)

<br></br>

## 📋 About This Project 
---
As the development and evaluation of cyber-physical and robotic systems grow more complex, the demand for accurate real-world scene representation also rises. Recent technological advances have improved the quality and performance of photorealistic 3D scans using 3D Gaussian Splatting (3DGS), enabling the creation of digital photorealistic environments such as warehouses, road networks, and industrial facilities. 
    
While 3DGS offers exceptional photorealism and real-time rendering performance, it lacks explicit physical boundaries, presenting a significant barrier for simulations requiring real-time interaction. This thesis introduces a collision detection pipeline for 3DGS environments, integrated into the open-source Godot Engine to facilitate robotic evaluation. To bridge the gap between photorealistic 3D representations and interactive physics, the proposed system utilizes an Octree-based spatial partitioning structure to efficiently organize dense Gaussian data. This architecture supports dynamic, real-time generation of convex hull colliders that are instantiated only when rigid bodies interact with specific regions of the environment. 

The evaluation of high-stress simulations demonstrates that the pipeline effectively maintains performance despite increased scene complexity. By enabling real-time physical interaction with complex 3DGS scenes without time-consuming manual setup, this pipeline offers a straightforward, scalable solution for researchers to evaluate autonomous systems in photorealistic virtual environments.

<small>*\*Paper is in the process of being published.*</small>

<br></br>

## 🔨 How It Works 
---

![Pipeline flow chart](/images/blogs/projects/3dgs-collision/flow-chart.png)

The pipeline operates in two primary stages: startup initialization and active user interaction. During initialization, the system parses a .ply file to extract Gaussian Splat data, which is then simultaneously routed to the rasterizer for rendering and to an Octree structure for spatial partitioning. Upon completion of these two systems, the user can interact with the scene in real time.  

During the interaction phase, the system allows the user to interact with the environment by freely moving the camera and spawning rigid objects. When a rigid body moves, it signals the CollisionEnvironment to perform an intersection check via the Octree. If the system identifies a collision with leaf nodes, the CollisionEnvironment triggers the ConvexHullManager to generate and place a new convex-shaped collider at those locations, allowing accurate physical interactions between objects and the Gaussian Splat environment.

![Diagram of method](/images/blogs/projects/3dgs-collision/method-diagram.png)

<br></br>

## 📋 Evaluation & Results
---
When a small number of rigid bodies are present, collisions against the environment exhibit no perceivable latency. As the number of rigid bodies increases linearly, performance decreases proportionally due to increased load on Godot's physics engine. The pipeline itself does not significantly contribute to performance loss, leaving most computational resources to be allocated to robotics or CPS simulation.

![Performance figure](/images/blogs/projects/3dgs-collision/performance-figure.png)

Memory usage increases slightly over time but remains minimal as more objects are generated into the scene. A Time-To-Live (TTL) deallocation strategy was utilized where each instantiated convex-shaped collider actively tracks its last requested time. If a physics object moves away and the collider is not queried within a specified time threshold (e.g., 2 seconds), the manager safely frees the corresponding collider from the physics server and removes the hull from memory. This dynamic allocation and deallocation system successfully and effectively culls unused colliders and ensures that the system's memory remains strictly localized to the active simulation area.

![Memory usage figure](/images/blogs/projects/3dgs-collision/memory-figure.png)

Ensuring accurate collisions is essential to the reliability of any physics-based simulation. Four test cases were conducted to assess the physical integrity of the generated convex colliders when in contact with rigid objects at rest or in active motion. The pipeline struggled with containing objects moving at high velocity, this issue arises primarily because colliders are generated after objects pass through the surface. Despite this, the collider generation system consistently produces accurate colliders with few inconsistencies. The overall accuracy of the collider generation is heavily dependent on the quality of the 3DGS, with inconsistencies primarily occurring in areas of low splat density where generation may be incomplete.