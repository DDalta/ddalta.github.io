# **Dynamic Collision Detection for Large-Scale Point Clouds in Godot**

Built a real-time collision-detection pipeline that operates directly on large-scale point clouds inside the Godot game engine.

![Thumbnail image](/images/blogs/projects/pointcloud-collision/large-model-example.png)

---
## 🔧 Tools Used 
- Godot
- GDScript

## 📋 About This Project 
---
The verification of cyber-physical system (CPS) safety is critical to ensuring the reliability and stability of autonomous technologies. CPS often operates in safety-critical fields such as transportation, healthcare, and industrial automation, where rigorous and thorough verification is essential. Running simulations for CPS relies on digital replicas of real-world environments for rapid prototyping and ensuring training is performed safely. As more systems operate in dynamic environments, the need for precise simulation has grown substantially. 3D scanning technologies, specifically LiDAR, are increasingly utilized to capture high-quality spatial data. These devices are capable of translating physical environments into point clouds: large collections of primitive points that represent complex geometric structures. In modern robotics simulation pipelines, these high resolution point clouds play critical role in helping models learn to interpret and interact in complex physical spaces. Point clouds offer accurate real-world environment data required to train perception, mapping, navigation, object recognition, and much more.

While rendering point clouds inside game engines is not unknown, there is a notable lack of resources regarding the integration of point cloud collision detection systems, particularly within Godot. Godot is a powerful free and open-source game engine used to create 2D and 3D applications. It features user-friendly interfaces alongside a built-in high level scripting language and many tools for handing animations, physics, user interfaces, etc. I've previously experimented with rendering point clouds inside Godot, however, I wondered if Godot's physics engine could be integrated to interact dynamically with point clouds. This project's implementation is heavily based on the research paper, BSH for Collision Detection in Point Cloud Models, by Mauro Figueiredo, João Pereira, João Oliveira, and Bruno Araujo. The authors noted a gap in documented research regarding collision detection for point cloud models. By utilizing methods outlined in their research, I built a collision detected system that interacts with Godot's physics engine and static large-scale point cloud environments.
<br><br />
![project example](/images/blogs/projects/pointcloud-collision/small-objects-example.png)

## 🔨 How It Works 
---

### *PLY File Loading*
The implementation of the PLY file parser supports ASCII and binary PLY formats. The parser reads the header to determine the available properties (e.g., positions, normals, colors) and loads vertex data into a PackedFloat32Array for efficient storage and cache-friendly traversal at run time.
<br><br />
### *Octree Data Structure*
To handle spatial queries, An axis-aligned octree is built over the point cloud’s bounding box. Each node stores its axis-aligned bounding box (AABB) and, for leaf nodes, the subset of points it contains. A leaf node is split once its capacity exceeds a threshold. Insertion proceeds by recursively descending into the octree, allocating child nodes on demand. If a leaf node overflows, it subdivides into eight children and redistributes all of its points accordingly.
<br><br />
### *Physics Integration*
The key idea is to generate collision primitives only for points contained in the octree leaves that are actively being collided with a dynamic object. Instead of treating every point as a collider, the system allocates collision spheres on demand and frees it as soon as it is no longer needed. For each physics body, the system queries the octree to obtain a small set of intersected leaf nodes. This dramatically narrows the search space from millions of points to only the points stored within these nodes. For each intersected leaf node without active colliders, the system iterates over its point data and creates small colliding sphere shapes at those positions. Additionally, colliding spheres that were active in previous frames but are no longer intersecting are removed. Godot will handle all physics calculations.
<br><br />
![Octree data structure example.](/images/blogs/projects/pointcloud-collision/octree-diagram.png)

## 🔮 Future 
---
While this project successfully demonstrates the integration of point cloud collision within a game engine, it remains primarily a proof-of-concept. Further work and significant optimizations are necessary for this project to reach the level of performance and practical use for robotic simulations. Some methods presented in the original research paper that could improve the performance of point extraction from leaf nodes, have yet to be implemented. Lastly, there is great potential to adapt this methodology for Gaussian Splatting. Unlike standard point clouds, Gaussian Splats model a scene through millions of primitive blobs (Gaussians), each having manipulatable properties such as position, color, rotation, and scale. Transitioning from primitive points to Gaussian splats offers the potential to provide higher-quality environments for CPS applications.
<br><br />
![Potential application for vehicle simulation.](/images/blogs/projects/pointcloud-collision/car-collision-example.png)
Potential application for vehicle simulation.
