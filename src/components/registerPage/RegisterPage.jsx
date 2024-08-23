import { Link } from "react-router-dom";

const RegisterPage = () => {
  return (
    <div className="h-full pb-4 bg-white">
      <header className="md:mx-14  flex justify-center md:justify-between">
        <nav className="flex flex-col md:flex-row gap-5 md:gap-0 w-full justify-between items-center">
          <Link
            to="/"
            className="flex items-center cursor-pointer hover:opacity-60"
          >
            <img src="./img/logoTC.png" className="h-[80px] w-[120px]" />
          </Link>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-5 items-center mt-4 lg:mt-0">
            <p className="text-gray-500 select-none">¿Ya eres usuario?</p>
            <Link
              to="/login"
              className="border text-gray-800 border-black px-5 py-1 rounded hover:opacity-60"
            >
              Iniciar sesión
            </Link>
          </div>
        </nav>
      </header>
      <main className="mt-6 max-w-lg mx-auto">
        <h2 className="font-bold text-3xl text-gray-600 text-center ">
          Ingresa tu Información
        </h2>
        <form className="mt-8 w-full">
          <div className="mb-4 w-full">
            <input
              placeholder="Nombre"
              className="bg-white appearance-none border border-gray-300 rounded w-full py-4 px-3 leading-tight focus:outline-none focus:border-gray-500  text-gray-700"
            />
          </div>
          <div className="mb-4 w-full">
            <input
              placeholder="Apellido"
              className="bg-white appearance-none border border-gray-300 rounded w-full py-4 px-3 leading-tight focus:outline-none focus:border-gray-500  text-gray-700"
            />
          </div>
          <div className="mb-4 flex flex-col md:flex-row gap-3">
            <div className="w-full">
              <input
                type="date"
                placeholder="Fecha de nacimiento"
                className="bg-transparent   appearance-none border border-gray-300 rounded w-full py-4 px-3 leading-tight focus:outline-none focus:border-gray-500  "
              />
            </div>

            <div className="w-full">
              <input
                type="number"
                placeholder="Telefono"
                className="bg-white appearance-none border border-gray-300 rounded w-full py-4 px-3 leading-tight focus:outline-none focus:border-gray-500  text-gray-700"
              />
            </div>
          </div>
          <div className="mb-4 w-full">
            <input
              type="email"
              placeholder="Correo Electrónico"
              className="bg-white appearance-none border border-gray-300 rounded w-full py-4 px-3 leading-tight focus:outline-none focus:border-gray-500  text-gray-700"
            />
          </div>
          <div className="mb-4 w-full">
            <input
              type="password"
              placeholder="Contraseña"
              className="bg-white appearance-none border border-gray-300 rounded w-full py-4 px-3 leading-tight focus:outline-none focus:border-gray-500  text-gray-700"
            />
          </div>
          <div className="mb-4 w-full">
            <input
              type="password"
              placeholder="Repetir Contraseña"
              className="bg-white appearance-none border border-gray-300 rounded w-full py-4 px-3 leading-tight focus:outline-none focus:border-gray-500  text-gray-700"
            />
          </div>
          <div>
            <button className="bg-amber-400 w-full text-gray-700 px-6 py-3 rounded-md mr-2 transition duration-300 hover:bg-amber-500 font-bold">
              SIGUIENTE
            </button>
          </div>
        </form>
      </main>
    </div>
  );
};

export default RegisterPage;
