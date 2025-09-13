import insta_icon from "@/assets/icons/instagram.svg"
import github_icon from "@/assets/icons/github.svg"
import linkedin_icon from "@/assets/icons/linkedin.svg"

import NoTapsThumbnail from "@/assets/images/projects/notaps/thumbnail.png"
import BTAThumbnail from "@/assets/images/projects/bta/thumbnail.png"

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
]

export const SOCIALS = [
    {
        icon: insta_icon,
        url: "https://www.instagram.com/ddalta"
    },
    {
        icon: github_icon,
        url: "https://github.com/DDalta"
    },
    {
        icon: linkedin_icon,
        url: "https://www.linkedin.com/in/daniel-a-peralta/"
    }
]

export const PROJECTS = [
    {
        name: "No-Taps Parking App",
        description: "A parking app for UCSC.",
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
        name: "Behaviour Tree Agent",
        description: "Traverses through a procedural level containing treasures and enemies.",
        image: BTAThumbnail,
        tags: [
            "Unity",
            "C#",
            "Git"
        ],
        url: "blog/projects/bta"
    },
    {
        name: "Simple Network Chat App",
        description: "A simple TCP-based chat app.",
        image: NoTapsThumbnail,
        tags: [
            "Python"

        ],
        url: "blog/projects/python-chat-app"
    },
    {
        name: "Arduino Sonar Sensor",
        description: "A simple sonar sensor made with a microcontroller.",
        image: BTAThumbnail,
        tags: [
            "Arduino",
            "Python",
            "PyGame"
        ],
        url: "blog/projects/sonar-sensor"
    },
]

export const SKILLS = [
    {
        name: "Python",
        icon: ""
    },
    {
        name: "React",
        icon: ""
    }
]