import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import NotFound from "./pages/NotFound"; // You can create this for unmatched routes
import AdminPage from "./pages/AdminPage";
import Navbar from "./components/Navbar";
import Feedback from "./components/Feedback";

function App() {
  const projects = [
    {
      name: "DevNet",
      description:
        "A social media platform for developers to share problems, solutions, and collaborate.",
      technologies: ["Next.js", "Express", "PostgreSQL"],
      team: ["Arshil Yusuf", "Rahul Das"],
      status: "Beta",
      timeline: "Feb 2025 – Ongoing",
    },
    {
      name: "StayMate",
      description:
        "Helps students find ideal roommates based on preferences, distance, and reviews.",
      technologies: ["React", "MongoDB", "JWT", "Leaflet"],
      team: ["Arshil Yusuf", "Sneha Jain", "Karan M."],
      status: "Completed",
      timeline: "Aug 2024 – Nov 2024",
    },
    {
      name: "Pharmaverse",
      description:
        "A smart drug inventory system for efficient hospital pharmaceutical supply management.",
      technologies: ["Flask", "React", "SQLite"],
      team: ["Arshil Yusuf", "Tina George"],
      status: "Deployed",
      timeline: "July 2024 – Sep 2024",
    },
    {
      name: "EduInsight",
      description:
        "AI-based student performance tracking system for educational institutions.",
      technologies: ["Angular", "FastAPI", "MySQL"],
      team: ["Arshil Yusuf", "Vikas Rana"],
      status: "Development",
      timeline: "Mar 2025 – Ongoing",
    },
    {
      name: "HealthBridge",
      description:
        "Connects rural patients with urban hospitals through telemedicine appointments.",
      technologies: ["Vue.js", "Laravel", "Firebase"],
      team: ["Arshil Yusuf", "Komal Rajput"],
      status: "Testing",
      timeline: "May 2024 – Aug 2024",
    },
  ];

  return (
    <>
      <Router>
      <Navbar />
        <Routes>
          <Route path="/" element={<Homepage projects={projects} />} />
          <Route path="*" element={<NotFound />} />
          <Route path="admin" element={<AdminPage />} />
          <Route path="feedback" element={<Feedback />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
