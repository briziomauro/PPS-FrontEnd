import React, { useEffect, useState } from 'react';
import {  toast } from 'react-toastify';

const AssignExerciseToRoutine = ({ routineId, name, days, handleSendRoutineObj}) => {
    const [groupedExercises, setGroupedExercises] = useState({});
    const [selectedDay, setSelectedDay] = useState('');
    const [loading, setLoading] = useState(true);
    const [selectedWeekday, setSelectedWeekday] = useState('');
    const [totalExerciseToSend, setTotalExerciseToSend] = useState([]);
    const [errors, setErrors] = useState(false);
    useEffect(() => {
        getExercises();
    }, []);

    // Sincronizar totalExerciseToSend y exerciseToSend cuando se cambia el día seleccionado.


    const handleSetExercise = (exercise) => {

        setTotalExerciseToSend(prevState => ({
            ...prevState,
            [selectedDay]: [
                ...(prevState[selectedDay] || []),  // Si no existe, inicializa como un array vacío
                {
                    idexercise: exercise.idexercise,
                    series: "",
                    breaktime: "00:00:00",
                    day: "",
                }
            ]
        }));
    };


    const handleRemoveExercise = (idexercise) => {
        setTotalExerciseToSend(prevState => ({
            ...prevState,
            [selectedDay]: (prevState[selectedDay] || []).filter(exercise => exercise.idexercise !== idexercise)
        }));

    };


    const handleSeriesChange = (idexercise, value) => {
        const seriesFormatRegex = /^\d{1,2}x\d{1,2}$/;
        // Verificar si el valor coincide con el formato
        setTotalExerciseToSend(prevState => ({
            ...prevState,
            [selectedDay]: (prevState[selectedDay] || []).map(exercise =>
                exercise.idexercise === idexercise
                    ? { ...exercise, series: value, day: selectedWeekday }
                    : exercise
            )
        }));
        if (seriesFormatRegex.test(value)) {
            setErrors(false)
        } else {
            setErrors(true)
            
            // Opcional: mostrar un mensaje de error si el formato es incorrecto
        }
    };

    const handleBreakTimeChange = (idexercise, value) => {

        setTotalExerciseToSend(prevState => ({
            ...prevState,
            [selectedDay]: (prevState[selectedDay] || []).map(exercise =>
                exercise.idexercise === idexercise
                    ? { ...exercise, breaktime: value, day: selectedWeekday }
                    : exercise
            )
        }));
    };

    const handleDayChange = (value) => {
        setSelectedWeekday(value);

        setTotalExerciseToSend(prevState => ({
            ...prevState,
            [selectedDay]: (prevState[selectedDay] || []).map(exercise => ({
                ...exercise,
                day: value
            }))
        }));

    };


    const handleDaySelectedChange = (value) => {
        setSelectedDay(value);

        const exercisesForDay = totalExerciseToSend[value] || [];

        // Verifica si existe al menos un ejercicio con un `day` asignado
        const firstDayValue = exercisesForDay.find(exercise => exercise.day)?.day;

        // Si hay un valor en `day`, establecerlo en selectedWeekday; si no, establecer en "Seleccione"
        if (firstDayValue) {
            setSelectedWeekday(firstDayValue);
        } else {
            setSelectedWeekday("Seleccione");
        }
    };


    

    const getExercises = async () => {
        try {
            setLoading(true);
            const response = await fetch("https://localhost:7179/api/Exercise", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
                credentials: "include",
            });

            if (!response.ok) throw new Error("Error al obtener ejercicios");

            const data = await response.json();
            if (data) {
                groupExercisesByMuscle(data);
            } else {
                console.error("La respuesta no contiene ejercicios válidos");
            }
        } catch (error) {
            console.error("Error:", error);
        } finally {
            setLoading(false);
        }
    };


     

      const handleSubmit = () => {

        // if (Object.keys(totalExerciseToSend).length !== days.length) {
        //     toast.error("Error: La cantidad de días no coincide con los ejercicios asignados.");
        //     return; // Salir de la función si no coincide la cantidad de días
        //   }
        //   for (const day in totalExerciseToSend) {
        //     const exercises = totalExerciseToSend[day];
            
        //     for (const exercise of exercises) {
        //       if (!exercise.idexercise || !exercise.series || !exercise.breaktime || !exercise.day) {
        //         toast.error("Error: Todos los campos deben estar completos.");
        //         return; // Salir de la función si hay un campo vacío
        //       }
        //     }
        //   }
        
        handleSendRoutineObj(totalExerciseToSend)
        setTotalExerciseToSend({}); // Esto vacía el objeto de los ejercicios asignados
        document.getElementById(`assign_exercise_${routineId}`).close();

      }



    const groupExercisesByMuscle = (exercises) => {
        const grouped = exercises.reduce((acc, exercise) => {
            if (!acc[exercise.musclegroup]) {
                acc[exercise.musclegroup] = [];
            }
            acc[exercise.musclegroup].push(exercise);
            return acc;
        }, {});
        setGroupedExercises(grouped);
    };

    const getIconForMuscleGroup = (musclegroup) => {
        switch (musclegroup) {
            case "Pecho":
                return <img src="/png/chest.png" className="h-36 w-36 p-2" alt="imagen de pecho" />;
            case "Espalda":
                return <img src="/png/back2.png" className="h-36 w-36" alt="imagen de espalda" />;
            case "Piernas":
                return <img src="/png/backleg.png" className="h-36 w-36 p-4" alt="imagen de piernas" />;
            case "Hombros":
                return <img src="/png/shoulder.png" className="h-36 w-36 p-6" alt="imagen de hombros" />;
            case "Abdominales":
                return <img src="/png/abd.png" className="h-36 w-36 p-4" alt="imagen de abdominales" />;
            case "Bíceps":
                return <img src="/png/biceps.png" className="h-36 w-36 p-6" alt="imagen de bíceps" />;
            case "Tríceps":
                return <img src="/png/triceps.png" className="h-36 w-36 p-6" alt="imagen de tríceps" />;
            default:
                return null;
        }
    };

    return (
        <div>
            <button
                className="bg-white text-black px-5 py-3 rounded-lg uppercase font-bebas text-xl hover:text-white hover:bg-yellow-500 transition-all duration-200"
                onClick={() => document.getElementById(`assign_exercise_${routineId}`).showModal()}
            >
                Agregar Rutina
            </button>
            <dialog id={`assign_exercise_${routineId}`} className="modal">
                <div className="modal-box bg-white text-black p-6 rounded-lg flex flex-col">
                    <form method="dialog">
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 text-black">✕</button>
                    </form>
                    <form>
                        <div>
                            <h1 className="text-black uppercase font-bebas text-3xl flex items-center justify-center w-full my-5 gap-1">Rutina para<span className='text-yellow-400'>{" "}{name}</span> de {days} días</h1>
                            <div className='flex justify-center items-center w-full'>
                                <select
                                    id="day-select"
                                    value={selectedDay}
                                    onChange={(e) => handleDaySelectedChange(e.target.value)}
                                    className="p-2 bg-zinc-800  text-white hover:bg-zinc-800 rounded-md"
                                >
                                    <option value="">Seleccione un día</option>
                                    {Array.from({ length: days }).map((_, index) => (
                                        <option key={index} value={index + 1}>Día {index + 1}</option>
                                    ))}
                                </select>
                            </div>
                        </div>

                        <div>
                            {selectedDay && Object.keys(groupedExercises).map((muscleGroup, index) => (
                                <>
                              
                                <div key={index} className="my-6">
                                    <div className='flex flex-row justify-center items-center gap-12'>
                                        <div className="flex flex-col w-auto h-auto justify-center items-center">
                                            {getIconForMuscleGroup(muscleGroup)}
                                            <h3 className="text-xl font-bebas uppercase text-yellow-500 ">{muscleGroup}</h3>
                                        </div>
                                        <div className="w-[200px]">
                                            {groupedExercises[muscleGroup].map(exercise => {
                                                // Verificamos si el ejercicio ya está en exerciseToSend para el día seleccionado
                                                const isChecked = totalExerciseToSend[selectedDay]?.some(e => e.idexercise === exercise.idexercise);

                                                return (
                                                    <div className='flex gap-3' key={exercise.idexercise}>
                                                        <input
                                                            type='checkbox'
                                                            className='accent-black'
                                                            checked={isChecked} // Marcamos el checkbox si ya está seleccionado
                                                            onChange={(event) => {
                                                                if (event.target.checked) {
                                                                    handleSetExercise(exercise);
                                                                } else {
                                                                    handleRemoveExercise(exercise.idexercise);
                                                                }
                                                            }}
                                                        />
                                                        <div key={exercise.idexercise} className="py-2">
                                                            {exercise.name}
                                                        </div>
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    </div>
                                </div>
                                <div className='w-full rounded-full bg-black h-[1px] flex'>
                                    
                                </div>
                                </>
                            ))}
                        </div>

                    </form>
                </div>
                <div className={` ${totalExerciseToSend.length !== 0 && selectedDay ? '' : 'opacity-0'} absolute bg-gradient-to-br from-black  via-zinc-900 to-black rounded-xl border right-[8%] top-[100px] p-5  `}>

                    <div className="flex justify-center items-center my-3">
                        <select
                            value={selectedWeekday}
                            onChange={(e) => handleDayChange(e.target.value)}
                            className="bg-zinc-800 rounded-md text-white font-semibold mb-2 p-2 w-[150px]"
                        >
                            <option value="Seleccione" className=' hover:bg-zinc-700 ' disabled>Seleccione</option>
                            <option value="Lunes">Lunes</option>
                            <option value="Martes">Martes</option>
                            <option value="Miércoles">Miércoles</option>
                            <option value="Jueves">Jueves</option>
                            <option value="Viernes">Viernes</option>
                            <option value="Sábado">Sábado</option>
                        </select>
                    </div>
                    <div className="flex items-center justify-between gap-4 font-bold text-lg text-white pb-2">

                        <p className='pl-5 ml-11'> Ejercicio</p>
                        <div className="flex gap-3">
                            <p className='mr-9'>Series</p>
                            <p className='mr-9'>Descanso</p>
                        </div>
                    </div>
                    {/* Mostrar los ejercicios seleccionados */}
                    {totalExerciseToSend[selectedDay] && totalExerciseToSend[selectedDay].length > 0 ? (
                        <div className='max-h-[500px] overflow-y-auto p-4'>
                            {/* Dropdown para seleccionar el día de la semana */}


                            {/* Mostrar los ejercicios seleccionados */}
                            {totalExerciseToSend[selectedDay].map((exercise, index) => {
                                { console.log(exercise.idexercise) }

                                const selectedExercise = Object.values(groupedExercises).flat().find(ex => ex.idexercise === exercise.idexercise);
                                return selectedExercise ? (
                                    <div key={index} className="py-2">
                                        <div className="flex items-center  gap-4">
                                            <p className='w-[210px]'>{selectedExercise.name}</p>
                                            <div className="flex gap-3">
                                                <input
                                                    type="text"
                                                    placeholder="SxR"
                                                    value={exercise.series}
                                                    maxLength={5}
                                                    onChange={(e) => handleSeriesChange(exercise.idexercise, e.target.value)}
                                                    className="p-2 border border-gray-300 rounded text-white w-24 text-center "
                                                />
                                                <input
                                                    type="time"
                                                    step="1"
                                                    value={exercise.breaktime}
                                                    onChange={(e) => handleBreakTimeChange(exercise.idexercise, e.target.value)}
                                                    className="p-2 border border-gray-300 rounded text-white"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                ) : null;
                            })}
                        </div>
                    ) : (
                        <p className='flex justify-center items-center w-full'>No se han seleccionado ejercicios</p>
                    )}

                    <div className='mt-10 flex justify-center items-center'>
                        <button type='submit' className='p-3 rounded-xl w-48 font-bebas bg-yellow-500 text-white hover:bg-yellow-400 hover:scale-105 transition-all duration-200 text-2xl'  onClick={handleSubmit} >CONFIRMAR
                        </button>

                    </div>
                </div>
            </dialog>
            {console.log(totalExerciseToSend)}
           
            {loading && (
                <div className="fixed inset-0 z-[50000] flex items-center justify-center bg-black/45">
                    <div
                        className="h-16 w-16 animate-spin rounded-full border-4 border-yellow-500 border-solid border-r-transparent"
                        role="status"
                    >
                        <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
                            Loading...
                        </span>
                    </div>
                </div>
            )}


        </div>
    );
};

export default AssignExerciseToRoutine;
