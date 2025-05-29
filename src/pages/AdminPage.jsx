import ProjectList from "../components/ProjectList";
import styles from "./AdminPage.module.css";
import FilterPanel from "../components/FilterPanel";
import { FaFilter, FaArrowRight } from "react-icons/fa";
import { useEffect, useState } from "react";

export default function AdminPage() {
  
  const [isPanelVisible, setIsPanelVisible] = useState(false);
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/projects/?format=json")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch projects.");
        }
        return res.json();
      })
      .then((data) => {
        setProjects(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading projects...</p>;
  if (error) return <p>Error: {error}</p>;
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
        <FilterPanel />
      </div>
      <div className={styles.heading}>
        <h1 className={styles.pageTitle}>Admin Projects Overview</h1>
        <div className={styles.options}>
          <button className={styles.toggleButton} onClick={togglePanel}>
            Filter {isPanelVisible ? <FaFilter /> : <FaFilter />}
          </button>
          <button className={styles.add}>Add Project</button>
          <button className={styles.remove}>Remove Project</button>
        </div>
      </div>
      <ProjectList projects={projects} />
    </div>
  );
}
