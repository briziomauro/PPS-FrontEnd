import React, { useState } from 'react'
import 'bootstrap-icons/font/bootstrap-icons.css';
import Benefits from '../benefits/Benefits';

const MainPage = () => {
  const [clickedIndex, setClickedIndex] = useState(2);

  const images = [
    "https://i.pinimg.com/564x/7f/17/41/7f17416bfaf2c4e8602e917920e5dcac.jpg",
    "https://i.pinimg.com/564x/0f/56/15/0f5615e0f470e7148324780f471b4a69.jpg",
    "https://i.pinimg.com/564x/af/9c/37/af9c37a2c41126f0ad02b7a55d594f43.jpg",
    "https://i.pinimg.com/564x/5c/50/89/5c5089605fb0422d454a2a5c22f025d5.jpg",
    "https://i.pinimg.com/736x/21/7b/52/217b521557ebe4900b18a9f38cf74854.jpg",
  ];

  return (
    <div className='flex flex-col justify-center mt-10 gap-y-2'>
      <div className='flex justify-center items-center gap-5'>
        <p className='font-oswald font-semibold text-black text-8xl'>DISFRUTA</p>
        <img src="https://images.pexels.com/photos/949131/pexels-photo-949131.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className='h-[78px] w-[330px] object-cover rounded-full' />
        <p className='font-oswald font-semibold text-black text-8xl'>ENTRENANDO</p>
      </div>
      <div className='flex justify-center items-center gap-5'>
        <p className='font-oswald font-semibold text-black text-8xl'>ELEVA</p>
        <p className='font-oswald font-semibold text-black text-8xl'>TU</p>
        <p className='font-oswald font-semibold text-black text-8xl'>RUTINA</p>
        <img src="https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className='h-[78px] w-[575px] object-cover rounded-full' />
      </div>
      <div className='flex justify-center items-center gap-5'>
        <img src="https://images.pexels.com/photos/28076/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className='h-[78px] w-[530px] object-cover rounded-full' />
        <p className='font-oswald font-semibold text-black text-8xl'>MEJORA</p>
        <p className='font-oswald font-semibold text-black text-8xl'>CADA</p>
        <p className='font-oswald font-semibold text-black text-8xl'>DIA</p>
      </div>
    </div>
  )
}

export default MainPage