import { CgGym } from "react-icons/cg";
import { FaPeopleGroup } from "react-icons/fa6";
import { IoLocationSharp } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const Benefits = () => {
  const navigate = useNavigate();

  const navigateLocations = () => {
    navigate("/locations");
  };

  return (
    <div
      className="flex flex-col mb-20 justify-center items-center text-zinc-900"
      id="Benefits"
    >
      <h2 className="font-bebas text-4xl my-10">RAZONES PARA UNIRSE</h2>
      <div className="flex gap-6">
        <div className="flex bg-zinc-800 p-5 gap-2 items-center hover:bg-yellow-500 hover:scale-110 text-white transition-all duration-200">
          <IoLocationSharp />
          <button onClick={navigateLocations}>MULTIPLES SUCURSALES</button>
        </div>
        <div className="flex bg-zinc-800 p-5 gap-2 items-center hover:bg-yellow-500 hover:scale-110 text-white transition-all duration-200">
          <FaPeopleGroup />
          <p>ENTRENADORES A TU DISPOSICION</p>
        </div>
        <div className="flex bg-zinc-800 p-5 gap-2 items-center hover:bg-yellow-500 hover:scale-110 text-white transition-all duration-200">
          <CgGym />
          <p>RUTINAS PERSONALIZADAS</p>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
