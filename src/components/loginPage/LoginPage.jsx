import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <div className="mx-auto h-screen flex   ">
      <main className="w-full px-10">
        <Link to="/">
          <img src="./img/logoTC.png" alt="" className="h-[80px] w-[120px]" />
        </Link>
        <div className="mt-5 max-w-xl mx-auto">
          <header>
            <p className="mt-12 mb-2 text-gray-600">Bienvenido</p>
            <h2 className="font-bold text-4xl text-gray-600">
              Continúe con su cuenta
            </h2>
          </header>

          <form className="mt-10">
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
            <button className="bg-amber-400 w-full text-gray-700 px-6 py-3 rounded-md mr-2 transition duration-300 hover:bg-amber-500 font-bold">
              CONTINUAR
            </button>
          </form>

          <footer>
            <Link
              to="/register"
              className="block mt-12 mb-6 text-gray-500 hover:text-gray-700 cursor-pointer text-center w-full"
            >
              ¿Eres nuevo? COMENZAR - ES GRATIS
            </Link>
          </footer>
        </div>
      </main>
      <div className="w-full hidden md:block">
        <img
          src="https://i.ytimg.com/vi/FmOhpro8LkA/maxresdefault.jpg"
          alt=""
          className="h-full object-cover saturate-0 hidden md:block"
        />
      </div>
    </div>
  );
};

export default LoginPage;
