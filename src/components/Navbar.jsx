import Dropdown from "./Dropdown";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const options = [
    { value: "overview", label: "Overview" },
    { value: "admin", label: "Admin" },
    { value: "feedback", label: "Feedback" },
  ];

  const handleSelect = (option) => {
    console.log("Selected:", option);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.image}>
        <img src="public/nrsclogo.png" alt="" />
      </div>
      <h2 className={styles.subtitle}>Project Display</h2>
      <Dropdown options={options} label="Navigate" onSelect={handleSelect} />
    </nav>
  );
}
