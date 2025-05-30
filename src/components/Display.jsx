import { useEffect, useState } from "react";
import ProjectDisplay from "./ProjectDisplay";
import styles from "./Display.module.css";
import LeftPanel from "./LeftPanel";
import { FaArrowLeft, FaArrowRight, FaBars } from "react-icons/fa";

export default function Display({ projects }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPanelVisible, setIsPanelVisible] = useState(false);
  const [domainType, setDomainType] = useState("");
  const [selectedCategory, setselectedCategory] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [displayedProjects, setDisplayedProjects] = useState(projects);
  const [batchIndex, setBatchIndex] = useState(0);
  const batchSize = 10;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const maxIndex = Math.min(batchSize, displayedProjects.length) - 1;
        return prevIndex === maxIndex ? 0 : prevIndex + 1;
      });
    }, 5000);

    return () => clearInterval(interval);
  }, [displayedProjects.length, batchIndex]);

  useEffect(() => {
    if (domainType && selectedCategory) {
      const filtered = projects.filter(
        (project) =>
          project.domain.toLowerCase() === domainType.toLowerCase() &&
          project.category.toLowerCase() === selectedCategory.toLowerCase()
      );
      setDisplayedProjects(filtered);
    } else if (domainType) {
      const filtered = projects.filter(
        (project) => project.domain.toLowerCase() === domainType.toLowerCase()
      );
      setDisplayedProjects(filtered);
    } else {
      setDisplayedProjects(projects);
    }
    setCurrentIndex(0);
    setBatchIndex(0);
  }, [domainType, selectedCategory, projects]);

  const goToIndex = (index) => {
    setCurrentIndex(index);
  };

  const togglePanel = () => {
    setIsPanelVisible((prev) => !prev);
  };

  const maxBatch = Math.floor((displayedProjects.length - 1) / batchSize);

  const currentBatchProjects = displayedProjects.slice(
    batchIndex * batchSize,
    batchIndex * batchSize + batchSize
  );

  const handleNextBatch = () => {
    if (batchIndex < maxBatch) {
      setBatchIndex(batchIndex + 1);
      setCurrentIndex(0);
    }
  };

  const handlePrevBatch = () => {
    if (batchIndex > 0) {
      setBatchIndex(batchIndex - 1);
      setCurrentIndex(0);
    }
  };

  return (
    <div className={styles.main}>
      <div
        className={`${styles.leftPanel} ${
          isPanelVisible ? styles.slideIn : styles.slideOut
        }`}
      >
        <LeftPanel
          domainType={domainType}
          setDomainType={setDomainType}
          selectedCategory={selectedCategory}
          setselectedCategory={setselectedCategory}
          loading={loading}
          setLoading={setLoading}
          error={error}
          setError={setError}
          projects={projects}
        />
      </div>

      <button className={styles.toggleButton} onClick={togglePanel}>
        <FaBars />
      </button>

      <div className={styles.wrapper}>
        <div
          className={styles.slider}
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {currentBatchProjects.map((project, index) => (
            <div className={styles.projectItem} key={index}>
              <ProjectDisplay project={project} />
            </div>
          ))}
        </div>

        <div className={styles.dots}>
          <div className={styles.dotsbatch}>
            <button
              onClick={handlePrevBatch}
              disabled={batchIndex === 0}
              style={{ marginRight: "2rem" }}
            >
              View Previous
            </button>
            {currentBatchProjects.map((_, index) => (
              <div
                key={index}
                className={`${styles.dot} ${
                  index === currentIndex ? styles.activeDot : ""
                }`}
                onClick={() => goToIndex(index)}
              />
            ))}
            <button
              onClick={handleNextBatch}
              disabled={batchIndex === maxBatch}
              style={{ marginLeft: "2rem" }}
            >
              View More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
