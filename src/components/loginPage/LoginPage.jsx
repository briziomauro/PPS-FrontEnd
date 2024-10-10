import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useUser } from "../../contexts/UserContext";
// Importa tu contexto

const LoginPage = () => {
  const { login } = useUser();
  const [showPassLogin, setShowPassLogin] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({
    email: false,
    password: false,
  });
  const navigate = useNavigate();

  const handleShowPassLogin = () => {
    setShowPassLogin((prevShowPass) => !prevShowPass);
  };


  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const emailValue = email.trim();
    const passwordValue = password.trim();

    if (emailValue === "" || passwordValue === "") {
      setErrors({
        email: emailValue === "",
        password: passwordValue === "",
      });
      return;
    }

    setErrors({ email: false, password: false });

    try {
      await login(email, password);

      const userTypeFromStorage = localStorage.getItem("userTypeResponse");

      if (userTypeFromStorage === "Client") {
        navigate("/clientid");
      } else if (userTypeFromStorage === "Trainer") {
        navigate("/profesorid");
      } else if (userTypeFromStorage === "Admin") {
        navigate("/adminid");
      }

    } catch (error) {
      console.error("Error durante el inicio de sesión:", error);
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
                className={`bg-white appearance-none border caret-zinc-400 rounded w-full py-4 px-3 leading-tight focus:outline-none ${errors.email ? "border-red-600" : "border-gray-300"}`}
              />
            </div>
            <div className="w-full relative mb-4">
              <label className="text-sm m-1 text-zinc-400">Contraseña</label>
              <input
                onChange={handleChangePassword}
                value={password}
                type={showPassLogin ? "text" : "password"}
                placeholder="Ingrese su Contraseña"
                className={`bg-white appearance-none border caret-zinc-400 rounded w-full py-4 px-3 pr-10 focus:outline-none ${errors.password ? "border-red-600" : "border-gray-300"}`}
              />
              <i
                className={`bi ${showPassLogin ? 'bi-eye-slash' : 'bi-eye'} absolute right-3 top-[65%] transform -translate-y-1/2 cursor-pointer`}
                onClick={handleShowPassLogin}
              />
            </div>
            <button
              className="bg-yellow-500 w-full text-white px-6 py-3 mr-2 transition duration-300 hover:bg-yellow-400 font-bold"
              type="submit"
            >
              CONTINUAR
            </button>
          </form>
          
          {/* Endpoint cambiar contraseña validando por email */}
          <div className="text-zinc-600 mt-4 flex w-full justify-center cursor-pointer hover:text-yellow-500 transition-all duration-300">
            <p>Olvidé mi contraseña</p>
          </div>

          <div className="flex flex-row gap-2 items-center lg:mt-8 justify-center">
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
