import React, { useState } from "react";
import { useClient } from "../../contexts/ClientContext";
import { useQueryClient } from "@tanstack/react-query";

const SetttingsPageTrainer = () => {
    const [fullName, setFullName] = useState("MIGUE");
    const [email, setEmail] = useState("MIGUELITO@gmail.com");
    const [documentId, setDocumentId] = useState("");
    const [gender, setGender] = useState("Masculino");
    const [birthDate, setBirthDate] = useState("");
    const [weight, setWeight] = useState("Peso");
    const [isEditing, setIsEditing] = useState(false);

    const { clientDetails } = useClient();
    const queryClient = useQueryClient(); // Obtén el queryClient para usarlo en logout

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
        <div>
            <header className="bg-zinc-700 pl-20 py-4 font-bebas tracking-wider ">
                <h1 className="text-white text-4xl">
                    Bienvenido{" "}
                    <strong className="text-yellow-400">
                        {clientDetails.clientDto.firstName} {clientDetails.clientDto.lastName}
                    </strong>
                </h1>
            </header>
            <div className="flex justify-center items-center mt-4">
                <div className="bg-zinc-800 rounded-lg shadow-md p-5 mt-36 w-full max-w-[1500px]">
                    <div className="flex items-center mb-4">
                        <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROx-J1Qn1fr2r1gxcUToksn65vtGQt5QNNnw&s"
                            alt="Profile"
                            className="w-24 h-24 rounded-full border-2 border-gray-300 mr-4"
                        />
                        <div>
                            <h2 className="text-xl font-semibold text-white">{fullName}</h2>
                            <p className="text-white">{email}</p>
                        </div>
                        {!isEditing ? (
                            <button
                                className="ml-auto bg-yellow-500 text-white px-4 py-2 rounded transition-all duration-300 hover:bg-zinc-500"
                                onClick={handleEdit}
                            >
                                Editar
                            </button>
                        ) : (
                            <div className="ml-auto flex space-x-2">
                                <button
                                    className="bg-yellow-500 text-white px-4 py-2 rounded transition-all duration-300  hover:bg-zinc-500"
                                    onClick={handleSave}
                                >
                                    Guardar Cambios
                                </button>
                                <button
                                    className="bg-yellow-500 text-white px-4 py-2 rounded transition-all duration-300  hover:bg-zinc-500"
                                    onClick={handleDiscard}
                                >
                                    Descartar
                                </button>
                            </div>
                        )}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 mb-3 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-white">
                                Nombre Completo
                            </label>
                            <input
                                type="text"
                                value={fullName}
                                onChange={(e) => setFullName(e.target.value)}
                                placeholder="Ingrese su nombre completo"
                                className="mt-1 block w-full border border-gray-300 rounded-md p-2 bg-white text-black"
                                disabled={!isEditing}
                            />
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
                                className="mt-1 block w-full border border-gray-300 rounded-md p-2 bg-white text-black"
                                disabled={!isEditing}
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-white">
                                Documento de identidad
                            </label>
                            <input
                                type="text"
                                value={documentId}
                                onChange={(e) => setDocumentId(e.target.value)}
                                placeholder="Ingrese su DNI"
                                className="mt-1 block w-full border border-gray-300 rounded-md p-2 bg-white text-black"
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
                                className="mt-1 block w-full border border-gray-300 rounded-md p-2 bg-white text-black"
                                disabled={!isEditing}
                            >
                                <option value="Género" disabled>
                                    Género
                                </option>
                                <option value="Masculino">Masculino</option>
                                <option value="Femenino">Femenino</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-white">
                                Fecha de nacimiento
                            </label>
                            <input
                                type="date"
                                value={birthDate}
                                onChange={(e) => setBirthDate(e.target.value)}
                                className="mt-1 block w-full border border-gray-300 rounded-md p-2 bg-white text-black"
                                disabled={!isEditing}
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-white">
                                Peso
                            </label>
                            <select
                                value={weight}
                                onChange={(e) => setWeight(e.target.value)}
                                className="mt-1 block w-full border border-gray-300 rounded-md p-2 bg-white text-black" // Estilo para mantener fondo blanco
                                disabled={!isEditing} // Deshabilitar si no está en modo edición
                            >
                                <option value="Peso" disabled>
                                    Selecciona tu peso
                                </option>
                                {/* Opciones personalizadas */}
                                <option value="40kg">40kg</option>
                                <option value="50kg">50kg</option>
                                <option value="60kg">60kg</option>
                                <option value="70kg">70kg</option>
                                <option value="80kg">80kg</option>
                                <option value="90kg">90kg</option>
                                {/* Agrega más opciones según sea necesario */}
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SetttingsPageTrainer