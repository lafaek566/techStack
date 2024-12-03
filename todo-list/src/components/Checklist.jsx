import React, { useState, useEffect } from "react";
import { api } from "../api";

const Checklist = () => {
  const [checklists, setChecklists] = useState([]);
  const [newChecklist, setNewChecklist] = useState("");

  useEffect(() => {
    const fetchChecklists = async () => {
      try {
        const { data } = await api.get("/checklist");
        setChecklists(data.data);
      } catch (err) {
        console.error(err.response.data);
      }
    };
    fetchChecklists();
  }, []);

  const handleAddChecklist = async () => {
    try {
      const { data } = await api.post("/checklist", { name: newChecklist });
      setChecklists([...checklists, data.data]);
      setNewChecklist("");
    } catch (err) {
      console.error(err.response.data);
    }
  };

  const handleDeleteChecklist = async (id) => {
    try {
      await api.delete(`/checklist/${id}`);
      setChecklists(checklists.filter((cl) => cl.id !== id));
    } catch (err) {
      console.error(err.response.data);
    }
  };

  return (
    <div>
      <h1>Checklists</h1>
      <input
        type="text"
        value={newChecklist}
        onChange={(e) => setNewChecklist(e.target.value)}
        placeholder="New Checklist"
      />
      <button onClick={handleAddChecklist}>Add</button>
      <ul>
        {checklists.map((cl) => (
          <li key={cl.id}>
            {cl.name}{" "}
            <button onClick={() => handleDeleteChecklist(cl.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Checklist;
