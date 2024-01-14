import React from "react";
import ThumbCard from "../ThumbCard/ThumbCard";

function Projects() {
  const items = [
    {
      name: "Edge Computing Drone",
      img: "https://live.staticflickr.com/5800/30105359904_05749d3c86_m.jpg",
      tags: ["#dronekit", "#mavlink", "#sockets", "#raspberryPi"],
    },
    {
      name: "Delivery Drone",
      img: "https://live.staticflickr.com/5800/30105359904_05749d3c86_m.jpg",
      tags: ["#dronekit", "#mavlink", "#gps", "#onshape"],
    },
    {
      name: "Portfolio Website",
      tags: ["#react", "#taiwind", "#webdev"],
    },
    {
      name: "YT Clone with Complete Backend",
      img: "https://yt3.googleusercontent.com/584JjRp5QMuKbyduM_2k5RlXFqHJtQ0qLIPZpwbUjMJmgzZngHcam5JMuZQxyzGMV5ljwJRl0Q=s176-c-k-c0x00ffffff-no-rj",
      tags: [
        "#react",
        "#express",
        "#jwt",
        "#mongoose",
        "#cloudinary",
        "#bcrypt",
        "#backend",
        "#webdev",
      ],
    },
  ];
  return (
    <>
      <div className="text-center text-bold text-3xl w-5 m-5 my-11">Projects</div>
      <div className="flex flex-wrap justify-center items-center space-x-5 h-1/3">
          {items.map((item, index) => (
            <ThumbCard name={item.name} tags={item.tags} />
          ))}
      </div>
    </>
  );
}

export default Projects;
