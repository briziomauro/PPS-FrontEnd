import { useState } from "react";
import { FaChevronLeft, FaChevronRight, FaMapMarkerAlt } from "react-icons/fa";
import { locations } from "../../data/data";

const monthNames = [
  "Ene",
  "Feb",
  "Mar",
  "Abr",
  "May",
  "Jun",
  "Jul",
  "Ago",
  "Sep",
  "Oct",
  "Nov",
  "Dic",
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
        {locations.map((branch) => (
          <button
            key={branch.id}
            className={`bg-gray-200 text-gray-600 font-bold py-2 px-4 rounded-lg transition-colors duration-200 flex items-center ${
              selectedSede === branch.name
                ? "bg-gray-600 text-yellow-400"
                : "bg-gray-200 text-gray-600"
            }`}
            onClick={() => handleSedeChange(branch.name)}
          >
            <FaMapMarkerAlt className="mr-2" />
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
            <FaChevronLeft />
          </button>

          <span className="font-bold text-lg">{selectedMonthYear}</span>

          <button
            className="text-black p-2 font-bold text-2xl"
            onClick={() => handleMonthChange("next")}
          >
            <FaChevronRight />
          </button>
        </div>
      </div>

      <div className="mt-6 text-center">
        <div className="flex justify-center items-center">
          <button
            className="text-black p-2 font-bold text-2xl"
            onClick={() => handleDayChange("prev")}
          >
            <FaChevronLeft />
          </button>

          <span className="font-bold text-lg">
            {String(selectedDay).padStart(2, "0")}
          </span>

          <button
            className="text-black p-2 font-bold text-2xl"
            onClick={() => handleDayChange("next")}
          >
            <FaChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default GetTurn;
