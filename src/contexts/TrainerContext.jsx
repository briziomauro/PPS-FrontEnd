import { createContext, useContext, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { useUser } from "./UserContext";
import queryClient from "../services/persistQueryClient"; // Asegurarse de importar correctamente queryClient

const TrainerContext = createContext();

export const useTrainer = () => useContext(TrainerContext);

const fetchTrainerDetails = async () => {
  const response = await fetch(
    "https://localhost:7179/api/Trainer/GetMyDetails",
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    }
  );

  if (!response.ok) {
    throw new Error("Error al obtener los detalles del entrenador");
  }

  return response.json();
};

export const getAllTrainers = async () => {
  const response = await fetch(
    "https://localhost:7179/api/Trainer/GetAllTrainers",
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    }
  );

  if (!response.ok) {
    throw new Error("Error al obtener los trainers");
  }

  return response.json();
};
export const TrainerProvider = ({ children }) => {
  const { isAuthenticated, userTypeResponse } = useUser(); // Usamos el contexto de usuario

  const {
    data: trainerDetails,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["trainerDetails"],
    queryFn: fetchTrainerDetails,
    enabled: isAuthenticated && userTypeResponse === "Trainer", // Dependemos del contexto en lugar de localStorage
    onSuccess: () => {
      console.log("Detalles del entrenador obtenidos exitosamente");
    },
    onError: (error) => {
      console.error("Error al obtener los detalles del entrenador:", error);
    },
  });

  return (
    <TrainerContext.Provider
      value={{ trainerDetails, error, isLoading, getAllTrainers }}
    >
      {children}
    </TrainerContext.Provider>
  );
};
