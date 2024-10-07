import { CgGym } from "react-icons/cg";
import { FaPeopleGroup } from "react-icons/fa6";
import { IoLocationSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

const Benefits = () => {

  return (
    <div className="flex justify-center w-full gap-10 text-3xl font-bebas">
      <Link to="/locations">
        <div className="flex bg-zinc-900 rounded-badge justify-center w-[500px] h-[110px] p-5 gap-2 items-center hover:bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900  hover:scale-110 hover:-rotate-1 text-white transition-all duration-200">
          <IoLocationSharp />
          <button>MULTIPLES SUCURSALES</button>
        </div>
      </Link>
      <a href="#Trainers">
        <div className="flex rounded-badge  bg-yellow-500 justify-center w-[500px] h-[110px] p-5 gap-2 items-center hover:bg-gradient-to-br from-yellow-500 via-yellow-400 to-yellow-500 hover:scale-110 text-white transition-all duration-200">
          <FaPeopleGroup />
          <p>ENTRENADORES A TU DISPOSICION</p>
        </div>
      </a>
      <a href="#Memberships">
        <div className="flex rounded-badge  bg-zinc-900  justify-center w-[500px] h-[110px] p-5 gap-2 items-center hover:bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900  hover:scale-110 hover:rotate-1 text-white transition-all duration-200">
          <CgGym />
          <p>RUTINAS PERSONALIZADAS</p>
        </div>
      </a>
    </div>
  );
};

export default Benefits;
