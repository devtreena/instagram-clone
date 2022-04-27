import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../../components/navbar/NavBar";
import "./home.css";

const Home = () => {
  return (
    <>
      <div className="home container">
        <NavBar />
        <Outlet />
      </div>
    </>
  );
};

export default Home;
