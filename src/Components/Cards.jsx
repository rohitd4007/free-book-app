import axios from "axios";
import { useEffect, useState } from "react";
import "./Cards.css";
const Cards = (props) => {
  const [image, setImage] = useState([]);
  useEffect(() => {
    axios
      .get("http://gutendex.com/books/?mime_type=text%2F", {})
      .then((res) => {
        setImage(res.data.results);
      })
      .catch((err) => {
        console.log(err, "💥");
      });
  });
  console.log(image);
  return (
    <div className="book-cards">
      {image.map((da, index) => (
        <div key={index} className="book-cover">
          <img
            className="book-image"
            // key={index}
            src={da.formats["image/jpeg"]}
            alt=""
          />
          <div className="book-title">{da.title}</div>
          <div className="book-author">{da.authors[0].name}</div>
        </div>
      ))}
    </div>
  );
};

export default Cards;