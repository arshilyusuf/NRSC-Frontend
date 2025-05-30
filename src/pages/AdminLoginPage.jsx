import { useNavigate } from "react-router-dom";
import styles from "./AdminLoginPage.module.css";
export default function AdminLoginPage() {
  const navigate = useNavigate();

  function handleLoginSubmit(e) {
    e.preventDefault(); // Prevent actual form submission
    navigate("/admin");
  }

  return (
    <div className={styles.main}>
      <h2>Login as Admin</h2>
      <div className={styles.loginBox}>
        <form onSubmit={handleLoginSubmit} className={styles.form}>
          <div className={styles.group}>
            <label className={styles.label} htmlFor="email">
              Email:
            </label>
            <input
              className={styles.inputField}
              type="text"
              id="email"
              placeholder="Enter Email"
            />
          </div>
          <div className={styles.group}>
            <label className={styles.label} htmlFor="password">
              Password:
            </label>
            <input
              className={styles.inputField}
              type="password"
              id="password"
              placeholder="Enter Password"
            />
          </div>
          <button className={styles.loginButton} type="submit">
            Login as Admin
          </button>
        </form>
      </div>
    </div>
  );
}
    
