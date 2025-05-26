import { useState } from "react";
import styles from "./ProjectList.module.css";

const ITEMS_PER_PAGE = 10;

const ProjectList = ({ projects }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(projects.length / ITEMS_PER_PAGE);

  const paginatedProjects = projects.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const goToNextPage = () => {
    if (currentPage < totalPages) setCurrentPage((prev) => prev + 1);
  };

  const goToPrevPage = () => {
    if (currentPage > 1) setCurrentPage((prev) => prev - 1);
  };

  return (
    <div className={styles.container}>
      <h2>Projects</h2>
      <ul className={styles.list}>
        {paginatedProjects.map(({ name, topic, startDate, stars }, idx) => (
          <li key={idx} className={styles.listItem}>
            <h3 className={styles.projectName}>{name}</h3>
            <div className={styles.infoRow}>
              <span className={styles.topic}>{topic}</span>
              <div className={styles.rightSide}>
                <span>{startDate}</span>
                <span className={styles.rating}>Grade: {stars}</span>
              </div>
            </div>
          </li>
        ))}
      </ul>

      {/* Pagination Buttons */}
      <div className={styles.pagination}>
        <button onClick={goToPrevPage} disabled={currentPage === 1}>
          Previous
        </button>
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <button onClick={goToNextPage} disabled={currentPage === totalPages}>
          Next
        </button>
      </div>
    </div>
  );
};

export default ProjectList;
