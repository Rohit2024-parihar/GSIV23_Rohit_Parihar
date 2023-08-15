import React from "react";

const ShimmerPage = () => {
  const shimmerArray = new Array(20).fill("");
  return (
    <>
      {shimmerArray.map((e, i) => {
        return (
          <div key={i} className="card">
            <div className="shimmerBG media"></div>
            <div className="p-32">
              <div className="shimmerBG title-line"></div>
              <div className="shimmerBG title-line end"></div>
              <div className="shimmerBG content-line m-t-24"></div>
              <div className="shimmerBG content-line"></div>
              <div className="shimmerBG content-line"></div>
              <div className="shimmerBG content-line"></div>
              <div className="shimmerBG content-line end"></div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default ShimmerPage;
