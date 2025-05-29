import { useNavigate } from "react-router-dom";
import Dropdown from "./Dropdown";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const options = [
    { value: "overview", label: "Overview" },
    { value: "admin", label: "Admin" },
    { value: "feedback", label: "Feedback" },
    { value: "projectreport", label: "Submit Project Report" },
  ];

  const handleSelect = (option) => {
    console.log("Selected:", option);
  };
  const navigate = useNavigate();

  return (
    <nav className={styles.navbar}>
      <div className={styles.image} onClick={()=>{
        navigate("/")
      }}>
        <img src="public/nrsclogo.png" alt="" />
      </div>
      <h2 className={styles.subtitle}>Project Display</h2>
      <Dropdown options={options} label="Overview" onSelect={handleSelect} />
    </nav>
  );
}
