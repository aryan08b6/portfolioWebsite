import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Layout from "./Layout";
import Home from "./components/Home/Home.jsx";
import About from "./components/About/About.jsx";
import Contact from "./components/Contact/Contact.jsx";
import Github, { githubInfoLoader } from "./components/Github/Github";
import OpenLearning from "./components/OpenLearning/OpenLearning.jsx";
import Projects from "./components/Projects/Projects.jsx";
import DisplayPage from "./components/DisplayPage/DisplayPage.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/portfolioWebsite/' element={<Layout/>}>
      <Route path="/portfolioWebsite/" element={<Home />} />
      <Route path='home' element={<Home />} />
      <Route path='openLearning' element={<OpenLearning />}/>
      <Route path='projects' element={<Projects />}/>
      <Route path='about' element={<About />} />
      <Route path='contact' element={<Contact />} />
      <Route path="resource/:rId" element={<DisplayPage/>}/>
      <Route loader={githubInfoLoader} path='github' element={<Github />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
