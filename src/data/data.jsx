import InstaIcon from "@/assets/icons/instagram.svg?react";
import GithubIcon from "@/assets/icons/github.svg?react";
import LinkedinIcon from "@/assets/icons/linkedin.svg?react";

import NoTapsThumbnail from "@/assets/images/projects/notaps/thumbnail.png";
import BTAThumbnail from "@/assets/images/projects/bta/thumbnail.png";
import PCAThumbnail from "@/assets/images/projects/python-chat-app/thumbnail.png";
import SonarThumbnail from "@/assets/images/projects/sonar-sensor/thumbnail.png";
import SceneGenThumbnail from "@/assets/images/projects/scene-gen-godot/thumbnail.png";

export const NAV = [
    {
        "label": "ABOUT",
        "url": "#about",
        "background": "#ffffff"
    },
    {
        "label": "PROJECTS",
        "url": "#projects",
        "background": "#ffffff"
    },
    {
        "label": "CONTACT",
        "url": "#contact",
        "background": "#ffffff"
    },
    {
        "label": "RESUME",
        "url": "",
        "background": "#88b5fc"
    },
];

export const SOCIALS = [
    {
        icon: InstaIcon,
        url: "https://www.instagram.com/ddalta"
    },
    {
        icon: GithubIcon,
        url: "https://github.com/DDalta"
    },
    {
        icon: LinkedinIcon,
        url: "https://www.linkedin.com/in/daniel-a-peralta/"
    }
];

export const PROJECTS = [
    {
        name: "No-Taps Parking App",
        description: "A web application designed to alleviate parking frustrations at UCSC by providing real-time parking availability through a user-based reporting system. Features include color-coded map of campus parking lots, allowing users to view lot information, submit availability ratings, and filter lots based on specific criteria.",
        image: NoTapsThumbnail,
        tags: [
            "Node.js",
            "HTML",
            "CSS",
            "MySQL",
            "Caddy",
            "Asuna",
            "Git"
        ],
        url: "blog/projects/notaps"
    },
    {
        name: "Researching Scene Reconstruction in Godot",
        description: "A research paper I'm working on in collaberation with Dr. Xin @ CSULB about facilitating CPS validation by introducing a pipeline that reconstructs scenes inside the Godot engine from an image.",
        image: SceneGenThumbnail,
        tags: [
            "Python",
            "Godot",
            "Research",
            "In Progress",
        ],
        url: "blog/projects/scene-gen-godot"
    },
    {
        name: "Behaviour Tree Agent",
        description: "Utilizing the Unity engine to create an AI agent controlled by a behavior tree. The agent is designed to navigate procedurally generated levels, collect valuable items within its line of sight, and retreat to find a new path upon detecting an enemy.",
        image: BTAThumbnail,
        tags: [
            "Unity",
            "C#",
            "Git"
        ],
        url: "blog/projects/bta"
    },
    {
        name: "Network Chat App",
        description: "A simple, TCP-based chat program that allows two clients to have a bidirectional conversation. A central server acts as a matchmaker, connecting two clients after they register their contact information and signal their readiness. Once connected, one client initiates the chat, and they take turns writing and reading messages until the session is terminated.",
        image: PCAThumbnail,
        tags: [
            "Python",
            "Sockets"
        ],
        url: "blog/projects/python-chat-app"
    },
    {
        name: "Arduino Sonar Sensor",
        description: "An Arduino-based sonar device that uses a servo motor to sweep an ultrasonic sensor across a 180-degree arc, detecting objects up to 40cm away. Along with a custom interface built in Python with Pygame and PySerial reads the data from the Arduino to provide a real-time visual representation of detected objects on a radar-like display.",
        image: SonarThumbnail,
        tags: [
            "Arduino",
            "Python",
            "PyGame"
        ],
        url: "blog/projects/sonar-sensor"
    },
];

export const SKILLS = [
    {
        label: "JavaScript",
        icon: ""
    },
    {
        label: "React",
        icon: ""
    },
    {
        label: "HTML",
        icon: ""
    },
    {
        label: "CSS",
        icon: ""
    },
    {
        label: "TailwindCSS",
        icon: ""
    },
    {
        label: "Python",
        icon: ""
    },
    {
        label: "Flask",
        icon: ""
    },
    {
        label: "Godot",
        icon: ""
    },
    {
        label: "Git",
        icon: ""
    },
    {
        label: "Node.JS",
        icon: ""
    }
];