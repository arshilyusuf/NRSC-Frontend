import styles from "./ProjectDisplay.module.css";
export default function ProjectDisplay({project }) {
  return (
    <div className={styles.card}>
      <h1 className={styles.title}>{project.project_title}</h1>
      <h3 className={styles.cat}>
        {project.application_domain} | {project.technical_domain}
      </h3>
      
      <p className={styles.description}>{project.abstract}</p>
      <p className={styles.meta}>
        <strong>By:</strong> {project.student_name}
        {project.college_name}
      </p>
    </div>
  );
}
