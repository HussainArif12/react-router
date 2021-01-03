import "./App.css";
import { useState, useEffect } from "react";
function PresidentDetail({ match }) {
  const [item, setItem] = useState({});

  const fetchItem = async () => {
    const fetchItem = await fetch(
      `https://sampleapis.com/presidents/api/presidents/${match.params.id}`
    );
    const item = await fetchItem.json();
    console.log(item);
    setItem(item);
  };
  useEffect(() => {
    console.log(match);
    fetchItem();
  }, []);
  return (
    <>
      <h1>{item.name}</h1>
      <img src={item.photo} />
    </>
  );
}

export default PresidentDetail;
