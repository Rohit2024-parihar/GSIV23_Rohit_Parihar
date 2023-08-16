import React from "react";

const ShimmerPage = () => {
  const shimmerArray = new Array(20).fill("");
  return (
    <>
      {shimmerArray.map((e, i) => {
        return (
          <div key={i} className="card">
            <div className="bg media"></div>
            <div className="p-32">
              <div className="bg title-line"></div>
              <div className="bg title-line end"></div>
              <div className="bg content-line m-t-24"></div>
              <div className="bg content-line"></div>
              <div className="bg content-line"></div>
              <div className="bg content-line"></div>
              <div className="bg content-line end"></div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default ShimmerPage;
