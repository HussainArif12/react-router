import "./App.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
function Shop() {
  const [items, setItems] = useState([]);

  const fetchItems = async () => {
    const data = await fetch(
      "https://sampleapis.com/presidents/api/presidents"
    );
    const items = await data.json();
    console.log(items);
    setItems(items);
  };
  useEffect(() => {
    fetchItems();
  }, []);
  return (
    <>
      {items.map((item) => (
        <h1 key={item.id}>
          <Link to={`/shop/${item.id}`}>{item.name}</Link>
        </h1>
      ))}
    </>
  );
}

export default Shop;
