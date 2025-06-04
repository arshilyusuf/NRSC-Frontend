import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./AdminLogin.module.css";
import { AuthContext } from "../context/AuthContext"; // import AuthContext

const AdminLoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { login } = useContext(AuthContext); // get login from context

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here (e.g., API call)
    // For demonstration, just set a dummy user and token
    const userData = {
      user: username,
      token: "dummy-token",
    };
    login(userData); // set auth context
    navigate("/admin");
  };

  return (
    <div className={styles.loginContainer}>
      <h2 className={styles.loginTitle}>Admin Login</h2>
      <form onSubmit={handleSubmit} className={styles.loginForm}>
        <div className={styles.formGroup}>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className={styles.loginButton}>
          Login
        </button>
      </form>
    </div>
  );
};

export default AdminLoginPage;
