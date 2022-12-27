import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import CardsData from "./CardsData";
const Cards = (Card, { author }) => {
  const [data, setData] = useState(CardsData);
  useEffect(() => {
    setData(data);
  }, [data]);
  return (
    <div className="container mt-4">
      <div className="row  g-3">
        <h2 className="text-center my-3">Our Menu List {author} </h2>

        {data.map((items, id) => {
          return (
            <>
              <div
                className="col-lg-4 d-flex justify-content-center align-items-center my-1"
                key={id}
              >
                <div className="card flex-fill p-3 shadow">
                  <img
                    src={items.imgdata}
                    alt={items.rname}
                    className="img-fluid"
                    style={{ height: "200px" }}
                  />

                  <h5>{items.rname}</h5>
                  <p>Price:{items.price}</p>
                  <div className="d-flex justify-content-center">
                    <Button className="col-lg-12">Add to cart</Button>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Cards;
