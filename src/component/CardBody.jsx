import React, { useEffect, useState } from "react";
import "./CardBody.css";
import axios from "axios";

import image1 from "../assets/image1.jpg";
import image2 from "../assets/image2.jpg";
import image3 from "../assets/image3.jpg";
import image4 from "../assets/image4.jpg";
import image5 from "../assets/image5.jpg";
import image6 from "../assets/image6.jpg";

const images = [image1, image2, image3, image4, image5, image6];

const CardBody = () => {
  const [data, setData] = useState([]);

  // 🧠 Fetch data from JSONPlaceholder API
  useEffect(() => {
    axios
      .get('${import.meta.env.VITE_BASE_URL}/posts')
      .then((res) => {
        // Take only the first 6 posts
        setData(res.data.slice(0, 6));
        console.log("Fetched Data:", res.data.slice(0, 6)); // ✅ will show in console
      })
      .catch((err) => {
        console.error("Error fetching data", err);
      });
  }, []);

  return (
    <div className="card-container">
      {data.map((item, index) => (
        <div key={item.id} className="card">
          <img src={images[index]} alt={item.title} className="card-img" />
          <h3>{item.title}</h3>
          <p>{item.body}</p>
        </div>
      ))}
    </div>
  );
};

export default CardBody;
 