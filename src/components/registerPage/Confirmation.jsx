import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Confirmation = ({ lastStep }) => {
  const [clientStoredData, setClientStoredData] = useState(null);
  const [clientDni, setClientDni] = useState("");
  const [error, setError] = useState(null);
  const [loadingRegister, setLoadingRegister] = useState(false);
  const [countdown, setCountdown] = useState(5); // Contador de 5 segundos

  const navigate = useNavigate();

  // Obtener datos del cliente almacenado
  useEffect(() => {
    const getStoredClient = async () => {
      try {
        const response = await fetch(
          "https://localhost:7179/api/Client/GetStoredClientUserData",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
            credentials: "include",
          }
        );

        if (!response.ok) {
          throw new Error("Error al obtener los detalles del cliente");
        }

        const data = await response.json();
        setClientStoredData(data);
        setClientDni(data.clientRequest.dniclient);
      } catch (error) {
        setError(error.message);
      }
    };

    getStoredClient();
  }, []);

  // Temporizador para ejecutar la creación del cliente después de 5 segundos
  useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
      return () => clearTimeout(timer);
    } else {
      handleRegister();
    }
  }, [countdown]);

  const handleRegister = async () => {
    setLoadingRegister(true);
    try {
      const response = await fetch(
        "https://localhost:7179/api/Client/AddClient",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(clientDni),
        }
      );

      if (!response.ok) {
        throw new Error("Error al registrar");
      }
      navigate("/login");
    } catch (error) {
      setError(error.message);
    } finally {
      setLoadingRegister(false);
    }
  };

  if (error) {
    return <div className="text-red-500">Error: {error}</div>;
  }

  return (
    <div className="flex flex-col justify-center text-black w-full">
      <h2 className="font-bebas mt-11 text-5xl text-zinc-700 text-center ">
        CONFIRMACIÓN
      </h2>
      <div className="flex flex-col text-center  text-zinc-700 mt-5">
        <div>
          <p className="text-2xl">
            Membresia:{" "}
            <span className="uppercase">
              {clientStoredData
                ? clientStoredData.clientRequest.typememberships
                : "Cargando..."}
            </span>
          </p>
        </div>
        <div className="mt-3">
          <div>
            <p className="text-2xl">
              ¡Bienvenido!{" "}
              {clientStoredData
                ? clientStoredData.clientRequest.firstname
                : "Cargando..."}{" "}
              {clientStoredData
                ? clientStoredData.clientRequest.lastname
                : "Cargando..."}
            </p>
          </div>
        </div>

        {/* Mostrar el contador */}
        <div className="mt-5 text-center text-xl">
          {loadingRegister ? (
            <p className="text-yellow-500">Registrando...</p>
          ) : (
            <p>
              Te redirigiremos en {countdown} segundos
              {countdown > 0 && (
                <svg
                  className="animate-spin ml-2 h-8 w-8 text-yellow-500 inline-block"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                  ></path>
                </svg>
              )}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Confirmation;
