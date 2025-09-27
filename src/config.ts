export const siteConfig = {
  name: "Gennaro Scarati",
  title: "Robotics & AI Engineer",
  description: "Portfolio website of Gennaro Scarati",
  avatar: "/me.png",
  accentColor: "#1d4ed8",
  cv: "/CV_Gennaro_Scarati.pdf",
  social: {
    email: "gennaro.scarati@outlook.com",
    linkedin: "https://www.linkedin.com/in/gennaroscarati/",
    github: "https://github.com/gennscar",
  },
  aboutMe:
    "I am a Robotics and AI engineer passionate about creating systems that move, sense, and learn. My background spans robotics, control systems, computer vision, and artificial intelligence, with experience in both startups and large-scale production environments. I’d describe myself as a very curious person, always eager to learn new things and stay updated with the latest technologies. In my free time, I enjoy hiking and exploring new places on foot.",
  skills: [
    "ROS/ROS2",
    "Python",
    "C++",
    "OpenCV",
    "PyTorch",
    "Docker",
    "Git",
    "Linux",
    "MATLAB",
    "Simulink",
  ],
  languages: [
    { name: "Italian", level: "Native (C2)" },
    { name: "English", level: "Fluent (C1)" },
    { name: "Spanish", level: "Fluent (C1)" },
    { name: "German", level: "Conversational (A2/B1)" },
  ],
  projects: [
    {
      name: "Single and Dual-Arm Robotic System for Cucumber Harvesting",
      description: [
        "A modular, multi-arm robotic system for automated cucumber harvesting, integrating perception, task planning, and control pipelines orchestrated by Behavior Trees, achieving sub-centimeter accuracy for cucumber pose and size estimation.",
        "Initially validated in controlled lab environments, the system was then extended to other crops and successfully deployed in real-field scenarios."
      ],
      link: "",
      media: "/cucumber_harvester.webm",
      poster: "/cucumber_thumbnail.jpg",
      github: "",
      youtube: "",
      paper: "",
      skills: [
        "Python",
        "C++",
        "ROS2",
        "MoveIt",
        "OpenCV",
        "Behavior Trees",
        "PyTorch",
        "Docker",
      ],
    },
    {
      name: "Robo-Boy",
      description: [
        "Robo-Boy is a mobile-first web app for controlling ROS2-based robots, including drones, manipulators, and ground robots.",
        "It offers multi-platform control with customizable gamepad layouts, real-time WebSocket communication, and 3D visualization with point cloud and URDF model support.",
      ],
      link: "",
      media: "/roboboy.webm",
      poster: "",
      github: "https://github.com/tessel-la/robo-boy",
      youtube: "",
      paper: "",
      skills: [
        "React",
        "TypeScript",
        "Vite",
        "Three.js",
        "ROS2",
        "Docker",
        "CSS",
      ],
    },

    {
      name: "Autonomous Drone Landing on Moving UGVs",
      description: [
        "An autonomous drone landing system achieving centimeter-level precision on moving UGVs, using an EKF-based localization pipeline integrating drone, UGV, and UWB data.",
        "Designed perception, pose estimation, control, and state machine pipelines for chase and landing, validated through Gazebo simulations and real-world field tests."
      ],
      link: "",
      media: "/uav_autoland.webm",
      poster: "/uav_thumbnail.jpg",
      github: "https://github.com/gennscar/drone_uwb_autoland",
      youtube: "",
      paper: "https://webthesis.biblio.polito.it/secure/21180/1/tesi.pdf",
      skills: [
        "Python",
        "C++",
        "ROS2",
        "Gazebo",
        "MATLAB",
        "Simulink",
        "OpenCV",
      ],
    },
  ],
  publications: [
    {
      title:
        "A Modular Robotic System for Single and Dual-Arm Cucumber Harvesting",
      authors: "Gennaro Scarati, Óscar Palacín, Mario Cavero-Vidal and Néstor García",
      venue: "Iberian Robotics Conference (ROBOT) - IEEE Proceedings",
      year: "2025",
      description:
        "Accepted for presentation at ROBOT2025 to be held in November 2025 in Porto. This work presents a modular robotic system designed for automated cucumber harvesting using both single and dual-arm configurations.",
      pdf: "",
      github: "",
      youtube:
        "https://drive.google.com/file/d/1ZYfcPaBWFEoXY0rSMZK5tBUQx1c2Q1-R/view",
    },
    {
      title:
        "Advances on Affordable Hardware Platforms for Human Demonstration Acquisition in Agricultural Applications",
      authors:
        "Alberto San-Miguel-Tello, Gennaro Scarati, Alejandro Hernández, Mario Cavero-Vidal, Aakash Maroti, and Néstor García",
      venue:
        "European Robotics Forum (ERF) - Springer Proceedings in Advanced Robotics (SPAR)",
      year: "2025",
      description:
        "This paper presents advances on the Universal Manipulation Interface (UMI) for agricultural robotics, focusing on improving human demonstration acquisition for embodied AI models through task sample extraction and EKF-based trajectory generation for fruit harvesting applications.",
      pdf: "https://arxiv.org/pdf/2506.09494",
      github: "",
      youtube: "https://youtu.be/BaHs9nDfU18?si=5nMPt-nHDN1iZZwt",
    },
  ],
  experience: [
    {
      company: "Eurecat",
      title: "Robotics & AI Engineer",
      location: "Barcelona, Spain",
      dateRange: "July 2023 - Present",
      bullets: [
        "Develop and deploy robotics and AI software modules for industrial and agricultural robots.",
        "Implemented modular behavior trees orchestrating optimally planned high-level tasks, reducing development time for dexterous manipulation pipelines by 50%.",
        "Designed a real-time perception pipeline for detection, segmentation, tracking, 6D pose, and size estimation, achieving sub-centimeter accuracy for pose and size.",
        "Train and implement learning-from-demonstration pipelines (VLAs, Diffusion Policies) to solve dexterous manipulation tasks, such as fruit harvesting and industrial assembly.",
      ],
      skills: [
        "C++",
        "Python",
        "ROS2",
        "Docker",
        "OpenCV",
        "PyTorch",
        "Linux",
        "Git",
      ],
    },
    {
      company: "Dumarey Softronix",
      title: "Control Systems Engineer",
      location: "Turin, Italy",
      dateRange: "Mar 2022 - July 2023",
      bullets: [
        "Developed and maintained control systems for General Motors vehicles, deployed on around 100,000 units in 2024 alone.",
        "Enhanced fault diagnostic performance by ~50% by combining RNN-based system prediction with classical model-based methods, while reducing calibration effort by ~30%.",
        "Collaborated with cross-functional teams in Italy, India, and the U.S. to meet development, calibration, and testing milestones.",
      ],
      skills: ["C", "Python", "Git", "MATLAB", "Simulink", "DOORS"],
    },
    {
      company: "PIC4SeR",
      title: "Master's Thesis Researcher in Robotics",
      location: "Turin, Italy",
      dateRange: "Mar 2021 - Dec 2021",
      bullets: [
  "Developed an autonomous drone landing system achieving centimeter-level precision on moving UGVs in real-world scenarios.",
  "Designed the complete landing pipeline, integrating UWB localization, perception modules, and control systems.",
  "Implemented a robust EKF-based localization pipeline fusing UWB, drone, and UGV data, achieving position errors under 5 cm during chase and landing maneuvers.",
  "Validated the system through Gazebo simulations and real-world field tests, proving precise and reliable landing under dynamic conditions."
      ],
      skills: ["Python", "C++", "ROS2", "Gazebo", "MATLAB", "Simulink", "Git"],
    },
  ],
  education: [
    {
      school: "Polytechnic University of Turin",
      degree: "Master's Degree in Mechatronics Engineering",
      location: "Turin, Italy",
      dateRange: "2019 - 2021",
      achievements: [
        "Final Grade: 110 with honours/110 (GPA: 4.0/4.0)",
        "Won first place at 'Challenge@Polito: Artificial Intelligence' by developing an NLP application in a multidisciplinary team to generate mind maps supporting students with learning disabilities. The project evolved into a startup that raised over €1.5 million.",
      ],
    },
    {
      school: "Polytechnic University of Turin",
      degree: "Bachelor's Degree in Mechanical Engineering",
      location: "Turin, Italy",
      dateRange: "2016 - 2019",
      achievements: ["Final Grade: 110/110"],
    },
  ],
  hobbies: [
    {
      name: "Photography",
      description:
        "Capturing moments and exploring the world through the lens, with a focus on landscape and street photography.",
      icon: "📸",
    },
    {
      name: "3D Printing",
      description:
        "Designing and creating custom parts and prototypes, combining engineering skills with creative problem-solving.",
      icon: "🖨️",
    },
    {
      name: "Hiking",
      description:
        "Exploring nature trails and mountain paths, finding inspiration and maintaining work-life balance in the outdoors.",
      icon: "🥾",
    },
    {
      name: "Electronics",
      description:
        "Building and tinkering with Arduino and Raspberry Pi projects, from home automation to robotics experiments.",
      icon: "⚡",
    },
    {
      name: "Cooking",
      description:
        "Experimenting with international cuisines and perfecting traditional recipes, especially Italian and Mediterranean dishes.",
      icon: "👨‍🍳",
    },
    {
      name: "Reading",
      description:
        "Diving into sci-fi novels, technical books, and research papers to stay curious and continuously learn.",
      icon: "📚",
    },
  ],
};


