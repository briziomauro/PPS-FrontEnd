import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";

const monthNames = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre",
];

const getCurrentMonthYear = () => {
  const now = new Date();
  return `${monthNames[now.getMonth()]} ${now.getFullYear()}`;
};

const getNextMonthYear = (currentMonthYear, direction) => {
  const [monthStr, yearStr] = currentMonthYear.split(" ");
  let monthIndex = monthNames.indexOf(monthStr);
  let year = parseInt(yearStr);

  if (direction === "next") {
    monthIndex = (monthIndex + 1) % 12;
    if (monthIndex === 0) year++;
  } else if (direction === "prev") {
    monthIndex = (monthIndex - 1 + 12) % 12;
    if (monthIndex === 11) year--;
  }

  return `${monthNames[monthIndex]} ${year}`;
};

const getLastDayOfMonth = (month, year) => {
  return new Date(year, month + 1, 0).getDate();
};

const GetTurn = () => {
  const branches = [
    {
      id: 1,
      name: "SEDE UTN",
      address: "Zeballos 3172, Rosario.",
      phone: "4805-1312",
      hours: "L a V: 7 a 22 hs. | S: 9 a 20 hs. | D: 10 a 20 hs.",
      email: "utn@t-center.com",
    },
    {
      id: 2,
      name: "SEDE ABASTO",
      address: "Corrientes 2135, Rosario.",
      phone: "4862-7925",
      hours: "L a V: 7 a 23 hs. | S: 8 a 20 hs.",
      email: "abastot-center.com",
    },
    {
      id: 3,
      name: "SEDE CENTRO",
      address: "Arenales 3378, Rosario.",
      phone: "4821-6811",
      hours: "L a V: 6.30 a 23 hs. | S: 8 a 20 hs. | D: 10 a 20 hs.",
      email: "centro@t-center.com",
    },
    {
      id: 4,
      name: "ALTO ROSARIO",
      address: "Junín 501, Rosario.",
      phone: "4789-8754",
      hours: "L a V: 7 a 23 hs. | S: 9 a 21 hs. | D: 10 a 20 hs.",
      email: "altorosario@t-center.com",
    },
    {
      id: 5,
      name: "SEDE SAN MARTIN",
      address: "Riobamba 165, Rosario.",
      phone: "4372-1106",
      hours: "L a V: 7 a 22 hs. | S: 8 a 19 hs.",
      email: "sanmartin@t-center.com",
    },
    {
      id: 6,
      name: "SEDE LOURDES",
      address: "Iriarte 2056, Rosario.",
      phone: "4301-4327",
      hours: "L a V: 7 a 22 hs. | S: 9 a 20 hs.",
      email: "lourdes@t-center.com",
    },
    {
      id: 7,
      name: "BARRIO NORTE",
      address: "Rodríguez Peña 1062, Rosario.",
      phone: "4816-8566",
      hours: "L a V: 7 a 22 hs. | S: 9 a 20 hs.",
      email: "barrio@t-center.com",
    },
    {
      id: 8,
      name: "BELGRANO",
      address: "Vuelta de Obligado 2250, Rosario.",
      phone: "4784-6635",
      hours: "L a V: 6.30 a 23 hs. | S: 8 a 20 hs.",
      email: "belgrano@t-center.com",
    },
  ];

  const [selectedSede, setSelectedSede] = useState(null);
  const [selectedMonthYear, setSelectedMonthYear] = useState(
    getCurrentMonthYear()
  );
  const [selectedDay, setSelectedDay] = useState(new Date().getDate());

  const handleSedeChange = (sede) => {
    setSelectedSede(sede);
  };

  const handleMonthChange = (direction) => {
    setSelectedMonthYear(getNextMonthYear(selectedMonthYear, direction));
  };

  const handleDayChange = (direction) => {
    const [monthStr, yearStr] = selectedMonthYear.split(" ");
    const monthIndex = monthNames.indexOf(monthStr);
    const year = parseInt(yearStr);

    const lastDay = getLastDayOfMonth(monthIndex, year);

    if (direction === "next" && selectedDay < lastDay) {
      setSelectedDay(selectedDay + 1);
    } else if (direction === "prev" && selectedDay > 1) {
      setSelectedDay(selectedDay - 1);
    }
  };

  return (
    <div className="min-h-screen bg-yellow-400 p-6 text-black">
      <h2 className="font-bold text-5xl text-center mb-6 mt-12">
        RESERVAR TURNO!
      </h2>

      <div className="flex flex-wrap gap-2 mt-12 justify-center">
        {branches.map((branch) => (
          <button
            key={branch.id}
            className={`bg-gray-200 text-gray-600 font-bold py-2 px-4 rounded-lg transition-colors duration-200 ${
              selectedSede === branch.name
                ? "bg-gray-600 text-yellow-400"
                : "bg-gray-200 text-gray-600"
            }`}
            onClick={() => handleSedeChange(branch.name)}
          >
            <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2" />
            {branch.name}
          </button>
        ))}
      </div>

      <div className="mt-10 text-center">
        <div className="flex justify-center items-center">
          <button
            className="text-black p-2 font-bold text-2xl"
            onClick={() => handleMonthChange("prev")}
          >
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>

          <span className="font-bold text-lg">{selectedMonthYear}</span>

          <button
            className="text-black p-2 font-bold text-2xl"
            onClick={() => handleMonthChange("next")}
          >
            <FontAwesomeIcon icon={faChevronRight} />
          </button>
        </div>
      </div>

      <div className="mt-6 text-center">
        <div className="flex justify-center items-center">
          <button
            className="text-black p-2 font-bold text-2xl"
            onClick={() => handleDayChange("prev")}
          >
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>

          <span className="font-bold text-lg">
            {String(selectedDay).padStart(2, "0")}
          </span>

          <button
            className="text-black p-2 font-bold text-2xl"
            onClick={() => handleDayChange("next")}
          >
            <FontAwesomeIcon icon={faChevronRight} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default GetTurn;
