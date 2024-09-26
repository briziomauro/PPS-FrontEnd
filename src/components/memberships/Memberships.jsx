import { FaArrowRightLong } from "react-icons/fa6";
import { GoDotFill } from "react-icons/go";
import { Link } from "react-router-dom";

const Memberships = () => {
  return (
    <div
      className="flex flex-col justify-center items-center text-center mb-10 bg-black h-screen border-[2px] border-x-0 border-black "
      id="Memberships"
    >
      <div className="text-white">
        <h2 className="font-bebas text-6xl">MEMBRESIAS</h2>
        <p className="text-lg">
          Mejora tu experiencia entrenando con nuestros planes de membresias
        </p>
      </div>
      <div className="flex justify-center gap-28 items-center text-white mt-10">
        <div className="flex flex-col text-center bg-gradient-to-br from-black via-zinc-800 to-black h-[570px] w-[360px] border border-yellow-200 shadow-md shadow-yellow-200 rounded-md hover:scale-105 transition-all duration-200">
          <h3 className="mt-10 text-3xl font-bebas">ESTANDAR</h3>
          <p className="mt-3 italic">"La opción ideal para quienes recién comienzan."</p>
          <div className="flex justify-center items-center h-[1px] bg-yellow-400 w-full mt-4"/>
          <p className="flex justify-center items-center gap-3 mt-6 text-4xl">$20.000 <span className="text-xl">ARS/MES</span></p>
          <ul className="flex flex-col gap-2 items-center mt-10 text-lg w-[340px]">
            <li className="flex items-center">
              <p>- Acceso limitado a servicios generales.</p>
            </li>
            <li className="flex items-center">
              <p>- Soporte técnico vía email.</p>
            </li>
            <li className="flex items-center">
              <p>- 1 usuario registrado.</p>
            </li>
            <li className="flex items-center">
              <p>- 5% de descuento en compras seleccionadas.</p>
            </li>
          </ul>
          <div className="flex justify-center mt-10">
            <Link to={"/register"}>
              <div className="flex w-[200px] p-3 rounded-full bg-white items-center text-black gap-2 justify-center hover:bg-yellow-500 hover:text-white hover:shadow-md hover:shadow-zinc-900 transition-all duration-200">
                <p>EMPIEZA AHORA</p>
                <FaArrowRightLong className="animate-bounce" />
              </div>
            </Link>
          </div>
        </div>

        <div className="flex flex-col items-center text-center bg-gradient-to-bl from-black via-zinc-800 to-black h-[570px] w-[360px] border border-yellow-200 shadow-md shadow-yellow-200 rounded-md hover:scale-105 transition-all duration-200">
          <h3 className="mt-10 text-3xl font-bebas">PREMIUM</h3>
          <p className="mt-3 italic">"Perfecta para usuarios que buscan el máximo rendimiento y beneficios."</p>
          <div className="flex justify-center items-center h-[1px] bg-yellow-400 w-full mt-4"/>
          <p className="flex justify-center items-center gap-3 mt-6 text-4xl">$32.000 <span className="text-xl">ARS/MES</span></p>
          <ul className="flex flex-col gap-2 items-center mt-10 text-lg w-[340px]">
            <li className="flex items-center">
              <p>- Acceso completo a todos los servicios.</p>
            </li>
            <li className="flex items-center">
              <p>- Soporte técnico 24/7 vía email</p>
            </li>
            <li className="flex items-center">
              <p>- 3 usuarios registrados.</p>
            </li>
            <li className="flex items-center">
              <p>- 15% de descuento en todas las compras.</p>
            </li>
          </ul>
          <div className="flex justify-center mt-10">
            <Link to={"/register"}>
              <div className="flex w-[200px] p-3 rounded-full text-black bg-white items-center gap-2 justify-center hover:bg-yellow-500 hover:text-white  hover:shadow-md hover:shadow-zinc-900 transition-all duration-200">
                <p>EMPIEZA AHORA</p>
                <FaArrowRightLong className="animate-bounce" />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Memberships;
