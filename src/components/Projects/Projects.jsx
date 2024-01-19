import React from "react";
import ThumbCard from "../ThumbCard/ThumbCard";
import useResources from "../../hooks/Resources";

function Projects() {

  const items = useResources()

  return (
    <>
      <div className="text-bold text-3xl text-center m-5 my-11">Projects: What i have made so far</div>
      <div className="flex flex-wrap justify-center items-center space-x-5 h-1/3">
        {items.map((item, index) => {
          if (item.type === "project") {
            return (
              <ThumbCard data={item} key={item.rId}/>
            );
          }
        })}
      </div>
    </>
  );
}

export default Projects;
