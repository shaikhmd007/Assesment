import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";

const HomePage = ({ addToHistory }) => {
  const [imageUrl, setImageUrl] = useState("");

  const fetchRandomDogImage = useCallback(async () => {
    try {
      const response = await axios.get(
        "https://dog.ceo/api/breeds/image/random"
      );
      const imageUrl = response.data.message;
      setImageUrl(imageUrl);
      addToHistory(imageUrl);
    } catch (error) {
      console.error("Error fetching dog image:", error);
    }
  }, [addToHistory]);

  useEffect(() => {
    fetchRandomDogImage();
  }, []);

  return (
    <div>
      <div className="d-flex  justify-content-center">
        <h4>Home Page</h4>
      </div>
      <div className="d-flex  justify-content-center">
        <button onClick={fetchRandomDogImage} class="btn btn-primary">
          Fetch New Image
        </button>
      </div>
      <div className="d-flex  justify-content-center">
        <img
          src={imageUrl}
          style={{ margin: "40px", height: "350px", borderRadius: "15px" }}
          alt="Random Dog"
        />
        <button
          
          onClick={fetchRandomDogImage}
          class="btn btn-primary"
        >
          Add Cart
        </button>
      </div>
    </div>
  );
};

export default HomePage;
