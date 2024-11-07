import React, { useState, useEffect } from "react";
import { useClient } from "../../contexts/ClientContext";
import { useQueryClient } from "@tanstack/react-query";

const SettingsPageClient = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [showPassMenu, setShowPassMenu] = useState(false);
  const [showMembershipModal, setShowMembershipModal] = useState(false);
  const [selectedMembership, setSelectedMembership] = useState(null);
  const [showAlertModal, setShowAlertModal] = useState(false);
  const { clientDetails } = useClient();
  const queryClient = useQueryClient();

  const currentMembership = clientDetails?.clientDto?.typeMembership;

  useEffect(() => {
    if (clientDetails && clientDetails.clientDto && clientDetails.userDto) {
      setFirstName(clientDetails.clientDto.firstName);
      setLastName(clientDetails.clientDto.lastName);
      setEmail(clientDetails.userDto.email);
      setGender(clientDetails.clientDto.genre);
    } else {
      console.log("Esperando detalles del cliente...");
    }
  }, [clientDetails]);

  const memberships = [
    {
      name: "Standar",
      description: "La opción ideal para quienes recién comienzan.",
      availability: `
        - Acceso limitado a servicios generales.
        - Soporte técnico vía email.
        - 1 usuario registrado.
        - 5% de descuento en compras seleccionadas.
      `,
      price: "$20.000 ARS/MES",
    },
    {
      name: "Premium",
      description: "Ideal para quienes buscan lo mejor.",
      availability: `
      - Acceso completo a todos los servicios.
      - Soporte técnico 24/7 vía email
      - 3 usuarios registrados.
      - 15% de descuento en todas las compras.
      - Planes nutricionales y Rutinas personalizadas`,
      price: "$32.000 ARS/MES",
    },
  ];

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = async () => {
    try {

      clientid = clientDetails.usertDto.id
      const updatedData = {
        ClientId: clientid,
        Email: email,
        Firstname: firstName,
        Lastname: lastName,
        Genre: gender,
      };
  
      console.log("Datos enviados:", updatedData);
  
      const response = await fetch("https://localhost:7179/api/Client/UpdateClient", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          
        },
        body: JSON.stringify(updatedData),
      });
  
      const textResponse = await response.text();
  
      if (!response.ok) {
        console.error("Error de API:", textResponse);
        alert(`Error al guardar los cambios: ${textResponse}`);
        throw new Error(textResponse);
      }
  
      console.log("Respuesta de la API:", textResponse);
  
      const updatedClientDetails = { ...clientDetails };
      updatedClientDetails.clientDto.firstName = firstName;
      updatedClientDetails.clientDto.lastName = lastName;
      updatedClientDetails.userDto.email = email;
      updatedClientDetails.clientDto.genre = gender;
  
      // Actualiza en React Query
      queryClient.setQueryData("clientDetails", updatedClientDetails);
  
      alert("Cambios guardados exitosamente");
      setIsEditing(false);
    } catch (error) {
      console.error("Error al guardar los cambios:", error);
      alert("Error al guardar los cambios: " + error.message);
    }
  };

  const handleDiscard = () => {
    setIsEditing(false);
  };

  const handleMembershipChange = async () => {
    if (selectedMembership.toLowerCase() === currentMembership.toLowerCase()) {
      setShowAlertModal(true);
      return;
    }

    try {
      const response = await fetch(
        "https://localhost:7179/api/Payments/update-preference",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            Type: selectedMembership,
            BackUrls: {
              Success: "https://localhost:7179/success",
              Failure: "https://localhost:7179/failure",
              Pending: "https://localhost:7179/pending",
            },
          }),
        }
      );

      const data = await response.json();
      if (response.ok && data.init_point) {
        window.location.href = data.init_point;
      } else {
        console.error(
          "Error al actualizar la membresía:",
          data.message || "Error desconocido"
        );
      }
    } catch (error) {
      console.error("Error en la solicitud:", error);
    }
  };

  return (
    <div className="bg-black pb-32">
      <header className="bg-zinc-700 pl-20 py-4 font-bebas tracking-wider ">
        <h1 className="text-white text-4xl">
          Bienvenido{" "}
          <strong className="text-yellow-400">
            {clientDetails?.clientDto?.firstName}{" "}
            {clientDetails?.clientDto?.lastName}
          </strong>{" "}
          - MI PERFIL
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
              <h2 className="text-xl font-semibold text-white">
                {clientDetails?.clientDto?.firstName}{" "}
                {clientDetails?.clientDto?.lastName}
              </h2>
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
                  className="bg-yellow-500 text-white px-4 py-2 rounded transition-all duration-300 hover:bg-yellow-600 font-bebas text-xl"
                  onClick={handleSave}
                >
                  Guardar Cambios
                </button>
                <button
                  className="bg-zinc-600 text-white px-4 py-2 rounded transition-all duration-300 hover:bg-zinc-500 font-bebas text-xl"
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
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    placeholder="Ingrese su nombre completo"
                    className="mt-1 block w-full rounded-md p-2 bg-zinc-800 text-white placeholder-zinc-500"
                    disabled={!isEditing}
                  />
                </div>
                <div className="flex-1">
                  <label className="block text-sm font-medium text-white">
                    Apellido
                  </label>
                  <input
                    type="text"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    placeholder="Ingrese su apellido"
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
                  value={email}
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
                  <option value={clientDetails?.clientDto?.genre} disabled>
                    Género
                  </option>
                  <option value="Masculino">Masculino</option>
                  <option value="Femenino">Femenino</option>
                </select>
              </div>

              <div className="flex flex-col">
                <div
                  className="flex flex-col  justify-center items-center p-2 cursor-pointer text-white hover:text-yellow-500 transition-all duration-200"
                  onClick={() => {
                    setShowPassMenu(!showPassMenu);
                  }}
                >
                  <p className="font-bebas text-2xl">Cambiar Contraseña</p>
                  <div className="h-[1px] w-32 bg-white mx-5" />
                </div>

                {showPassMenu && (
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
                      <button className="bg-yellow-500 hover:bg-yellow-400 font-bebas text-white px-7 py-3 rounded-xl transition-all duration-200">
                        CONFIRMAR{" "}
                      </button>
                    </div>
                  </>
                )}
              </div>
            </div>

            <div className="flex flex-col mx-40 mt-5">
              <div className="flex w-full justify-center">
                <div
                  className="flex flex-col text-center justify-center items-center cursor-pointer hover:scale-105 bg-gradient-to-br from-yellow-500 via-yellow-400 to-yellow-500 rounded-xl text-white font-bebas w-80 h-52 transition-all duration-200"
                  onClick={() => setShowMembershipModal(true)}
                >
                  <button className="uppercase text-4xl">
                    Cambia tu Membresía
                  </button>
                  <div className="h-[1px] bg-white flex w-2/3 justify-center mt-2" />
                </div>
              </div>
            </div>

            {showMembershipModal && (
              <div className="fixed inset-0 bg-black bg-opacity-50 flex  justify-center items-center">
                <div className="bg-white p-5 rounded-md max-w-5xl w-full">
                  <h2 className="text-2xl text-black font-bold justify-center flex  mb-4">
                    Selecciona una Membresía
                  </h2>
                  <p className="mb-4 text-black">
                    Membresía actual: <strong>{currentMembership}</strong>
                  </p>

                  <div className="grid grid-cols-2 gap-4">
                    {memberships.map((membership) => (
                      <div
                        key={membership.name}
                        onClick={() => setSelectedMembership(membership.name)}
                        className={`p-6 border-2 rounded-xl cursor-pointer shadow-lg transition-transform transform ${
                          selectedMembership === membership.name
                            ? "border-yellow-500 bg-yellow-100 scale-95"
                            : "border-gray-300 bg-white hover:scale-105"
                        } flex flex-col justify-between h-full`}
                      >
                        <div>
                          <h3 className="text-3xl font-bold text-yellow-500 mb-2">
                            {membership.name}
                          </h3>
                          <p className="text-black font-bold italic mb-4">
                            {membership.description}
                          </p>
                          <p className="text-base text-black whitespace-pre-line">
                            {membership.availability}
                          </p>
                        </div>
                        <p className="text-2xl font-semibold text-black mt-auto">
                          {membership.price}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className="flex justify-end mt-4">
                    <button
                      className="bg-gray-500 text-white px-4 py-2 rounded mr-2"
                      onClick={() => setShowMembershipModal(false)}
                    >
                      Cancelar
                    </button>
                    <button
                      className="bg-yellow-500 text-white px-4 py-2 rounded"
                      onClick={handleMembershipChange}
                    >
                      Confirmar
                    </button>
                  </div>
                </div>
              </div>
            )}

            {showAlertModal && (
              <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
                <div className="bg-white p-5 rounded-md  max-w-[520px] w-full">
                  <h2 className="text-xl font-bold text-black mb-4">
                    Atención
                  </h2>
                  <p className="mb-4 text-black">
                    Ya tienes esta membresía. No puedes cambiar a la misma.
                  </p>
                  <div className="flex justify-end mt-4">
                    <button
                      className="bg-yellow-500 text-white px-4 py-2 rounded"
                      onClick={() => setShowAlertModal(false)}
                    >
                      Cerrar
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsPageClient;
