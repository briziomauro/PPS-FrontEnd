import { Link } from "react-router-dom";

const RegisterPage = () => {
  return (
    <div className="h-screen bg-white flex w-screen">
      <div className="w-2/4 h-screen">
        <header className="md:mx-14  flex justify-center md:justify-between">
          <nav className="flex flex-col md:flex-row gap-5 md:gap-0 w-full justify-between items-center">
            <Link
              to="/"
              className="flex items-center cursor-pointer hover:opacity-60"
            >
              <img src="./img/logoTC.png" className="h-[80px] w-[120px]" />
            </Link>
          </nav>
        </header>
        <main className="mt-6 max-w-lg mx-auto h-screen">
          <h2 className="font-bebas text-5xl text-zinc-700 text-center ">
            Ingresa tu Información
          </h2>
          <form className="mt-8 w-full">
            <div className="mb-4 w-full">
              <label className="text-sm m-1">Nombre</label>
              <input
                placeholder="Ingrese su Nombre"
                className="bg-white appearance-none border border-gray-300 rounded w-full py-4 px-3 leading-tight focus:outline-none focus:border-gray-500  text-gray-700"
              />
            </div>
            <div className="mb-4 w-full">
              <label className="text-sm m-1">Apellido</label>
              <input
                placeholder="Apellido"
                className="bg-white appearance-none border border-gray-300 rounded w-full py-4 px-3 leading-tight focus:outline-none focus:border-gray-500  text-gray-700"
              />
            </div>
            <div className="mb-4 flex flex-col md:flex-row gap-3">
              <div className="w-full">
                <label className="text-sm m-1">Fecha de Nacimiento</label>
                <input
                  type="date"
                  placeholder="Ingrese su Fecha de nacimiento"
                  className="bg-transparent   appearance-none border border-gray-300 rounded w-full py-4 px-3 leading-tight focus:outline-none focus:border-gray-500  "
                />
              </div>

              <div className="w-full">
                <label className="text-sm m-1">Telefono</label>
                <input
                  type="number"
                  placeholder="Ingrese su Telefono"
                  className="bg-white appearance-none border border-gray-300 rounded w-full py-4 px-3 leading-tight focus:outline-none focus:border-gray-500  text-gray-700"
                />
              </div>
            </div>
            <div className="mb-4 w-full">
              <label className="text-sm m-1">Correo Electrónico</label>
              <input
                type="email"
                placeholder="Ingrese su Correo Electrónico"
                className="bg-white appearance-none border border-gray-300 rounded w-full py-4 px-3 leading-tight focus:outline-none focus:border-gray-500  text-gray-700"
              />
            </div>
            <div className="mb-4 flex flex-col md:flex-row gap-3">
              <div className="mb-4 w-full">
                <label className="text-sm m-1">Contraseña</label>
                <input
                  type="password"
                  placeholder="Ingrese su Contraseña"
                  className="bg-white appearance-none border border-gray-300 rounded w-full py-4 px-3 leading-tight focus:outline-none focus:border-gray-500  text-gray-700"
                />
              </div>
              <div className="mb-4 w-full">
                <label className="text-sm m-1">Repetir Contraseña</label>
                <input
                  type="password"
                  placeholder="Repita su Contraseña"
                  className="bg-white appearance-none border border-gray-300 rounded w-full py-4 px-3 leading-tight focus:outline-none focus:border-gray-500  text-gray-700"
                />
              </div>
            </div>
            <div>
              <button className="bg-amber-400 w-full text-white px-6 py-3 mr-2 transition duration-300 hover:bg-amber-500 font-bold">
                SIGUIENTE
              </button>
            </div>
          </form>
          <div className="flex flex-row gap-2 items-center lg:mt-10 justify-center">
            <p className="text-gray-500 select-none">¿Ya eres usuario?</p>
            <p>-</p>
            <Link
              to="/login"
              className="border text-gray-800 border-black px-5 py-1 hover:bg-zinc-700 hover:text-white transition-all duration-300"
            >
              Iniciar sesión
            </Link>
          </div>
        </main>
      </div>
      <div className="w-2/4 h-screen hidden md:block">
        <img
          src="https://images.pexels.com/photos/703012/pexels-photo-703012.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
          className="h-full object-cover hidden md:block"
        />
      </div>
    </div>
  );
};

export default RegisterPage;
