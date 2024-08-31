import { Link } from "react-router-dom";

const LocationsPage = () => {
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

  return (
    <div className="max-w-5xl mx-auto p-4 mt-20">
      <div className="flex justify-between items-center mb-6 mt-10">
        <h1 className="text-4xl font-bold text-gray-900">SEDES</h1>
      </div>
      <div className="flex flex-wrap gap-6 justify-center mt-20">
        {branches.map((branch) => (
          <div
            key={branch.id}
            className="bg-yellow-400 p-6 rounded-lg shadow-md w-80"
          >
            <h2 className="text-2xl font-semibold mb-2 text-black">
              {branch.name}
            </h2>
            <hr className="border-black border-t-2 mb-4" />
            <div className="flex items-center text-lg mb-2 text-black">
              <img
                src="https://cdn.icon-icons.com/icons2/653/PNG/512/locate_gps_navigation_pin_point_location_icon-icons.com_59906.png"
                alt=""
                className="h-6 w-6 mr-2"
              />
              <p className="text-lg mb-2 text-black">
                <span>{branch.address}</span>
              </p>
            </div>
            <div className="flex items-center text-lg mb-2 text-black">
              <img
                src="https://cdn.icon-icons.com/icons2/614/PNG/512/phone-call-auricular-symbol-in-black_icon-icons.com_56483.png"
                alt="Logo"
                className="h-6 w-6 mr-2"
              />
              <span>{branch.phone}</span>
            </div>
            <div className="flex items-center text-lg mb-2 text-black">
              <img
                src="https://cdn.icon-icons.com/icons2/1993/PNG/512/calendar_date_day_event_month_schedule_time_icon_123230.png"
                className="h-6 w-6 mr-2"
              />
              <p className="text-lg mb-2 text-black">{branch.hours}</p>
            </div>
            <div className="flex items-center text-lg mb-2 text-black">
              <img
                src="https://cdn.icon-icons.com/icons2/656/PNG/512/mail_email_message_electronic_online_web_icon-icons.com_59986.png"
                className="h-6 w-6 mr-2"
              />
              <p className="text-lg mb-4 text-black">
                <a
                  href={`mailto:${branch.email}`}
                  className="text-black-500 underline"
                >
                  {branch.email}
                </a>
              </p>
            </div>
            <Link
              to={`/sucursal/${branch.id}`}
              className="inline-block px-5 py-3 bg-black text-white rounded-lg font-medium hover:bg-blue-600 transition-colors"
            >
              VER GRILLA
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LocationsPage;
