# **ARDUINO SONAR SENSOR**

A simple sonar sensor made using an Arduino board.

![thumbnail](/images/blogs/projects/sonar-sensor/thumbnail.png)

---
## 🔧 Tools Used 
- Arduino 
- Python
- PyGame
- PySerial

## 🔧 Components Used 
- 1 x Arduino SparkFun RedBoard
- 1 x Bread Board
- 1 x HC-SR-4 Ultrasonic Sensor
- 1 x Tower Pro SG51R Micro Servo


## 📋 About This Project 
---
This project is a simple working sonar device I made using an Arduino Board. The sonar continuously turns 180 degrees and can detect if any object is close up to 40 centimeters. Additionally, using Python, I made an interface that the sonar can communicate to and display where an object was detected. 

<iframe width="560" height="315" src="https://www.youtube.com/embed/qStzikGgo3c?si=MP8jet45IAgPXE_w" title="YouTube video player" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## 🔨 How It Works 
---
![Circuit Design](/images/blogs/projects/sonar-sensor/circuit-design.png)
 Writing the software for the Arduino Board was done using a variant of C++ inside the Arduino IDE.

Inside the update loop, the sonar device:

    1. Checks if the servo has reached a bound and updates its direction.
    2. Ultrasonic Sensor scans and outputs the measurements.
    3. Turns the servo motor 1 degree in the specified direction.

The HC-SR04 Ultrasonic Sensor emits bursts of ultrasonic sound waves and times how long it takes to reflect. The Round Trip Time taken by the sound waves can be used to measure the distance of an object in front of the sensor.

The interface for the sensor is built using Pygame, a library that allows the development of games and other media applications using Python. The design of the interfaces is composed of simple shapes and some text.

To communicate the Arduino Board with the Python interface, I used the PySerial library. This allowed me to read and store serial prints made from the Arduino Board. 

## ✏️ Concluding Thoughts
---
I am largely interested in learning about hardware, engineering, and robotics. The process of building something that can be physically interacted with and used in the real world motivates me to further explore these fields. I wanted to find a project that I knew wouldn't be too easy but would be challenging enough for me to complete in a few days.

The idea for this project came from a video I came across online. When I looked at the parts used, I knew this would be a fun project to get me into working with Arduinos. Additionally, the challenge of integrating a graphical interface intrigued me as well.

Overall, I enjoyed working on this project. I learned a lot about tinkering with micro controllers, assembling circuits, and writing software to bring it to life. This project has improved my skills and I look forward to the next Arduino project I do. 