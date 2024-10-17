import React, { useState } from "react";
import { useClient } from "../../contexts/ClientContext";
import { useQueryClient } from "@tanstack/react-query";
import { div } from "framer-motion/client";

const SettingsPageClient = () => {
  const [fullName, setFullName] = useState("MIGUE");
  const [email, setEmail] = useState("MIGUELITO@gmail.com");
  const [documentId, setDocumentId] = useState("");
  const [gender, setGender] = useState("Masculino");
  const [isEditing, setIsEditing] = useState(false);
  const [showPassMenu, setShowPassMenu] = useState(false)

  const { clientDetails } = useClient();
  const queryClient = useQueryClient();

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    console.log({ fullName, email, documentId, gender, birthDate, weight });
    setIsEditing(false);
  };

  const handleDiscard = () => {
    setIsEditing(false);
  };

  return (
    <div className="bg-black pb-32">
      <header className="bg-zinc-700 pl-20 py-4 font-bebas tracking-wider ">
        <h1 className="text-white text-4xl">
          Bienvenido{" "}
          <strong className="text-yellow-400">
            {clientDetails.clientDto.firstName} {clientDetails.clientDto.lastName}
          </strong>
          {" "}- MI PERFIL
        </h1>
      </header>

      <div className="flex justify-center items-center mt-4 w-full">
        <div className="w-full">
          <div className="flex items-center my-10 mx-20">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROx-J1Qn1fr2r1gxcUToksn65vtGQt5QNNnw&s"
              alt="Profile"
              className="w-24 h-24 rounded-full border-2 border-gray-300 mr-4"
            />
            <div>
              <h2 className="text-xl font-semibold text-white">{clientDetails.clientDto.firstName} {clientDetails.clientDto.lastName}</h2>
              <p className="text-white mt-1">{clientDetails.userDto.type}</p>
            </div>
            {!isEditing ? (
              <button
                className="ml-auto bg-yellow-500 text-white px-4 py-2 rounded transition-all duration-300 hover:bg-yellow-600 font-bebas text-xl"
                onClick={handleEdit}
              >
                EDITAR
              </button>
            ) : (
              <div className="ml-auto flex space-x-2 uppercase">
                <button
                  className="bg-yellow-500 text-white px-4 py-2 rounded transition-all duration-300  hover:bg-yellow-600 font-bebas text-xl"
                  onClick={handleSave}
                >
                  Guardar Cambios
                </button>
                <button
                  className="bg-zinc-600 text-white px-4 py-2 rounded transition-all duration-300  hover:bg-zinc-500 font-bebas text-xl"
                  onClick={handleDiscard}
                >
                  Descartar
                </button>
              </div>
            )}
          </div>
          <div className="flex bg-yellow-400 h-[1px] mx-10 my-10" />

          <div className="flex mx-10 gap-4">

            <div className="flex flex-1 flex-col gap-5">
              <div className="flex gap-5">
                <div className="flex-1">
                  <label className="block text-sm font-medium text-white">
                    Nombre
                  </label>
                  <input
                    type="text"
                    value={clientDetails.clientDto.firstName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="Ingrese su nombre completo"
                    className="mt-1 block w-full  rounded-md p-2 bg-zinc-800 text-white placeholder-zinc-500"
                    disabled={!isEditing}
                  />
                </div>
                <div className="flex-1">
                  <label className="block text-sm font-medium text-white">
                    Apellido
                  </label>
                  <input
                    type="text"
                    value={clientDetails.clientDto.lastName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="Ingrese su nombre completo"
                    className="mt-1 block w-full rounded-md p-2 bg-zinc-800 text-white placeholder-zinc-500"
                    disabled={!isEditing}
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-white">
                  Correo electrónico
                </label>
                <input
                  type="email"
                  value={clientDetails.userDto.email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Ingrese su correo electrónico"
                  className="mt-1 block w-full rounded-md p-2 bg-zinc-800 text-white placeholder-zinc-500"
                  disabled={!isEditing}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-white">
                  Género
                </label>
                <select
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                  className="mt-1 block w-full rounded-md p-2 bg-zinc-800 text-white placeholder-zinc-500"
                  disabled={!isEditing}
                >
                  <option value="Género" disabled>
                    Género
                  </option>
                  <option value="Masculino">Masculino</option>
                  <option value="Femenino">Femenino</option>
                </select>
              </div>

              <div className="flex flex-col">
                <div className="flex flex-col  justify-center items-center p-2 cursor-pointer text-white hover:text-yellow-500 transition-all duration-200" onClick={() => { setShowPassMenu(!showPassMenu) }}>
                  <p className="font-bebas text-2xl">Cambiar Contraseña</p>
                  <div className="h-[1px] w-32 bg-white mx-5" />
                </div>

                {showPassMenu &&
                  <>
                    <div className="flex gap-5 mt-5">
                      <div className="flex-1">
                        <label className="block text-sm font-medium text-white">
                          Nueva Contraseña
                        </label>
                        <input
                          type="text"
                          value=""
                          placeholder="Ingrese su nueva contraseña"
                          className="mt-1 block w-full rounded-md p-2 bg-zinc-800 text-white placeholder-zinc-500 placeholder-text-sm"
                        />
                      </div>
                      <div className="flex-1">
                        <label className="block text-sm font-medium text-white">
                          Confirme su nueva contraseña
                        </label>
                        <input
                          type="text"
                          value=""
                          placeholder="Confirme su nueva contraseña"
                          className="mt-1 block w-full rounded-md p-2 bg-zinc-800 text-white placeholder-zinc-500"
                        />
                      </div>
                    </div>
                    <div className="flex my-5 justify-center items-center text-xl ">
                      <button className="bg-yellow-500 hover:bg-yellow-400 font-bebas text-white px-7 py-3 rounded-xl transition-all duration-200">CONFIRMAR </button>
                    </div>
                  </>
                }

              </div>
            </div>

            <div className="flex flex-col mx-40 mt-5">
              <div className="flex w-full justify-center">
                <div className="flex flex-col text-center justify-center items-center cursor-pointer hover:scale-105 bg-gradient-to-br from-yellow-500 via-yellow-400 to-yellow-500 rounded-xl text-white font-bebas w-80 h-52 transition-all duration-200 ">
                  <p className="uppercase text-4xl">Cambia tu Membresía</p>
                  <div className="h-[1px] bg-white flex w-2/3 justify-center mt-2" />
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};

export default SettingsPageClient;
