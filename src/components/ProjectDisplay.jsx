import styles from "./ProjectDisplay.module.css";
export default function ProjectDisplay({project }) {
  return (
    <div className={styles.card}>
      <h1 className={styles.title}>{project.name}</h1>
      <p className={styles.description}>{project.description}</p>
      <p className={styles.meta}>
        <strong>Technologies:</strong>{" "}
        {project.technologies.map((tech, i) => (
          <span key={i} className={styles.tag}>
            {tech}
          </span>
        ))}
      </p>
      <p className={styles.meta}>
        <strong>Team:</strong> {project.team.join(", ")}
      </p>
      <p className={styles.meta}>
        <strong>Status:</strong> {project.status}
      </p>
      <p className={styles.meta}>
        <strong>Timeline:</strong> {project.timeline}
      </p>
    </div>
  );
}
