import React, { useState } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import Benefits from "../benefits/Benefits";
import Memberships from "../memberships/Memberships";
import Trainers from "../trainers/Trainers";

const MainPage = () => {
  return (
    <>
      <div className="flex justify-center items-center h-[550px]">
        <div className="flex flex-col justify-center mt-10 gap-y-2 font-bebas font-semibold text-black text-8xl w-[1000px]">
          <div className="flex justify-center items-center gap-5">
            <p>DISFRUTA</p>
            <img
              src="https://images.pexels.com/photos/949131/pexels-photo-949131.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
              className="h-[80px] w-[330px] object-cover rounded-full"
            />
            <p>ENTRENANDO</p>
          </div>
          <div className="flex justify-center items-center gap-5">
            <p>ELEVA</p>
            <p>TU</p>
            <p>RUTINA</p>
            <img
              src="https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
              className="h-[80px] w-[515px] object-cover rounded-full"
            />
          </div>
          <div className="flex justify-center items-center gap-5">
            <img
              src="https://images.pexels.com/photos/4720796/pexels-photo-4720796.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
              className="h-[80px] w-[530px] object-cover rounded-full"
            />
            <p>MEJORA</p>
            <p>CADA</p>
            <p>DIA</p>
          </div>
        </div>
      </div>
      <Benefits />
      <Memberships />
      <Trainers/>
    </>
  );
};

export default MainPage;
