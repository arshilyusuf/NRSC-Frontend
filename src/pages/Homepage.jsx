import { useEffect, useState } from "react";
import Display from "../components/Display";

export default function Homepage() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/projects/?format=json")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch projects.");
        }
        return res.json();
      })
      .then((data) => {
        setProjects(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading projects...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <Display projects={projects} />
    </div>
  );
}
