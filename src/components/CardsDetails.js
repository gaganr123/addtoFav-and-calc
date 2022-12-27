import React from "react";

const CardsDetails = () => {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-lg-8 mx-auto">
          <div className="card shadow">
            <div className="row">
              <div className="col-lg-6 p-3">
                <img
                  src=" https://b.zmtcdn.com/data/pictures/9/18857339/8f53919f1175c08cf0f0371b73704f9b_o2_featured_v2.jpg?output-format=webp"
                  alt="img"
                  className="img-fluid rounded-3"
                  style={{ height: "300px" }}
                />
              </div>
              <div className="col-lg-6 p-3">
                <p className="text-center">CardsDetails</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardsDetails;
