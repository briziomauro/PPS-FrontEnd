import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import ActionButtons from "./ActionButtons";

//PASO 1
const RegisterPage = ({ nextStep }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [userlastname, setUsernamelastname] = useState("");
  const [userphone, setUserphone] = useState("");
  const [userdate, setUserdate] = useState("");
  const [dni, setdni] = useState("");
  const [genre, setgenre] = useState("");

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
  const handleChangeDNI = (e) => {
    setUserdate(e.target.value);
  };
  const handleChangeGenre = (e) => {
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
  };

  // const validate = () => {
  //   validar que los datos del form estan completos
  //   nextStep();
  // };

  return (
    <div>
      <div>
        <main className="mt-6 bg-white mx-auto px-16">
          <h2 className="font-bebas text-4xl text-zinc-700 text-center ">
            Ingresa tu Información
          </h2>
          <form className="mt-8 w-full" onSubmit={handleSubmit}>

            <div className="flex gap-3">
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
                  placeholder="Ingrese su Apellido"
                  className={errors.userlastname ? " bg-white appearance-none border caret-zinc-400  rounded w-full py-4 px-3 leading-tight focus:outline-none border-red-600  text-zinc-700" : "bg-white appearance-none border caret-zinc-400 border-gray-300 rounded w-full py-4 px-3 leading-tight focus:outline-none focus:border-yellow-400  text-zinc-700"}
                />
              </div>
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

            <div className="flex gap-3">
              <div className="mb-4 w-full">
                <label className="text-sm m-1">Numero de Documento</label>
                <input
                  onChange={handleChangeDNI}
                  value={dni}
                  placeholder="Ingrese su DNI"
                  className={errors.username ? " bg-white appearance-none border caret-zinc-400  rounded w-full py-4 px-3 leading-tight focus:outline-none border-red-600  text-zinc-700" : "bg-white appearance-none border caret-zinc-400 border-gray-300 rounded w-full py-4 px-3 leading-tight focus:outline-none focus:border-yellow-400  text-zinc-700"}
                />
              </div>
              <div className="mb-4 w-full">
                <label className="text-sm m-1">Género</label>
                <select
                  onChange={handleChangeGenre}
                  value={genre}
                  className={errors.userlastname ? "bg-white appearance-none border caret-zinc-400 rounded w-full py-4 px-3 leading-tight focus:outline-none border-red-600 text-zinc-700" : "bg-white appearance-none border caret-zinc-400 border-gray-300 rounded w-full py-4 px-3 leading-tight focus:outline-none focus:border-yellow-400 text-zinc-700"}
                >
                  <option value="" disabled>Seleccione su Género</option>
                  <option value="masculino">Masculino</option>
                  <option value="femenino">Femenino</option>
                  <option value="otro">Prefiero no decirlo</option>
                </select>
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
          </form>

          <div className=" flex flex-row gap-2 items-center justify-center">
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
    </div>
  );
};

export default RegisterPage;
