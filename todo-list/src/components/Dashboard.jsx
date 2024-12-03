import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [checklists, setChecklists] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem("token");

      if (!token) {
        navigate("/login");
        return;
      }

      try {
        const response = await axios.get(
          "http://94.74.86.174:8080/api/checklist",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        setChecklists(response.data);
      } catch (err) {
        console.error(
          "Error fetching checklists:",
          err.response || err.message
        );
        navigate("/login");
      }
    };

    fetchData();
  }, [navigate]);

  return (
    <div>
      <h2>Dashboard</h2>
      <ul>
        {checklists.map((checklist) => (
          <li key={checklist.id}>{checklist.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;
