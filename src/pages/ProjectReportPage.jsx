import React, { useState } from "react";
import styles from "./ProjectReport.module.css";

const ProjectReportPage = () => {
  const [pdfFile, setPdfFile] = useState(null);

  const handleFileChange = (e) => {
    setPdfFile(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!pdfFile) {
      alert("Please upload a PDF file.");
      return;
    }

    const formData = new FormData();
    formData.append("report", pdfFile);

    console.log("Form submitted", pdfFile);
    // Example: axios.post('/upload', formData)
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <h3 className={styles.heading}>Upload Project Report</h3>
        <form onSubmit={handleSubmit} className={styles.form}>
          <label htmlFor="report" className={styles.label}>
            Select PDF File
          </label>
          <input
            type="file"
            id="report"
            accept="application/pdf"
            className={styles.fileInput}
            onChange={handleFileChange}
            required
          />

          <button type="submit" className={styles.submitButton}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ProjectReportPage;
