import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const RegisterPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [userlastname, setUsernamelastname] = useState("");
  const [userphone, setUserphone] = useState("");
  const [userdate, setUserdate] = useState("");
  const [errors, setErrors] = useState({
    email: false,
    password: false,
    username: false,
  });
  const navigate = useNavigate();
  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleChangeName = (e) => {
    setUsername(e.target.value);
  };
  const handleChangeLastName = (e) => {
    setUsernamelastname(e.target.value);
  };
  const handleChangePhone = (e) => {
    setUserphone(e.target.value);
  };
  const handleChangeDate = (e) => {
    setUserdate(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const emailValue = email.trim();
    const passwordValue = password.trim();
    const usernameValue = username.trim();
    const userlastnameValue = userlastname.trim();
    const userphoneValue = userphone.trim();
    const userdateValue = userdate.trim();

    if (
      emailValue === "" ||
      passwordValue === "" ||
      usernameValue === "" ||
      userlastnameValue === "" ||
      userphoneValue === "" ||
      userdateValue === ""
    ) {
      setErrors({
        email: emailValue === "",
        password: passwordValue === "",
      });
      return;
    }

    setErrors({ email: false, password: false });
    navigate("/clientid");
  };

  return (
    <div className="h-screen bg-white flex ">
      <div className="w-full md:w-2/4 h-screen ">
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
        <main className="mt-6 bg-white mx-auto px-16">
          <h2 className="font-bebas text-5xl text-zinc-700 text-center ">
            Ingresa tu Información
          </h2>
          <form className="mt-8 w-full" onSubmit={handleSubmit}>
            <div className="mb-4 w-full">
              <label className="text-sm m-1">Nombre</label>
              <input
                onChange={handleChangeName}
                value={username}
                placeholder="Ingrese su Nombre"
                className={errors.username ? " bg-white appearance-none border caret-zinc-400  rounded w-full py-4 px-3 leading-tight focus:outline-none border-red-600  text-zinc-700" : "bg-white appearance-none border caret-zinc-400 border-gray-300 rounded w-full py-4 px-3 leading-tight focus:outline-none focus:border-yellow-400  text-zinc-700"}
              />
            </div>
            <div className="mb-4 w-full">
              <label className="text-sm m-1">Apellido</label>
              <input
                onChange={handleChangeLastName}
                value={userlastname}
                placeholder="Apellido"
                className={errors.userlastname ? " bg-white appearance-none border caret-zinc-400  rounded w-full py-4 px-3 leading-tight focus:outline-none border-red-600  text-zinc-700" : "bg-white appearance-none border caret-zinc-400 border-gray-300 rounded w-full py-4 px-3 leading-tight focus:outline-none focus:border-yellow-400  text-zinc-700"}
              />
            </div>
            <div className="mb-4 flex flex-col md:flex-row gap-3">
              <div className="w-full">
                <label className="text-sm m-1">Fecha de Nacimiento</label>
                <input
                  onChange={handleChangeDate}
                  value={userdate}
                  type="date"
                  placeholder="Ingrese su Fecha de nacimiento"
                  className={errors.userdate ? " bg-white appearance-none border caret-zinc-400  rounded w-full py-4 px-3 leading-tight focus:outline-none border-red-600  text-zinc-700" : "bg-white appearance-none border caret-zinc-400 border-gray-300 rounded w-full py-4 px-3 leading-tight focus:outline-none focus:border-yellow-400  text-zinc-700"}
                  />
              </div>

              <div className="w-full">
                <label className="text-sm m-1">Telefono</label>
                <input
                  onChange={handleChangePhone}
                  value={userphone}
                  type="number"
                  placeholder="Ingrese su Telefono"
                  className={errors.userphone ? " bg-white appearance-none border caret-zinc-400  rounded w-full py-4 px-3 leading-tight focus:outline-none border-red-600  text-zinc-700" : "bg-white appearance-none border caret-zinc-400 border-gray-300 rounded w-full py-4 px-3 leading-tight focus:outline-none focus:border-yellow-400  text-zinc-700"}
                  />
              </div>
            </div>
            <div className="mb-4 w-full">
              <label className="text-sm m-1">Correo Electrónico</label>
              <input
                onChange={handleChangeEmail}
                value={email}
                type="email"
                placeholder="Ingrese su Correo Electrónico"
                className={errors.email ? " bg-white appearance-none border caret-zinc-400  rounded w-full py-4 px-3 leading-tight focus:outline-none border-red-600  text-zinc-700" : "bg-white appearance-none border caret-zinc-400 border-gray-300 rounded w-full py-4 px-3 leading-tight focus:outline-none focus:border-yellow-400  text-zinc-700"}
                />
            </div>
            <div className="mb-4 flex flex-col md:flex-row gap-3 ">
              <div className="mb-4 w-full">
                <label className="text-sm m-1">Contraseña</label>
                <input
                  onChange={handleChangePassword}
                  value={password}
                  type="password"
                  placeholder="Ingrese su Contraseña"
                  className={errors.password ? " bg-white appearance-none border caret-zinc-400  rounded w-full py-4 px-3 leading-tight focus:outline-none border-red-600  text-zinc-700" : "bg-white appearance-none border caret-zinc-400 border-gray-300 rounded w-full py-4 px-3 leading-tight focus:outline-none focus:border-yellow-400  text-zinc-700"}
                  />
              </div>
              <div className="mb-4 w-full">
                <label className="text-sm m-1">Repetir Contraseña</label>
                <input
                  onChange={handleChangePassword}
                  value={password}
                  type="password"
                  placeholder="Repita su Contraseña"
                  className={errors.password ? " bg-white appearance-none border caret-zinc-400  rounded w-full py-4 px-3 leading-tight focus:outline-none border-red-600  text-zinc-700" : "bg-white appearance-none border caret-zinc-400 border-gray-300 rounded w-full py-4 px-3 leading-tight focus:outline-none focus:border-yellow-400  text-zinc-700"}
                />
              </div>
            </div>
            <div className="mb-5 ">
              <button
                className="bg-amber-400 w-full text-white px-6 py-3 mr-2 transition duration-300 hover:bg-amber-500 font-bold"
                type="submit"
              >
                SIGUIENTE
              </button>
            </div>
          </form>
          <div className=" flex flex-row gap-2 items-center lg:mt-10 justify-center pb-10">
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
      <div className="w-2/4  hidden md:block">
        <img
          src="https://images.pexels.com/photos/703012/pexels-photo-703012.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
          className="h-full  object-cover hidden md:block  md:fixed"
        />
      </div>
    </div>
  );
};

export default RegisterPage;
