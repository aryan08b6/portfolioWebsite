import React from "react";
import ThumbCard from "../ThumbCard/ThumbCard";

function Projects() {
  const items = [
    {
      rId: 1,
      name: "Edge Computing Drone",
      img: "https://sumanastech.com/wp-content/uploads/2019/09/What-is-Edge-Computing.png",
      tags: ["#dronekit", "#mavlink", "#sockets", "#raspberryPi"],
    },
    {
      rId: 2,
      name: "DeliveryDrone",
      img: "https://img.freepik.com/free-vector/young-man-working-with-drone-delivery-service-technology-cartoon-character-vector-illustrations-drone-delivery-concept_1150-56243.jpg?t=st=1705489461~exp=1705490061~hmac=5177c5d8d2979f167eab3583fa1487e50ea97043c37f7cc12a7a2bffa27aaf92",
      tags: ["#dronekit", "#mavlink", "#gps", "#onshape"],
    },
    {
      rId: 3,
      name: "Portfolio Website",
      img: "https://img.freepik.com/free-vector/single-page-application-abstract-concept-illustration-spa-web-page-web-development-trend-app-inside-browser-dynamically-rewriting-page-responsive-website-creation_335657-899.jpg?t=st=1705489626~exp=1705490226~hmac=30d20a7ceb48a52816fe87209fff63cb73ef142241b236342ca39a8b3f47dc80",
      tags: ["#react", "#taiwind", "#webdev"],
    },
    {
      rId: 4,
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
      <div className="text-bold text-3xl text-center m-5 my-11">Projects: What i have made so far</div>
      <div className="flex flex-wrap justify-center items-center space-x-5 h-1/3">
          {items.map((item, index) => (
            <ThumbCard title={item.name} tags={item.tags} rId={item.rId} img={item.img} />
          ))}
      </div>
    </>
  );
}

export default Projects;
