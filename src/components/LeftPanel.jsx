import { useState } from "react";
import styles from "./LeftPanel.module.css";

export default function LeftPanel() {
  const application_domain = [
    "Agriculture",
    "Disaster Management Support",
    "Forestry & Ecology",
    "Geosciences",
    "LULC",
    "Rural Development",
    "Soils",
    "Urban & Infrastructure",
    "Water Resources",
    "Earth and Climatic Studies",
  ];

  const technical_domains = [
    "Remote Sensing and GIS",
    "App Development",
    "Web Development",
    "AI/ML",
    "Image Processing/Computer Vision",
    "Data Science / Big Data Analytics",
    "Cloud Computing / High Performance Computing",
    "IoT",
    "Sensor Integration",
    "Drone Data Processing and Integration",
    "AR/VR",
    "Robotics",
    "Embedded Systems",
    "3D Printing / Fabrication Technology",
  ];

  

  const [domainType, setDomainType] = useState("");
  const [selectedDomain, setSelectedDomain] = useState("");
  const [domainList, setDomainList] = useState([]);

  const handleDomainTypeChange = (e) => {
    const type = e.target.value;
    setDomainType(type);
    setDomainList(type === "pplication" ? application_domain : technical_domains);
    setSelectedDomain("");
  };

  const handleDomainChange = (e) => {
    const domain = e.target.value;
    setSelectedDomain(domain);
  };

  return (
    <div className={styles.panel}>
      <h2 className={styles.title}>Filter Projects</h2>
      <label htmlFor="" className={styles.label}>
        Search
      </label>
      <input type="text" name="" id="" className={styles.select} />
      {/* Domain Type */}
      <div className={styles.group}>
        <label htmlFor="domainType" className={styles.label}>
          Domain Type
        </label>
        <select
          id="domainType"
          value={domainType}
          onChange={handleDomainTypeChange}
          className={styles.select}
        >
          <option value="">-- Select Domain Type --</option>
          <option value="application">Application domain</option>
          <option value="technical">Technical Domains</option>
        </select>
      </div>

      {/* Domain */}
      {domainType && (
        <div className={styles.group}>
          <label htmlFor="domain" className={styles.label}>
            Domain
          </label>
          <select
            id="domain"
            value={selectedDomain}
            onChange={handleDomainChange}
            className={styles.select}
          >
            <option value="">-- Select Domain --</option>
            {domainList.map((domain) => (
              <option key={domain} value={domain}>
                {domain}
              </option>
            ))}
          </select>
        </div>
      )}
    </div>
  );
}
