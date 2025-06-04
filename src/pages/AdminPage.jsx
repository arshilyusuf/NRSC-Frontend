import ProjectList from "../components/ProjectList";
import styles from "./AdminPage.module.css";
import FilterPanel from "../components/FilterPanel";
import { FaFilter, FaArrowRight } from "react-icons/fa";
import { useEffect, useState, useContext, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext"; // import AuthContext

export default function AdminPage() {
  const navigate = useNavigate();
  const { isAuthenticated } = useContext(AuthContext); // get auth info

  useEffect(() => {
    // Redirect if not authenticated
    if (!isAuthenticated) {
      navigate("/login");
    }
  }, [isAuthenticated, navigate]);

  // Optionally, you can check for admin role if needed:
  // if (user && user.role !== "admin") {
  //   navigate("/login");
  // }

  const [isPanelVisible, setIsPanelVisible] = useState(false);
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredResults, setFilteredResults] = useState([]);
  const searchContainerRef = useRef(null);

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

  if (!isAuthenticated) return null; // Don't render if not authenticated
  const handleSearchChange = (e) => {
    const rawInput = e.target.value;
    setSearchTerm(rawInput);

    const keywords = rawInput
      .toLowerCase()
      .trim()
      .split(/\s+/) // splits on one or more spaces
      .filter(Boolean); // removes empty strings

    if (keywords.length === 0) {
      setFilteredResults([]);
    } else {
      const results = projects.filter((project) => {
        const fields = [project.project_title, project.domain]
          .join(" ")
          .toLowerCase();

        return keywords.some((word) => fields.includes(word));
      });
      setFilteredResults(results);
    }
  };

  // Clear search handler
  const clearSearch = () => {
    setSearchTerm("");
    setFilteredResults([]);
  };
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
          <div className={styles.searchContainer} ref={searchContainerRef}>
            <input
              type="text"
              id="search"
              className={styles.select}
              placeholder="Search projects..."
              value={searchTerm}
              onChange={handleSearchChange}
              autoComplete="on"
            />
            {searchTerm && (
              <button
                type="button"
                className={styles.clearButton}
                onClick={clearSearch}
                aria-label="Clear search"
              >
                &times;
              </button>
            )}
          </div>
          {/* <button className={styles.toggleButton} onClick={togglePanel}>
            Filter {isPanelVisible ? <FaFilter /> : <FaFilter />}
          </button> */}
          <button
            className={styles.add}
            onClick={() => {
              navigate("/projectreport");
            }}
          >
            Add Project
          </button>
          <button className={styles.remove}>Remove Project</button>
        </div>
      </div>
      <ProjectList projects={searchTerm ? filteredResults : projects} />
    </div>
  );
}
