import React from "react";
import ThumbCard from "../ThumbCard/ThumbCard";
import items from "../Resources/resources.json"

function OpenLearning() {
  return (
    <>
      <div className="text-center text-bold text-3xl m-5 my-11">Open Learning: The Place To Share All I Learn</div>
      <div className="flex flex-wrap justify-center items-center space-x-5 h-1/3">
        {items.map((item, index) => {
          if (item.type === "OpenLearning") {
            return (
              <ThumbCard data={item} key={item.rId}/>
            );
          }
        })}
      </div>
    </>
  );
}

export default OpenLearning;
