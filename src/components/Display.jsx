import { useEffect, useState } from "react";
import ProjectDisplay from "./ProjectDisplay";
import styles from "./Display.module.css";
import LeftPanel from "./LeftPanel";
import { FaArrowLeft, FaArrowRight, FaBars} from "react-icons/fa";

export default function Display({ projects }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPanelVisible, setIsPanelVisible] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === projects.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [projects.length]);

  const goToIndex = (index) => {
    setCurrentIndex(index);
  };

  const togglePanel = () => {
    setIsPanelVisible((prev) => !prev);
  };

  return (
    <div className={styles.main}>
      <div
        className={`${styles.leftPanel} ${
          isPanelVisible ? styles.slideIn : styles.slideOut
        }`}
      >
        <LeftPanel />
      </div>

      <button className={styles.toggleButton} onClick={togglePanel}>
        {/* {isPanelVisible ? <FaArrowLeft /> : <FaArrowRight />} */}
        <FaBars/>
      </button>

      <div className={styles.wrapper}>
        <div
          className={styles.slider}
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {projects.map((project, index) => (
            <div className={styles.projectItem} key={index}>
              <ProjectDisplay project={project} />
            </div>
          ))}
        </div>

        <div className={styles.dots}>
          {projects.map((_, index) => (
            <div
              key={index}
              className={`${styles.dot} ${
                index === currentIndex ? styles.activeDot : ""
              }`}
              onClick={() => goToIndex(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
