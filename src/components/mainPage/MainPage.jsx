import React, { useState } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import Benefits from "../benefits/Benefits";
import Memberships from "../memberships/Memberships";
import Trainers from "../trainers/Trainers";

import AboutUs from "../aboutUs/AboutUs";
import { IoLocationSharp } from "react-icons/io5";
import { FaPeopleGroup } from "react-icons/fa6";
import { CgGym } from "react-icons/cg";

const MainPage = () => {
  return (
    <>
      <div className="flex flex-col justify-evenly items-center h-screen overflow-hidden">
        <div className="flex flex-col justify-center mt-10 font-bebas font-semibold text-black text-[180px] leading-none w-screen">
          <div className="flex justify-center items-center gap-5 animate-slideInLeft">
            <p>DISFRUTA</p>
            <img
              src="https://images.pexels.com/photos/949131/pexels-photo-949131.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
              className="h-[120px] w-[330px] object-cover rounded-full"
            />
            <p>ENTRENANDO</p>
          </div>
          <div className="flex justify-center items-center gap-5 animate-slideInRight">
            <p>ELEVA</p>
            <p>TU</p>
            <p>RUTINA</p>
            <img
              src="https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
              className="h-[120px] w-[680px] object-cover rounded-full"
            />
          </div>
          <div className="flex justify-center items-center gap-5 animate-slideInLeft">
            <img
              src="https://images.pexels.com/photos/4720796/pexels-photo-4720796.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
              className="h-[120px] w-[650px] object-cover rounded-full"
            />
            <p>MEJORA</p>
            <p>CADA</p>
            <p>DIA</p>
          </div>
        </div>
        <Benefits />
      </div>
      <Memberships />
      <Trainers />
      <AboutUs />
    </>
  );
};

export default MainPage;
