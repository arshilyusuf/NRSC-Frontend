import React, { useState } from "react";
import styles from "./ProjectReport.module.css";
import axios from "axios"; // Import axios

const ProjectReportPage = () => {
  const [pdfFile, setPdfFile] = useState(null);

  const handleFileChange = (e) => {
    setPdfFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    // Make handleSubmit async
    e.preventDefault();
    if (!pdfFile) {
      alert("Please upload a PDF file.");
      return;
    }

    const formData = new FormData();
    formData.append("file", pdfFile); // Use "file" as the field name

    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/projects/upload/", // Your API endpoint
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      console.log("Upload successful:", response.data);
      alert("PDF uploaded successfully!"); // Optional success message
    } catch (error) {
      console.error("Upload error:", error);
      alert("Failed to upload PDF."); // Optional error message
    }
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
