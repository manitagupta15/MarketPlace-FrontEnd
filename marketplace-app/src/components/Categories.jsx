import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchItems } from "../api";

export default function Categories({ setItems }) {
  const navigate = useNavigate();
  const [dropDown, setDropdown] = useState("");

  const handleChange = (e) => {
    e.preventDefault();
    fetchItems().then((returnItems) => {
      const filteredItems = returnItems.filter((item) => {
        return item.category_name === dropDown;
      });

      setItems(filteredItems);

      navigate("/items");
    });
  };

  return (
    <div>
      <form onSubmit={handleChange}>
        <select
          onChange={(e) => {
            setDropdown(e.target.value);
          }}
        >
          <option value="">Choose your Option</option>
          <option value="Electronics">Electronics</option>
          <option value="Clothing">Clothing</option>
          <option value="Household">Household</option>
        </select>
        <button>Submit</button>
      </form>
    </div>
  );
}
