import React, { useState } from "react";
import styles from "./Feedback.module.css";
import axios from "axios";

export default function Feedback() {
  const [pdfFile, setPdfFile] = useState(null);

  const handleFileChange = (e) => {
    setPdfFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!pdfFile) {
      alert("Please upload a PDF file.");
      return;
    }

    const formData = new FormData();
    formData.append("file", pdfFile);

    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/projects/upload/",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      console.log("Upload successful:", response.data);
      alert("PDF uploaded successfully!");
    } catch (error) {
      console.error("Upload error:", error);
      alert("Failed to upload PDF.");
    }
  };

  return (
    <div className={styles["feedback-container"]}>
      <h2>Feedback</h2>
      <form onSubmit={handleSubmit}>
        <div className={styles["input-grid"]}>
          {/* Row 1 */}
          <div style={{ gridColumn: 1, gridRow: 1 }}>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div style={{ gridColumn: 2, gridRow: 1 }}>
            <label htmlFor="college">College Name:</label>
            <input type="text" id="college" name="college" required />
          </div>
          <div style={{ gridColumn: 3, gridRow: 1 }}>
            <label htmlFor="guide">Guide Name:</label>
            <input type="text" id="guide" name="guide" required />
          </div>
          {/* Start/End Date block: spans 2 rows, col 1 */}
          <div
            className={styles["date-group"]}
            style={{ gridColumn: 1, gridRow: "2 / span 2" }}
          >
            <label htmlFor="startDate">Start Date:</label>
            <input type="date" id="startDate" name="startDate" required />
            <label htmlFor="endDate" style={{ marginTop: "0.5rem" }}>
              End Date:
            </label>
            <input type="date" id="endDate" name="endDate" required />
          </div>
          {/* Row 2 */}
          <div style={{ gridColumn: 2, gridRow: 2 }}>
            <label htmlFor="division">Division Name:</label>
            <input type="text" id="division" name="division" required />
          </div>
          <div style={{ gridColumn: 3, gridRow: 2 }}>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
          </div>
          {/* Remarks: spans 2 columns, row 3, col 2-3 */}
          <div style={{ gridColumn: "2 / span 2", gridRow: 3 }}>
            <label htmlFor="remarks">Remarks:</label>
            <textarea
              id="remarks"
              name="remarks"
              rows={3}
              style={{ resize: "vertical" }}
            />
          </div>
          {/* PDF Upload */}
          <div
            className={styles["date-group"]}
            style={{ gridColumn: "1 / span 3", gridRow: 4 }}
          >
            <label style={{ fontSize: "2rem" }} htmlFor="report">
              Upload Project Report PDF File
            </label>
            <input
              type="file"
              id="report"
              accept="application/pdf"
              onChange={handleFileChange}
              style={{ width: "100%" }}
            />
          </div>
          <div
            className={styles["date-group"]}
            style={{ gridColumn: "1 / span 3", gridRow: 5 }}
          >
            <label style={{ fontSize: "2rem" }} htmlFor="report">
              Upload Project Report PPT File (If any)
            </label>
            <input
              type="file"
              id="report"
              accept="application/pdf"
              onChange={handleFileChange}
              style={{ width: "100%" }}
            />
          </div>
        </div>

        {/* Seven options with five radio buttons each */}
        <div className={styles["feedback-options"]}>
          {[
            "Guidance",
            "System Time Availability",
            "Computer Network Speed",
            "Support from Outreach Team",
            "Food",
            "Overall Arramgements: Security, First Aid, Ambience",
            "Cleanliness",
          ].map((option, idx) => (
            <div key={option} className={styles["feedback-option-group"]}>
              <label>{option}:</label>
              <div className={styles["radio-buttons"]}>
                {["Excellent", "Very Good", "Good", "Satisfactory", "Poor"].map(
                  (label) => (
                    <label key={label}>
                      <input
                        type="radio"
                        name={`option-${idx}`}
                        value={label.toLowerCase().replace(/ /g, "_")}
                        required
                      />
                      {label}
                    </label>
                  )
                )}
              </div>
            </div>
          ))}
        </div>
        <div className={styles["submit-button"]}>
          <button type="submit">Submit Feedback</button>
        </div>
      </form>
    </div>
  );
}
