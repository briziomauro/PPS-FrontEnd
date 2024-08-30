import { Link, useNavigate } from "react-router-dom";
import { data } from "../../data/data";
import { useState } from "react";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const filterUser = data.find(
      (f) => f.password == password && f.email == email
    );
    console.log(filterUser);
    if (filterUser) {
      if (filterUser.type === "admin") {
        navigate("/adminid");
      } else if (filterUser.type === "trainer") {
        navigate("/entrenadorid");
      } else if (filterUser.type === "client") {
        navigate("/clienteid");
      } else {
        alert("Rol no reconocido");
      }
    } else {
      alert("Usuario no encontrado");
    }
  };
  return (
    <div className="mx-auto h-screen flex">
      <main className="w-full px-10">
        <Link to="/">
          <img src="./img/logoTC.png" alt="" className="h-[80px] w-[120px]" />
        </Link>
        <div className="mt-5 max-w-xl mx-auto">
          <header className="font-bebas">
            <p className="mt-12 mb-2 text-zinc-700 text-2xl">Bienvenido</p>
            <h2 className="font-bold text-zinc-700 text-5xl">
              Continúe con su cuenta
            </h2>
          </header>
          <form className="mt-10" onSubmit={handleSubmit}>
            <div className="mb-4 w-full">
              <label className="text-sm m-1 text-zinc-400">
                Correo Electrónico
              </label>
              <input
                onChange={handleChangeEmail}
                value={email}
                type="email"
                placeholder="Ingrese su Correo Electrónico"
                className="bg-white appearance-none border caret-zinc-400 border-gray-300 rounded w-full py-4 px-3 leading-tight focus:outline-none focus:border-yellow-400  text-zinc-700"
              />
            </div>
            <div className="mb-4 w-full">
              <label className="text-sm m-1 text-zinc-400">Contraseña</label>
              <input
                onChange={handleChangePassword}
                value={password}
                type="password"
                placeholder="Ingrese su Contraseña"
                className="bg-white appearance-none border caret-zinc-400 border-gray-300 rounded w-full py-4 px-3 leading-tight focus:outline-none focus:border-yellow-400  text-zinc-700"
              />
            </div>
            <button
              className="bg-yellow-500 w-full text-white px-6 py-3 mr-2 transition duration-300 hover:bg-yellow-400 font-bold"
              type="submit"
              disabled={!email || !password}
            >
              CONTINUAR
            </button>
          </form>

          <div className="flex flex-row gap-2 items-center lg:mt-10 justify-center">
            <p className="text-gray-500 select-none">¿No tienes cuenta?</p>
            <p>-</p>
            <Link
              to="/register"
              className="border text-gray-800 border-black px-5 py-1 hover:bg-zinc-700 hover:text-white transition-all duration-300"
            >
              Registrate aquí
            </Link>
          </div>
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
