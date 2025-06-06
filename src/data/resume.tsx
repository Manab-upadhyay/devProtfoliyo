import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon, School } from "lucide-react";
import { title } from "process";
import { start } from "repl";

export const DATA = {
  name: "Manab Upadhyay",
  initials: "MMU",
  
  location: "Assam, india",
  locationLink: "https://www.google.com/maps/place/assam",
  description:
    "An enthusiats Full stack Web Developer and a Creative Web designer ",
  summary:
   "At the end of 2022, I embarked on my [B.Tech journey](/#education) at [Assam University](/#) Silchar, as a Computer Science Engineering student. My interest in technology [skyrocketed](#), and I quickly gained a solid foundation in programming languages like C, C++, and Python. In 2023, I dove into the world of web development, which has been a roller coaster ride of learning and growth. During this time, I built [amazing projects](/#projects) and helped startups bring their visions to life. My hunger for growth in this field is unrelenting.",
  avatarUrl: "/mypic - Copy-removebg-preview (1).jpg",
  skills: [
    "React",
    "Next.js",
    "Typescript",
    "JavaScript",
    "Node.js",
    "Python",
    "Go",
    "MongoDb",
    "Docker",
    "C++",
    "React Native",

  ],
  education:[
    {
      school:"Assam(Centrel) University Silchar",
      href:"http://www.aus.ac.in/",
      logoUrl:"data:image/jpeg;base64,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",
degree:"Computer Science And Engineering",
start:"Nov-2023",
end: "July-2026"
    },
    {
      school:"VKV,tingrai",
      logoUrl:"https://www.vkvapt.org/images/2024/07/10/vrmvk-logo.png",
      href: "https://tingrai.vkv.in/",
      degree:"Class-10, garde-92%",
      start:"2014",
      end:"2019"
    },
    {
    school:"KV,Duliajan",
    href:"https://duliajan.kvs.ac.in/",
    logoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6a7f4wdQBKYv100YA8217FM57h2OHD67QvA&s",
    degree:"Class-12,garde-90%",
    start:"2019",
    end:"2021"
    
  }

  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "manabupadhyay123@gmail.com",
    tel: "8822128486",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/Manab-upadhyay",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/manab-upadhyay-795075262",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/Manab37591181",
        icon: Icons.x,

        navbar: true,
      },
     
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Yardstick",
      // logoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Freelancer.com_Logo.png/1200px-Freelancer.com_Logo.png",
      location: "Remote",
      title: "Full Stack Solfware Devloper",
     
      start: "Feb 2025",
      end: "March 2025",
    
      description:
        "Worked on the UI revamp of an AI agent SaaS platform, enhancing visual consistency and user experience usingmodern frontend technologies.Worked on frontend and backend integration , also integrated Stripe payment flow on the client side, ensuringsmooth and responsive user interactions during the checkout process.Collaborated with the design team to implement responsive layouts and component-based architecture for scalableUI developmen",
    },
    {
      company: "Sudama Solution Technology",
      // logoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Freelancer.com_Logo.png/1200px-Freelancer.com_Logo.png",
      location: "Remote",
      title: "Full Stack Solfware Devloper",
     
      start: "March 2025",
      end: "May 2025",
    
      description:
        "Developed and maintained a full-stack dating application using Firebase for real-time data handling authentication, and scalable backend services. Contributed to a multi-tenant school management system, implementing dynamic routing, user-role-based access control, and modular architecture.Optimized the performance and UI of the company’s brand website (BookMyDoct), improving load speed and user engagement through frontend enhancements and SEO improvements.",
    },
   
  ],
  projects: [
    {
      title: "Bus-tracking-System",
      href: "",
      dates: "May 2024 - Aug 2024",
      active: true,
      description:
        "Build an bus-tracking-sytem named Busbuddy which allows student and faculty to track the rela time location of our university busses",
      technologies: [
        "Flutter",
        "Kotlin",
        "MongoDb",
        "Fire-base",
        "Nodejs",
        "Express",

      ],
      links: [
        {
          type: "Application",
          href: "",
          icon: "",
        },
      ],
      image: "",
      video:
        "/ourapp (online-video-cutter.com) (1).mp4",
    },
    {
      title: "Task Management System",
      href: "",
      dates: "June 2024 - September-2024",
      active: true,
      description:
        "Designed and devloped a Task Management System  for the seamless management of task and team colaboration",
      technologies: [
        "Next.js",
        "Typescript",
        "MongoDb",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://task-management-sys-lime.vercel.app/",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "/Screen Recording 2025-06-06 214126.mp4",
    },
    {
      title: "Me Healthy",
      href: "",
      dates: "June 2024 - July 2024",
      active: true,
      description:
        "Built a bilingual (Hindi and English) disease information API using Node.js and Express, tailored for developers building health-related applications.",
      technologies: [
        "Node js",
        "Express",
        "Docker",
        "AWS",
        "Jest",
        "Mocha",
         "Authentication",
        
  
      ],
      links: [
        {
          type: "Website",
          href: "https://documenter.getpostman.com/view/29482154/2sAXxY4oXn",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Manab-upadhyay/Chat-app",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "/Screen Recording 2025-06-06 214240.mp4",
    },
    {
      title: "Blog-Website",
      href: "",
      dates: "March 2024 - March 2024",
      active: true,
      description:
        "Developed a blog platform that supports user authentication, enabling smooth sign-in, login management, and seamless blog creation and management. The platform allows users to share their thoughts and ideas effortlessly.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",

      ],
      links: [
        {
          type: "Website",
          href: "https://blog-psi-lovat-28.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "/Screen Recording 2024-09-01 200157.mp4",
    },
  ],
  hackathons: [
    {
      title: "BusBuddy",
      dates: "May 2024 - AUG-2024",
      location: "Silchar , Assam",
      description:
        "Developed a robust real-time bus tracking system for our university, providing continuous updates on bus locations and routes to enhance transportation efficiency and safety for students and staff. ",
      image:
        "https://thumbs.dreamstime.com/b/cartoon-school-bus-20777294.jpg",
      mlh: "https://thumbs.dreamstime.com/b/cartoon-school-bus-20777294.jpg",
      links: [],
    },
    {
      title: "Admin-Portal",
      dates: "July 6th - August-15th",
      location: "Silchar,Assam",
      description:
        "Created a full-stack web application for seamless management of the bus tracking system, enabling administrators to monitor and manage transportation operations efficiently.",
      image:
        "https://www.shutterstock.com/image-vector/man-working-laptop-computer-desk-600nw-1967455246.jpg",
      mlh: "https://www.shutterstock.com/image-vector/man-working-laptop-computer-desk-600nw-1967455246.jpg",
      links: [
       
        {
          title: "Source",  
          href: "https://github.com/Manab-upadhyay/Admin-bus",
          icon: <Icons.github className="size-3" />, 
        },
      ],
    },
    {
      title: "Assam University-Alumini-portal",
      dates: "january - March-2024",
      location: "Silchar,Assam",
      description:
        "I worked on our university's alumni website, which showcases alumni information and their biodata. Additionally, I developed the server-side functionality to facilitate the uploading and management of alumni data. ",
      image:
        "data:image/jpeg;base64,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",
      mlh: "https://www.shutterstock.com/image-vector/man-working-laptop-computer-desk-600nw-1967455246.jpg",
      links: [
        {
          title: "Source",  // Changed from 'type' to 'title'
        href: "https://github.com/AyushKaithwas/alumni-website-client",
        icon: <Icons.github className="size-3" />, 
        },
      ],
    },
    {
      title:"Chat-application",
      dates:"July-August",
      location:"Dibrugarh, Assam",
      description: "Developed a dynamic real-time chat application using the MERN stack and Socket.io, allowing users to communicate seamlessly across various devices.",
      image:
      "https://static.vecteezy.com/system/resources/previews/001/811/014/original/social-media-messenger-networking-two-businesswoman-chat-flat-cartoon-illustration-for-web-banner-infographics-mobile-smart-phone-with-dialog-bubble-people-face-avatar-on-a-screen-vector.jpg",
    mlh: "https://static.vecteezy.com/system/resources/previews/001/811/014/original/social-media-messenger-networking-two-businesswoman-chat-flat-cartoon-illustration-for-web-banner-infographics-mobile-smart-phone-with-dialog-bubble-people-face-avatar-on-a-screen-vector.jpg",
    links: [
      {
      title: "Source",  // Changed from 'type' to 'title'
      href: "https://github.com/Manab-upadhyay/Chat-app",
      icon: <Icons.github className="size-3" />, 
      }
  
    ],
      
    },
    {
      title:"Codeswear",
      dates:"March-May-2024",
      location:"silachar",
      description:"Built an e-commerce website with integrated payment gateway, allowing users to browse and purchase apparel effortlessly. The project focused on providing a user-friendly shopping experience and secure transactions. ",
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3iNjKJ3rbMKdUXXjgyoDIlWcf4kNvXqz61w&s",
      mlh:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3iNjKJ3rbMKdUXXjgyoDIlWcf4kNvXqz61w&s",
      links:[
        {
        title: "Source",  // Changed from 'type' to 'title'
        href: "https://github.com/Manab-upadhyay/Codeswear1",
        icon: <Icons.github className="size-3" />, 
        }
      ]
    },
{
title:"Blog-Website",
      dates:"March-May-2024",
      location:"Silchar",
      description:"Developed a blog platform that supports user authentication, enabling smooth sign-in, login management, and seamless blog creation and management. The platform allows users to share their thoughts and ideas effortlessly. ",
      image:"https://img.freepik.com/premium-vector/word-blog-vector-banner-with-text-colored-rainbow_100655-2724.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1725062400&semt=ais_hybrid",
      mlh:"https://img.freepik.com/premium-vector/word-blog-vector-banner-with-text-colored-rainbow_100655-2724.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1725062400&semt=ais_hybrid",
      links:[
        {
          title: "Source",  // Changed from 'type' to 'title'
        href: "https://github.com/Manab-upadhyay/Blog",
        icon: <Icons.github className="size-3" />, 
        },
      ]
},
{
  title:"Todo-App",
        dates:"Jan-2024",
        location:"Silchar",
        description:"Developed a simple yet effective to-do web application as part of my web development learning journey. This project laid the foundation for my skills in React, helping me understand key concepts and best practices in front-end development. ",
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwu-PoDKsazxzc3IUxcx17ZpOy0EARw7M60Q&s",
        mlh:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwu-PoDKsazxzc3IUxcx17ZpOy0EARw7M60Q&s",
        links:[
          {
            title: "Source",  // Changed from 'type' to 'title'
        href: "https://github.com/Manab-upadhyay/TODO",
        icon: <Icons.github className="size-3" />, 
          },
        ]
  }
  ]
} as const;
