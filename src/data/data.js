export const data = [
  {
    id: 1,
    name: "Valentin",
    lastName: "Cura",
    email: "cura@example.com",
    password: "admin123",
    type: "admin",
    date: "23-02-2004",
    phoneNumber: 312312331,
  },
  {
    id: 2,
    name: "Santiago",
    lastName: "Javkin",
    email: "santi@example.com",
    password: "trainer123",
    type: "trainer",
    date: "16-03-2004",
    phoneNumber: 312515325,
  },
  {
    id: 3,
    name: "Mateo",
    lastName: "Caranta",
    email: "mate@example.com",
    password: "client123",
    type: "client",
    date: "20-04-2003",
    phoneNumber: 312315235,
  },
];

export const locations = [
  {
    id: 1,
    name: "SEDE PICHINCHA",
    address: "Jujuy 2024, Rosario.",
    phone: "0341-448-1234",
    hours: {
      weekday: "6 a 23 hs.",
      saturday: "8 a 20 hs.",
      sunday: "10 a 18 hs.",
    },
    email: "pichincha@t-center.com",
    position: [-32.9442, -60.6541],
  },
  {
    id: 2,
    name: "SEDE ABASTO",
    address: "Corrientes 2135, Rosario.",
    phone: "0341-4862-7925",
    hours: {
      weekday: "7 a 23 hs.",
      saturday: "8 a 20 hs.",
      sunday: "Cerrado",
    },
    email: "abasto@t-center.com",
    position: [-32.9512, -60.6497],
  },
  {
    id: 3,
    name: "SEDE CENTRO",
    address: "Córdoba 1500, Rosario.",
    phone: "0341-4821-6811",
    hours: {
      weekday: "6.30 a 23 hs.",
      saturday: "8 a 20 hs.",
      sunday: "10 a 20 hs.",
    },
    email: "centro@t-center.com",
    position: [-32.9446, -60.6415],
  },
  {
    id: 4,
    name: "ALTO ROSARIO",
    address: "Junín 501, Rosario.",
    phone: "0341-4789-8754",
    hours: {
      weekday: "7 a 23 hs.",
      saturday: "9 a 21 hs.",
      sunday: "10 a 20 hs.",
    },
    email: "altorosario@t-center.com",
    position: [-32.9282, -60.6508],
  },
  {
    id: 5,
    name: "SEDE SAN MARTIN",
    address: "San Martín 1900, Rosario.",
    phone: "0341-4372-1106",
    hours: {
      weekday: "7 a 22 hs.",
      saturday: "8 a 19 hs.",
      sunday: "Cerrado",
    },
    email: "sanmartin@t-center.com",
    position: [-32.9742, -60.6443],
  },
  {
    id: 6,
    name: "SEDE LOURDES",
    address: "Laprida 2056, Rosario.",
    phone: "0341-4301-4327",
    hours: {
      weekday: "7 a 22 hs.",
      saturday: "9 a 20 hs.",
      sunday: "Cerrado",
    },
    email: "lourdes@t-center.com",
    position: [-32.9496, -60.6398],
  },
  {
    id: 7,
    name: "NORTE",
    address: "Salta 2400, Rosario.",
    phone: "0341-4816-8566",
    hours: {
      weekday: "7 a 22 hs.",
      saturday: "9 a 20 hs.",
      sunday: "Cerrado",
    },
    email: "barrio@t-center.com",
    position: [-32.9271, -60.6504],
  },
  {
    id: 8,
    name: "BELGRANO",
    address: "Av. Pellegrini 1800, Rosario.",
    phone: "0341-4784-6635",
    hours: {
      weekday: "6.30 a 23 hs.",
      saturday: "8 a 20 hs.",
      sunday: "Cerrado",
    },
    email: "belgrano@t-center.com",
    position: [-32.9527, -60.6449],
  },
];

export const shifts = [
  {
    id: 1,
    hora: "09:00",
    dia: "Lunes",
    cupoDisponible: 5,
    profesorAsignado: "Mauro Brizio",
    sede: "Sede Centro"
  },
  {
    id: 2,
    hora: "10:00",
    dia: "Lunes",
    cupoDisponible: 3,
    profesorAsignado: "Mateo Caranta",
    sede: "Sede Abasto"
  },
  {
    id: 3,
    hora: "11:00",
    dia: "Lunes",
    cupoDisponible: 4,
    profesorAsignado: "Nicolas Arrastia",
    sede: "Sede Norte"
  },
  {
    id: 4,
    hora: "12:00",
    dia: "Martes",
    cupoDisponible: 2,
    profesorAsignado: "Valentin Cura",
    sede: "Sede Downtown"
  },
  {
    id: 5,
    hora: "14:00",
    dia: "Martes",
    cupoDisponible: 6,
    profesorAsignado: "Santiago Haquin",
    sede: "Sede San Martin"
  },
  {
    id: 6,
    hora: "15:00",
    dia: "Miércoles",
    cupoDisponible: 1,
    profesorAsignado: "Nicolas Abramovich",
    sede: "Sede Pichincha"
  },
  {
    id: 7,
    hora: "16:00",
    dia: "Miércoles",
    cupoDisponible: 4,
    profesorAsignado: "Joaquin Benitez",
    sede: "Sede Lourdes"
  },
  {
    id: 8,
    hora: "17:00",
    dia: "Jueves",
    cupoDisponible: 0,
    profesorAsignado: "Mauro Brizio",
    sede: "Sede Centro"
  },
  {
    id: 9,
    hora: "18:00",
    dia: "Jueves",
    cupoDisponible: 2,
    profesorAsignado: "Mateo Caranta",
    sede: "Sede Abasto"
  },
  {
    id: 10,
    hora: "19:00",
    dia: "Viernes",
    cupoDisponible: 5,
    profesorAsignado: "Nicolas Arrastia",
    sede: "Sede Norte"
  },
];



