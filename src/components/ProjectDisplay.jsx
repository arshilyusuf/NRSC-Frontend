import styles from "./ProjectDisplay.module.css";
export default function ProjectDisplay({project }) {
  return (
    <div className={styles.card}>
      <h1 className={styles.title}>{project.title}</h1>
      <h3 className={styles.cat}>
        {project.domain}: {project.category}
      </h3>
      
      <p className={styles.description}>{project.abstract}</p>
      <p className={styles.meta}>
        <strong>By:</strong> {project.name}
      </p>
    </div>
  );
}
