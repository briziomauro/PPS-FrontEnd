import React, { useState } from 'react'

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
    <div className="relative h-screen">

      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none flex-col"
      >
        <h2 className="text-white text-5xl text-center font-bold mb-2">CONOCE NUESTROS PLANES</h2>
        <h2 className="text-white text-4xl text-center font-bold">Y COMENZA A ENTRENARTE!</h2>
        <button className='bg-white text-black p-3'>MAS DETALLES AQUI</button>
      </div>

      <div className="flex h-full">
        {images.map((src, index) => (
          <div
            key={index}
            onClick={() => setClickedIndex(index)}
            className={`transition-all duration-200 h-full ${clickedIndex === index ? "w-[40%]" : "w-[15%]"
              } cursor-pointer`}
          >
            <img
              src={src}
              alt={`img-${index}`}
              className="w-full h-full object-cover border-zinc-900 border-x"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default MainPage