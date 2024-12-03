import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const ChecklistItem = ({ token }) => {
  const { id } = useParams();
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState("");

  const fetchItems = async () => {
    const response = await axios.get(
      `http://94.74.86.174:8080/api/checklist/${id}/item`,
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    setItems(response.data.data);
  };

  const handleAddItem = async () => {
    await axios.post(
      `http://94.74.86.174:8080/api/checklist/${id}/item`,
      { itemName: newItem },
      { headers: { Authorization: `Bearer ${token}` } }
    );
    setNewItem("");
    fetchItems();
  };

  useEffect(() => {
    fetchItems();
  }, [id]);

  return (
    <div>
      <h1>Checklist Items</h1>
      <input
        type="text"
        placeholder="New Item"
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
      />
      <button onClick={handleAddItem}>Add</button>
      <ul>
        {items.map((item) => (
          <li key={item.id}>{item.itemName}</li>
        ))}
      </ul>
    </div>
  );
};

export default ChecklistItem;
