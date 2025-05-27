import Display from "../components/Display";

export default function Homepage() {
  const projects = [
    {
      name: "DevNet",
      description:
        "DevNet is a dynamic social media platform tailored specifically for developers, aiming to foster a collaborative ecosystem where individuals can share programming problems, provide innovative solutions, and form meaningful connections. It serves as a hub for like-minded tech enthusiasts to exchange knowledge, explore new technologies, and discuss trends across various domains such as web development, AI, and competitive programming. Users can create posts, comment, and engage in discussions to crowdsource learning. With a robust backend powered by Express and PostgreSQL and a seamless frontend built in Next.js, DevNet is currently in its beta phase and constantly evolving based on community feedback and user experience improvements.",
      technologies: ["Next.js", "Express", "PostgreSQL"],
      team: ["Arshil Yusuf", "Rahul Das"],
      status: "Beta",
      timeline: "Feb 2025 – Ongoing",
      category: "Social Networking / Developer Community",
    },
    {
      name: "StayMate",
      description:
        "StayMate is a comprehensive web platform designed to assist college students in finding compatible roommates and nearby accommodations that meet their preferences. The system evaluates factors such as location, lifestyle compatibility, personal habits, and peer reviews to suggest ideal roommate matches. It also features listings for hostels and private rentals with integrated map views using Leaflet. Built using React for the frontend and secured via JWT authentication, it leverages MongoDB for fast and scalable data storage. StayMate successfully completed development and was deployed between August and November 2024, offering a real-world solution for students navigating relocation challenges in unfamiliar cities or university towns.",
      technologies: ["React", "MongoDB", "JWT", "Leaflet"],
      team: ["Arshil Yusuf", "Sneha Jain", "Karan M."],
      status: "Completed",
      timeline: "Aug 2024 – Nov 2024",
      category: "Urban & Infrastructure",
    },
    {
      name: "Pharmaverse",
      description:
        "Pharmaverse is a smart pharmaceutical inventory and supply chain management system aimed at enhancing hospital efficiency and ensuring uninterrupted access to essential medications. It automates drug stock tracking, alerts on shortages or expiry, and provides analytical insights into usage trends. The system allows pharmacists and administrators to make data-driven decisions, improving healthcare outcomes and reducing wastage. Pharmaverse features a Flask backend for server-side logic, a responsive React-based UI, and stores its data in a lightweight SQLite database for easy deployment. The platform was developed and deployed between July and September 2024, and is now actively supporting small to mid-sized hospitals.",
      technologies: ["Flask", "React", "SQLite"],
      team: ["Arshil Yusuf", "Tina George"],
      status: "Deployed",
      timeline: "July 2024 – Sep 2024",
      category: "Healthcare / Inventory Management",
    },
    {
      name: "EduInsight",
      description:
        "EduInsight is an AI-driven academic performance analysis system designed for schools, colleges, and universities. It provides real-time tracking of students’ academic progress using predictive models and historical data to highlight at-risk students and recommend tailored intervention strategies. Educators can monitor trends, visualize progress dashboards, and generate comprehensive reports for parents and administrators. Powered by FastAPI and MySQL on the backend with a dynamic Angular frontend, EduInsight aims to bridge the gap between learning outcomes and personalized support. The project began development in March 2025 and is currently under active construction, with a goal to pilot the solution in institutional environments by late 2025.",
      technologies: ["Angular", "FastAPI", "MySQL"],
      team: ["Arshil Yusuf", "Vikas Rana"],
      status: "Development",
      timeline: "Mar 2025 – Ongoing",
      category: "AI/ML",
    },
    {
      name: "HealthBridge",
      description:
        "HealthBridge is an innovative telemedicine platform designed to connect patients from rural and remote regions with urban healthcare providers. It enables appointment scheduling, virtual consultations, and electronic medical record sharing to ensure timely and efficient healthcare access. The platform bridges the accessibility gap in healthcare through seamless communication and scheduling tools. Built using Vue.js for the frontend and Laravel on the backend, HealthBridge also uses Firebase for real-time updates and secure data handling. The platform was actively developed and tested from May to August 2024, and is currently undergoing final validation before broader deployment in healthcare outreach programs.",
      technologies: ["Vue.js", "Laravel", "Firebase"],
      team: ["Arshil Yusuf", "Komal Rajput"],
      status: "Testing",
      timeline: "May 2024 – Aug 2024",
      category: "Telemedicine / Rural Development",
    },
  ];
  
  return (
    <div>
      <Display projects={projects} />
    </div>
  );
}
