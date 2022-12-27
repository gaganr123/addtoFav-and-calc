import { Favorite } from "@mui/icons-material";
import React, { useState, useEffect } from "react";

const AddtoFav = () => {
  const items = [
    { id: 1, name: "gagan", email: "gag@gmail.com", age: "23" },
    { id: 2, name: "mohan", email: "gag1@gmail.com", age: "24" },
    { id: 3, name: "indu", email: "gag2@gmail.com", age: "25" },
    { id: 4, name: "kamal", email: "gag3@gmail.com", age: "26" },
    { id: 5, name: "gagana", email: "gag4@gmail.com", age: "28" },
  ];
  const [favorites, setFavorites] = useState([]);

  const handleAddToFavorites = (item) => {
    setFavorites([...favorites, item]);
    localStorage.setItem("...favorites", JSON.stringify(favorites));
  };
  useEffect(() => {
    const storeItem = JSON.parse(localStorage.getItem("...favorites"));
    if (storeItem) {
      setFavorites(storeItem);
    }
  }, []);
  const isFavorite = (item) => {
    return favorites.some((favorite) => favorite.id === item.id);
  };
  return (
    <div className="conatiner my-5">
      <div className="row my-5">
        <div className="col-lg-6">
          <h2>List of student</h2>
          {/* Display a list of items with a button to add them to the favorites list */}
          <ul>
            {items.map((item) => (
              <li key={item.id}>
                {item.name}

                <button
                  onClick={() => handleAddToFavorites(item)}
                  className="m-2 btn btn-outline-secondary"
                  style={{ color: isFavorite(item) ? "red" : "black" }}
                >
                  <Favorite />
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div className="col-lg-6">
          {/* Display the list of favorites */}
          <h2>List of favorites</h2>
          {favorites.length > 0 ? (
            <ul>
              {favorites.map((favorite) => (
                <li key={favorite.id} style={{ color: "red" }}>
                  {favorite.name}
                </li>
              ))}
            </ul>
          ) : (
            <p>No items found</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default AddtoFav;
