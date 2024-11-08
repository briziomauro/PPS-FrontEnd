import React, { useEffect, useState } from 'react';
import './ProfessorPage.css';
import { Link } from 'react-router-dom';
import CalendarProf from '../calendarProf/CalendarProf';
import { FaArrowRight } from 'react-icons/fa';
import { useTrainer } from '../../contexts/TrainerContext';
import { useQueryClient } from '@tanstack/react-query';

const ProfessorPage = () => {
  const { trainerDetails, isLoading, error } = useTrainer();
  const [qNutritionalPlans, setQNutritionalPlans] = useState([]);
  const [nextShift, setNextShift] = useState(null);
  const queryClient = useQueryClient();
  const [date, setDate] = useState(new Date());
  const [routines, setRoutines] = useState([]);
  const onChangeDate = (newDate) => {
    setDate(newDate);
  };

  useEffect(() => {
    if (!isLoading && !error) {
      getNutritionalPlan();
      getNextShift();
      getRoutine();
    }
  }, [isLoading, error]);

  const getRoutine = async () => {
    try {
     
      const response = await fetch(
        "https://localhost:7179/api/Routine/GetMyRoutines",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "Cache-Control": "no-cache",
          },
          credentials: "include",
        }
      );

      if (!response.ok) {
        throw new Error("Error al obtener la rutina");
      }

      const data = await response.json();
      const filteredData = data.filter((r) => r.status === "In Progress");
      setRoutines(filteredData);
    } catch (error) {
      console.log(error);
    } 
  };

  const getNutritionalPlan = async () => {
    try {
      const response = await fetch(
        "https://localhost:7179/api/NutritionalPlan/GetMyPlans",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "Cache-Control": "no-cache",
          },
          credentials: "include",
        }
      );

      if (!response.ok) {
        throw new Error("Error al obtener el plan nutricional");
      }

      const data = await response.json();
      const filteredData = data.filter((n) => n.status === "In Progress");
      setQNutritionalPlans(filteredData);
    } catch (error) {
      console.log(error);
    }
  };

  const getNextShift = async () => {
    try {
      const response = await fetch(
        "https://localhost:7179/api/Shift/GetNextTrainerShift",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
        }
      );

      if (!response.ok) {
        throw new Error("Error al obtener el próximo turno");
      }

      const data = await response.json();
      setNextShift(data);
    } catch (error) {
      setNextShift({});
    }
  };

  if (isLoading) {
    return <div>Cargando...</div>;
  }

  if (error) {
    return <div>Error al cargar los detalles del entrenador: {error.message}</div>;
  }

  return (
    <div>
      <header className="bg-zinc-700 pl-20 py-4 font-bebas tracking-wider ">
        <h1 className="text-white text-4xl">
          Bienvenido <strong className="text-yellow-400"> {trainerDetails.trainerDto.firstName} {trainerDetails.trainerDto.lastName}</strong>
        </h1>
      </header>
      <div className='flex text-black justify-evenly items-center'>
        <div className='flex flex-col flex-1 justify-center items-center text-white h-full'>
          <h2 className='font-bebas text-5xl text-black mb-10'>ASIGNACIONES PENDIENTES:</h2>
          <div className='flex flex-col gap-5 font-bebas w-full justify-center'>
            <div className='flex justify-center'>
              <article className="w-3/4">
                <div className="bg-amber-400 flex items-center justify-between p-2">
                  <h2 className="text-3xl  font-bebas text-white">RUTINAS</h2>
                </div>
                <ul>
                  <li>
                    <Link
                      className="bg-zinc-800 flex justify-center items-center gap-3 text-white p-10 text-xl rounded-b-3xl text-center hover:bg-zinc-900 transition-all duration-200"
                      to="/profesor/assing-routine"
                    >
                      {routines.length} Rutinas pendientes de Asignación<FaArrowRight className="animate-bounce" />
                    </Link>
                  </li>
                </ul>
              </article>
            </div>
            <div className='flex justify-center'>
              <article className="w-3/4">
                <div className="bg-amber-400 flex items-center justify-between p-2">
                  <h2 className="text-3xl  font-bebas text-white">PLANES NUTRICIONALES</h2>
                </div>
                <ul>
                  <li>
                    <Link
                      className="bg-zinc-800 flex justify-center items-center gap-3 text-white p-10 text-xl rounded-b-3xl text-center hover:bg-zinc-900 transition-all duration-200"
                      to="/profesor/assing-nutritional-plan"
                    >
                      {qNutritionalPlans.length} Planes pendientes de Asignación<FaArrowRight className="animate-bounce" />
                    </Link>
                  </li>
                </ul>
              </article>
            </div>
          </div>

          <div className='flex flex-col font-bebas text-xl bg-gradient-to-br from-black via-zinc-800 to-black text-white w-3/4 p-3 mt-10'>
            <p className='border-b'>Proximo Turno:</p>
            <div className='flex mt-1'>
              <p className='flex-1'>Dia: <span className='text-yellow-400 text-2xl'>{nextShift?.dateday || 'Cargando...'}</span></p>
              <div className="divider divider-horizontal bg-white w-[1px]"></div>
              <p className='flex-1'>Hora: <span className='text-yellow-400 text-2xl'>{nextShift?.hour || 'Cargando...'}</span></p>
            </div>
          </div>
        </div>

        <div className='flex flex-col flex-1 justify-center items-center my-10'>
          <div className='bg-white w-[600px] h-full text-black uppercase font-bebas text-xl mb-4 shadow-lg'>
            <CalendarProf />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfessorPage;
