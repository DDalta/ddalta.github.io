# **Multi-Class Image Segmentation on Cars**

Trained a model to accurately perform semantic segmentation of vehicle parts with Tensorflow.

![Project Output Example](/images/blogs/projects/car-detect/thumbnail.png)

---

<br></br>

## 🔧 Tools Used 
- Python 
- Tensorflow
- NumPy
- OpenCV

<br></br>

## 📋 About This Project 
---
The automotive industry has seen many significant advancements with the rise of the autonomous vehicle. A large portion of the software used to power these technologies involves the use of machine vision and segmentation. In the field of autonomous vehicles, robust segmentation is critical for vehicles to understand their surroundings. It’s important that they can identify the turn signals or brake lights of other vehicles on the road. There are numerous additional reasons for using machine vision in the indusrty.

The core goal of this project was to achieve precise semantic segmentation of vehicle parts, specifically identifying components like windows, lights, the main body, and wheels. It utilizes a Kaggle dataset of 200 images, where most images featured side-view angles of vehicles captured under bright lighting conditions. The outcome the trained model varried depending on the input image. Overall, based on the training data used, the model did well on segmenting vehicle parts.  

The model was trained for about 110 epochs, achieving a peak validation accuracy of around 80%. While generally successful, the model struggled with cars at different viewing angles and those with complex designs.

![Project Output Example 2](/images/blogs/projects/car-detect/project-output.png)

<br></br>

## 🔨 Development 
---

In preparation for training, the dataset undergoes essential preprocessing to ensure it is compatible with the training model. Images are resized to a uniform resolution of 256x256 and then normalized so that each value ranges from 0 to 1. Similarly, the segmentation masks are resized to 256x256. Afterward, they are then one-hot encoded, converting the single-channel mask into a 5-channel floating-point mask. Now, each channel corresponds to a specific class, with each pixel within a channel acting as a binary indicator (0 or 1) denoting whether a class is located at that pixel.

The dataset was expanded through data augmentation techniques such as flips, shifts, and brightness adjustments to address its limited size.

To handle the class imbalance where the background dominates the images, class weights were calculated and applied during training.

The model utilized for this project was UNet. This model is effective with smaller datasets and can be adapted for multi-class segmentation. The architecture employs a symmetric encoder-decoder structure, which can be visualized in the shape of the letter “U”. 

The encoder pathway consists of sequential repeated blocks of convolution layers, two 3x3 convolutions each followed by a ReLU activation function, followed by a max-pooling operation to downsample. With each downsampling step, the spatial resolution decreases while increasing the number of feature channels, enabling the encoder to capture contextual information of the image.
On the other hand, the decoder pathway progressively increases the spatial resolution while decreasing the number of feature channels. Each decoder block typically involves an up-sampling operation, achieved using a transposed convolution layer, followed by an important concatenation with the corresponding feature map from the encoder path via skip connections. Lastly, the concatenation is then followed by two 3x3 convolutions, each with ReLU activations.

Skip connections play an important role in the architecture. They concatenate high-resolution feature maps from the encoder directly to the same spatial resolution feature maps in the decoder. This allows the decoder to reuse high-resolution features learned by the encoder, enabling more precise localization of segmentation boundaries, which might otherwise be lost during downsampling.

![UNet Model](/images/blogs/projects/car-detect/unet-model.png)

For model compilation, the Adam optimizer was chosen with a learning rate of 0.0004, which is a common setting for image segmentation tasks. The loss function used was Dice loss, a metric used to measure the overlap between the predicted segmentation masks and the ground truth masks. Furthermore, to accurately assess the training performance, Mean Intersection-Over-Union (Mean IoU) was utilized as the main evaluation metric. The standard accuracy metric can be misleading in segmentation tasks.

Throughout the training process, the model initially shows a slow rate of feature learning. However, as depicted in the figure curve, the model eventually began to progressively improve in accuracy and ultimately triggered early stopping at approximately 110 epochs. At the stopping point, it achieved a peak validation accuracy of around 80% and a minimum loss of around 10%. 

![Model IOU](/images/blogs/projects/car-detect/model-iou.png)
![Model Loss](/images/blogs/projects/car-detect/model-loss.png)

<br></br>

## 🫠 Challenges
---
The primary challenges faced in this project were rooted in the dataset's limitations. With only 200 images, the dataset was very small and lacked diversity, as most images featured side-view angles in bright lighting. Additionally, there was significant class imbalance, where the background was overrepresented compared to smaller vehicle parts like lights, which risked biasing the model. These issues led to difficulties during training and evaluation, causing the model to have a slow initial learning phase. Consequently, while the final model performed reasonably well, it struggled to accurately segment cars at different angles or those with complex designs, and it still produced subtle inaccuracies and "segmentation leaks", ultimately highlighting the difficulty of achieving robust performance with the available data.

<br></br>

## ✏️ Concluding Thoughts
---
For future development, several enhancements could be used to improve the model’s performance and applicability. Firstly, utilizing a more suitable dataset with greater diversity in car images, including a wider range of viewing angles and more images of cars with complex design patterns. Secondly, incorporating transfer learning techniques could significantly accelerate feature extraction, especially during the initial training stages. Lastly, expanding the model to identify more vehicle components, such as doors, mirrors, hood, roof, and truck, would increase the usability for common car segmentation use cases.
