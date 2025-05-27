import styles from "./ProjectDisplay.module.css";
export default function ProjectDisplay({project }) {
  return (
    <div className={styles.card}>
      <h1 className={styles.title}>{project.name}</h1>
      <h3 className={styles.cat}>{project.category}</h3>
      <p className={styles.description}>{project.description}</p>
      <p className={styles.meta}>
        <strong>By:</strong> {project.team.join(", ")}
      </p>
    </div>
  );
}
