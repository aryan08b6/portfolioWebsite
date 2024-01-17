import { Link } from "react-router-dom";
import Typed from "typed.js";
import { useRef, useEffect } from "react";
import devImg from "/img.jpg"

export default function Home() {
  const el = useRef(null);

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
    <div className="flex flex-row justify-between">

      <img className="w-1/2 h-1/2" src={devImg} alt="Picture" />

      <div className="text-right text-5xl font-mono ">
        <h1>
          Hello Developers <br /> I am Aryan,
          <br /> I am a <span ref={el}> </span>
        </h1>
        {/* Element to display typing strings */}
      </div>
    </div>
  );
}
