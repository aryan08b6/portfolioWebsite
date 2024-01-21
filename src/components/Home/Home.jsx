import Typed from "typed.js";
import { useRef, useEffect } from "react";
import devImg from "/img.jpg";
import useResources from "../../hooks/Resources";
import ThumbCard from "../ThumbCard/ThumbCard";
import { NavLink } from "react-router-dom";

export default function Home() {
  const el = useRef(null);

  const items = useResources();

  const openLearning = items
    .filter((item) => item.type === "OpenLearning")
    .slice(0, 4);
  const projects = items.filter((item) => item.type === "project").slice(0, 4);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        " MERN Full Stack Web Dev",
        " IBM Certified MLAI Engg",
        " Drone Dev",
        " ROS and Robotics Dev",
        " VLSI Engg Student",
        " Developer",
      ], // Strings to display
      // Speed settings, try diffrent values untill you get good results
      startDelay: 300,
      typeSpeed: 50,
      backSpeed: 50,
      backDelay: 50,
    });

    // Destropying
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="flex flex-col justify-between overflow-auto">
      <img className=" h-1/2 w-1/2 mx-auto" src={devImg} alt="Picture" />

      <div className="text-center text-5xl font-mono mx-auto my-5 ">
        <h1>
          Hello Developers <br /> I am Aryan,
          <br /> I am a <br /> <span ref={el}> </span>
        </h1>
        {/* Element to display typing strings */}
      </div>

      <div className="text-bold text-6xl text-center m-5 my-11">
        <span className="bg-teal-400">Projects</span>
      </div>
      <div className="flex flex-wrap justify-center items-center space-x-5 h-1/3">
        {projects.map((item, index) => {
          if (item.type === "project") {
            return <ThumbCard data={item} key={item.rId} />;
          }
        })}
        <NavLink
          to={"/portfolioWebsite/projects"}
          className={({ isActive }) =>
            `block py-2 pr-4 pl-3 duration-200 ${
              isActive ? "text-orange-700" : "text-gray-700"
            } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0 font-semibold text-lg`
          }
        >
          <button
            type="button"
            className="rounded-full bg-black px-2 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
          >
            See More
          </button>
        </NavLink>
      </div>

      <div className="text-center text-bold text-6xl m-5 my-11 ">
        <span className="bg-teal-400">Open Learning</span>
      </div>
      <div className="flex flex-wrap justify-center items-center space-x-5 h-1/3">
        {openLearning.map((item, index) => {
          if (item.type === "OpenLearning") {
            return <ThumbCard data={item} key={item.rId} />;
          }
        })}

        <NavLink
          to={"/portfolioWebsite/openLearning"}
          className={({ isActive }) =>
            `block py-2 pr-4 pl-3 duration-200 ${
              isActive ? "text-orange-700" : "text-gray-700"
            } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0 font-semibold text-lg`
          }
        >
          <button
            type="button"
            className="rounded-full bg-black px-2 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
          >
            See More
          </button>
        </NavLink>
      </div>
    </div>
  );
}
