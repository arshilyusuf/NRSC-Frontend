import ProjectList from "../components/ProjectList";
import styles from "./AdminPage.module.css";
import FilterPanel from "../components/FilterPanel";
import { FaFilter, FaArrowRight } from "react-icons/fa";
import { useState } from "react";

export default function AdminPage() {
  const projects = [
    {
      name: "DevNet",
      topic: "Social Media for Developers",
      startDate: "2025-02-01",
      stars: 4,
    },
    {
      name: "StayMate",
      topic: "Roommate Finder",
      startDate: "2024-08-15",
      stars: 5,
    },
    {
      name: "Pharmaverse",
      topic: "Drug Inventory Management",
      startDate: "2024-07-10",
      stars: 4,
    },
    {
      name: "EduInsight",
      topic: "Student Performance AI Tracker",
      startDate: "2025-03-05",
      stars: 3,
    },
    {
      name: "HealthBridge",
      topic: "Rural Telemedicine Platform",
      startDate: "2024-05-20",
      stars: 4,
    },
    {
      name: "GreenRoute",
      topic: "Eco-friendly Navigation App",
      startDate: "2024-11-01",
      stars: 5,
    },
    {
      name: "FitTrack",
      topic: "Personal Fitness Tracker",
      startDate: "2024-09-12",
      stars: 3,
    },
    {
      name: "BookHive",
      topic: "Community Book Sharing",
      startDate: "2025-01-15",
      stars: 4,
    },
    {
      name: "CodeSprint",
      topic: "Competitive Coding Platform",
      startDate: "2023-12-01",
      stars: 5,
    },
    {
      name: "TravelMate",
      topic: "Travel Planning Assistant",
      startDate: "2024-10-05",
      stars: 3,
    },
  ];
  const [isPanelVisible, setIsPanelVisible] = useState(true);

  const togglePanel = () => {
    setIsPanelVisible((prev) => !prev);
  };
  return (
    <div className={styles.pageContainer}>
      <div
        className={`${styles.filterPanel} ${
          isPanelVisible ? styles.slideIn : styles.slideOut
        }`}
      >
        <button className={styles.toggleButton} onClick={togglePanel}>
          {isPanelVisible ? <FaFilter /> : <FaFilter />}
        </button>
        <FilterPanel />
      </div>
      <div className={styles.heading}>
        <h1 className={styles.pageTitle}>Admin Projects Overview</h1>
        <div className={styles.options}>
          <button className={styles.add}>Add Project</button>
          <button className={styles.remove}>Remove Project</button>
        </div>
      </div>
      <ProjectList projects={projects} />
    </div>
  );
}
