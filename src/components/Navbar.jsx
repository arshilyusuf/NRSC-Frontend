import Dropdown from "./Dropdown";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const options = [
    { value: "overview", label: "Overview" },
    { value: "details", label: "Project Details" },

  ];

  const handleSelect = (option) => {
    console.log("Selected:", option);
  };

  return (
    <nav className={styles.navbar}>
      <h1 className={styles.title}>NRSC</h1>
      <h2 className={styles.subtitle}>Project Display</h2>
      <Dropdown options={options} label="Navigate" onSelect={handleSelect} />
    </nav>
  );
}
