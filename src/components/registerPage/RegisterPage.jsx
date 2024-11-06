import { useState } from "react";

const RegisterPage = ({ nextStep }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [username, setUsername] = useState("");
  const [userlastname, setUsernamelastname] = useState("");
  const [userphone, setUserphone] = useState("");
  const [userdate, setUserDate] = useState("");
  const [dni, setDni] = useState("");
  const [genre, setGenre] = useState("");
  const [membership, setMembership] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [confirmPasswordShow, setConfirmPasswordShow] = useState(false);

  const [errors, setErrors] = useState({});
  const [submitError, setSubmitError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errors = {};

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[0-9]{10}$/;

    if (!username.trim()) errors.username = "El nombre es obligatorio";
    if (!userlastname.trim()) errors.userlastname = "El apellido es obligatorio";
    if (!email.trim()) errors.email = "El correo electrónico es obligatorio";
    else if (!emailRegex.test(email)) errors.email = "El formato de correo no es válido";

    if (!password.trim()) errors.password = "La contraseña es obligatoria";
    if (!confirmPassword.trim()) errors.confirmPassword = "Repetir la contraseña es obligatorio";
    else if (password !== confirmPassword) errors.confirmPassword = "Las contraseñas no coinciden";

    if (!userphone.trim()) errors.userphone = "El teléfono es obligatorio";
    else if (!phoneRegex.test(userphone)) errors.userphone = "El formato de teléfono no es válido";

    if (!userdate.trim()) errors.userdate = "La fecha de nacimiento es obligatoria";
    if (!dni.trim()) errors.dni = "El DNI es obligatorio";
    if (!genre) errors.genre = "El género es obligatorio";
    if (!membership) errors.membership = "La membresía es obligatoria";

    if (Object.keys(errors).length > 0) {
      setErrors(errors);
      return;
    }

    setErrors({});

    const newClientData = {
      clientRequest: {
        dniclient: dni,
        typememberships: membership,
        birthdate: userdate,
        phonenumber: userphone,
        firstname: username,
        lastname: userlastname,
        genre: genre,
      },
      userRequest: {
        email: email,
        password: password,
      },
    };

    console.log(newClientData)

    const storeClientData = async (newClientData) => {
      try {
        const response = await fetch("https://localhost:7179/api/Client/StoreClientUserData", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newClientData),
          credentials: "include",
        });

        if (!response.ok) {
          throw new Error("Error al registrar el usuario");
        }
        const data = await response.json();
        console.log("Registro exitoso:", data);
        nextStep();
      } catch (error) {
        console.error("Error en el registro:", error);
        setSubmitError("Error al registrar el usuario. Intente nuevamente.");
      }
    };

    await storeClientData(newClientData);
  };

  return (
    <div>
      <div>
        <main className="mt-6 bg-white mx-auto px-16">
          <h2 className="font-bebas text-4xl text-zinc-700 text-center">
            Ingresa tu Información
          </h2>
          <form className="mt-8 w-full" onSubmit={handleSubmit}>
            <div className="flex gap-3">
              <div className="mb-4 w-full">
                <label className="text-sm m-1">Nombre</label>
                <input
                  onChange={(e) => setUsername(e.target.value)}
                  value={username}
                  placeholder="Ingrese su Nombre"
                  className={`bg-white appearance-none border caret-zinc-400 rounded w-full py-4 px-3 leading-tight focus:outline-none ${errors.username ? "border-red-600" : "border-gray-300"} text-zinc-700`}
                />
                {errors.username && <p className="text-red-600 text-sm">{errors.username}</p>}
              </div>
              <div className="mb-4 w-full">
                <label className="text-sm m-1">Apellido</label>
                <input
                  onChange={(e) => setUsernamelastname(e.target.value)}
                  value={userlastname}
                  placeholder="Ingrese su Apellido"
                  className={`bg-white appearance-none border caret-zinc-400 rounded w-full py-4 px-3 leading-tight focus:outline-none ${errors.userlastname ? "border-red-600" : "border-gray-300"} text-zinc-700`}
                />
                {errors.userlastname && <p className="text-red-600 text-sm">{errors.userlastname}</p>}
              </div>
            </div>

            <div className="mb-4 flex flex-col md:flex-row gap-3">
              <div className="w-full">
                <label className="text-sm m-1">Fecha de Nacimiento</label>
                <input
                  onChange={(e) => setUserDate(e.target.value)}
                  value={userdate}
                  type="date"
                  placeholder="Ingrese su Fecha de nacimiento"
                  className={`bg-white appearance-none border caret-zinc-400 rounded w-full py-4 px-3 leading-tight focus:outline-none ${errors.userdate ? "border-red-600" : "border-gray-300"} text-zinc-700`}
                />
                {errors.userdate && <p className="text-red-600 text-sm">{errors.userdate}</p>}
              </div>
              <div className="w-full">
                <label className="text-sm m-1">Teléfono</label>
                <input
                  onChange={(e) => setUserphone(e.target.value)}
                  value={userphone}
                  type="tel"
                  placeholder="Ingrese su Teléfono"
                  className={`bg-white appearance-none border caret-zinc-400 rounded w-full py-4 px-3 leading-tight focus:outline-none ${errors.userphone ? "border-red-600" : "border-gray-300"} text-zinc-700`}
                />
                {errors.userphone && <p className="text-red-600 text-sm">{errors.userphone}</p>}
              </div>
            </div>

            <div className="flex gap-3">
              <div className="mb-4 w-full">
                <label className="text-sm m-1">Número de Documento</label>
                <input
                  onChange={(e) => setDni(e.target.value)}
                  value={dni}
                  placeholder="Ingrese su DNI"
                  className={`bg-white appearance-none border caret-zinc-400 rounded w-full py-4 px-3 leading-tight focus:outline-none ${errors.dni ? "border-red-600" : "border-gray-300"} text-zinc-700`}
                />
                {errors.dni && <p className="text-red-600 text-sm">{errors.dni}</p>}
              </div>
              <div className="mb-4 w-full">
                <label className="text-sm m-1">Género</label>
                <select
                  onChange={(e) => setGenre(e.target.value)}
                  value={genre}
                  className={`bg-white appearance-none border caret-zinc-400 rounded w-full py-4 px-3 leading-tight focus:outline-none ${errors.genre ? "border-red-600" : "border-gray-300"} text-zinc-700`}
                >
                  <option value="" disabled>
                    Seleccione su Género
                  </option>
                  <option value="masculino">Masculino</option>
                  <option value="femenino">Femenino</option>
                  <option value="otro">Prefiero no contestar</option>
                </select>
                {errors.genre && <p className="text-red-600 text-sm">{errors.genre}</p>}
              </div>
            </div>

            <div className="flex mb-4 gap-3">
              <div className=" w-full">
                <label className="text-sm m-1">Correo Electrónico</label>
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  type="email"
                  placeholder="Ingrese su Correo Electrónico"
                  className={`bg-white appearance-none border caret-zinc-400 rounded w-full py-4 px-3 leading-tight focus:outline-none ${errors.email ? "border-red-600" : "border-gray-300"} text-zinc-700`}
                />
                {errors.email && <p className="text-red-600 text-sm">{errors.email}</p>}
              </div>
              <div className="w-full">
                <label className="text-sm m-1">Membresia</label>
                <select
                  onChange={(e) => setMembership(e.target.value)}
                  value={membership}
                  className={`bg-white appearance-none border caret-zinc-400 rounded w-full py-4 px-3 leading-tight focus:outline-none ${errors.genre ? "border-red-600" : "border-gray-300"} text-zinc-700`}
                >
                  <option value="" disabled>
                    Seleccione su Membresia
                  </option>
                  <option value="premium">Premium</option>
                  <option value="standar">Standar</option>
                </select>
                {errors.membership && <p className="text-red-600 text-sm">{errors.membership}</p>}
              </div>
            </div>

            <div className="mb-4 flex flex-col md:flex-row gap-3">
              {/* Contraseña */}
              <div className="mb-4 w-full">
                <label className="text-sm m-1">Contraseña</label>
                <div className="flex items-center">
                  <input
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                    type={showPass ? "text" : "password"}
                    placeholder="Ingrese su Contraseña"
                    className={`bg-white appearance-none border caret-zinc-400 rounded-l w-full py-4 px-3 leading-tight focus:outline-none ${errors.password ? "border-red-600" : "border-gray-300"} text-zinc-700`}
                  />
                  <button
                    type="button"
                    className="flex items-center justify-center text-zinc-400 bg-white h-14 w-14 rounded-r cursor-pointer border-y border-r border-gray-300"
                    onClick={() => setShowPass(!showPass)}
                  >
                    <i className={`bi ${showPass ? 'bi-eye-slash' : 'bi-eye'}`} />
                  </button>
                </div>
                {errors.password && <p className="text-red-600 text-sm">{errors.password}</p>}
              </div>

              {/* Repetir Contraseña */}
              <div className="mb-4 w-full">
                <label className="text-sm m-1">Repetir Contraseña</label>
                <div className="flex items-center">
                  <input
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    value={confirmPassword}
                    type={confirmPasswordShow ? "text" : "password"}
                    placeholder="Repita su Contraseña"
                    className={`bg-white appearance-none border caret-zinc-400 rounded-l w-full py-4 px-3 leading-tight focus:outline-none ${errors.confirmPassword ? "border-red-600" : "border-gray-300"} text-zinc-700`}
                  />
                  <button
                    type="button"
                    className="flex items-center justify-center text-zinc-400 bg-white h-14 w-14 rounded-r cursor-pointer border-y border-r border-gray-300"
                    onClick={() => setConfirmPasswordShow(!confirmPasswordShow)}
                  >
                    <i className={`bi ${confirmPasswordShow ? 'bi-eye-slash' : 'bi-eye'}`} />
                  </button>
                </div>
                {errors.confirmPassword && <p className="text-red-600 text-sm">{errors.confirmPassword}</p>}
              </div>
            </div>



            <div className="flex items-center">
              <button type="submit" className="bg-yellow-400 rounded-full w-full text-white px-6 py-3 transition-all duration-200 hover:bg-yellow-500 hover:font-bold">
                Siguiente
              </button>
            </div>
          </form>
        </main>
      </div>
    </div>
  );
};

export default RegisterPage;
