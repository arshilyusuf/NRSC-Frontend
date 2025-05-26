import styles from "./LeftPanel.module.css";

export default function LeftPanel() {
  return (
    <div className={styles.panel}>
      <h2 className={styles.title}>Filter Projects</h2>

      <div className={styles.group}>
        <label htmlFor="category" className={styles.label}>
          Category
        </label>
        <select id="category" name="category" className={styles.select}>
          <option value="">-- Select Category --</option>
          <option value="robotics">Robotics</option>
          <option value="webdev">Web Development</option>
          <option value="ai_ml">AI / ML</option>
          <option value="monitoring">Monitoring</option>
          <option value="iot">IoT</option>
        </select>
      </div>

      <div className={styles.group}>
        <label className={styles.label}>Date Range</label>
        <div className={styles.dateRange}>
          <input type="date" className={styles.dateInput} />
          <span className={styles.dateSeparator}>to</span>
          <input type="date" className={styles.dateInput} />
        </div>
      </div>

      <div className={styles.group}>
        <label htmlFor="rating" className={styles.label}>
          Sort By Rating
        </label>
        <select id="rating" name="rating" className={styles.select}>
          <option value="highest">Highest First</option>
          <option value="lowest">Lowest First</option>
        </select>
      </div>
    </div>
  );
}
