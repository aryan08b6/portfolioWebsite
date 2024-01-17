import React from "react";
import ThumbCard from "../ThumbCard/ThumbCard";

function OpenLearning() {
  const items = [
    { 
      name: "Chai Or React",
      img: "https://i.ytimg.com/vi/vz1RlUyrc3w/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBkOieEFJEYUD5zkDR0IqVos_hAPQ",
      tags: ["#frontent", "#react"]
    },
    {
      name: "Chai or Javascript Backend",
      img: "https://i.ytimg.com/vi/EH3vGeqeIAo/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAjy0w9nTPh-GiQJryhx9x-rbRO0Q", 
      tags: ["#Javascript", "#Express", "#backend", "#mongoose"],
    },
    {
      name: "IBM AI Enginner Course",
      img: "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/http://coursera-university-assets.s3.amazonaws.com/c0/87a10033a311e892619b85c6fd62bb/IBM-200x48.png?auto=format%2Ccompress&dpr=1&w=&h=45",
      tags: ["#ML", "#Deep Learning", "#CV"],
    },
    {
      name: "ROS",
      img: "https://docs.ros.org/en/iron/_static/iron-small.png",
      tags: [
        "#Robotics"
      ],
    },
  ];
  return (
    <>
      <div className="text-center text-bold text-3xl m-5 my-11">Open Learning: The Place To Share All I Learn</div>
      <div className="flex flex-wrap justify-center items-center space-x-5 h-1/3">
          {items.map((item, index) => (
            <ThumbCard title={item.name} tags={item.tags} img={item.img}/>
          ))}
      </div>
    </>
  );
}

export default OpenLearning;
