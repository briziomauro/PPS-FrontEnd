import React from 'react'
import { DiAndroid, DiVim } from 'react-icons/di'
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { Bar, BarChart, CartesianGrid, Cell, Legend, Line, LineChart, Pie, PieChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const userLocations = [
  {
    sedeName: 'Sede Centro',
    userQuantity: 500,
    color: "#0f172a"
  },
  {
    sedeName: 'Sede Norte',
    userQuantity: 320,
    color: "#1d4ed8"
  },
  {
    sedeName: 'Sede Sur',
    userQuantity: 450,
    color: "#16a34a"
  },
  {
    sedeName: 'Sede Oeste',
    userQuantity: 280,
    color: "#052e16"
  },
  {
    sedeName: 'Sede Fisherton',
    userQuantity: 150,
    color: "#eab308"
  },
  {
    sedeName: 'Sede Pichincha',
    userQuantity: 380,
    color: "#dc2626"
  },
  {
    sedeName: 'Sede Puerto Norte',
    userQuantity: 220,
    color: "#67e8f9"
  },
];


const datosMembresias = [
  { tipo: "Básica", cantidad: 120, color: "#eab308" },
  { tipo: "Premium", cantidad: 80, color: "#c2410c" },
];

const nuevosUsuarios = [
  { mes: 'Enero', cantidad: 30 },
  { mes: 'Febrero', cantidad: 45 },
  { mes: 'Marzo', cantidad: 50 },
  { mes: 'Abril', cantidad: 70 },
  { mes: 'Mayo', cantidad: 60 },
  { mes: 'Junio', cantidad: 90 },
  { mes: 'Julio', cantidad: 100 },
  { mes: 'Agosto', cantidad: 80 },
  { mes: 'Septiembre', cantidad: 75 },
  { mes: 'Octubre', cantidad: 85 },
  { mes: 'Noviembre', cantidad: 95 },
  { mes: 'Diciembre', cantidad: 120 },
];

const AdminPage = () => {
  return (
    <div className='flex flex-col min-h-screen'>

      <header className="bg-zinc-700 pl-20 py-4 font-bebas tracking-wider ">
        <h1 className="text-white text-4xl">
          Bienvenido <strong className="text-yellow-400">ADMIN</strong>
        </h1>
      </header>

      <div className='flex justify-center items-center text-black text-5xl font-bebas my-10'>
        <h3>REPORTES GENERALES</h3>
      </div>

      <div className='flex'>
        <div className='flex flex-col flex-1 justify-center items-center mb-4'>
          <div className='flex justify-center items-center text-black text-3xl font-bebas'>
            <h3>CANTIDAD DE PERSONAS POR SEDE</h3>
          </div>
          <ResponsiveContainer width={600} height={700}>
            <BarChart
              width={200}
              height={300}
              data={userLocations}
              margin={{
                top: 20,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="sedeName" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="userQuantity">
                {userLocations.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className='flex flex-col gap-5 flex-1'>
          <article className="w-3/4">
            <div className="bg-amber-400 flex items-center justify-between p-2">
              <h2 className="text-3xl  font-bebas text-white">Centro de Usuarios</h2>
            </div>

            <ul>
              <li>
                <Link
                  className="bg-zinc-800 flex justify-center items-center gap-3 text-white p-10 text-xl rounded-b-3xl text-center hover:bg-zinc-900 transition-all duration-200"
                  to="/admin/user-center"
                >
                  Ver usuarios <FaArrowRight className="animate-bounce" />
                </Link>
              </li>
            </ul>
          </article>

          <article className="w-3/4">
            <div className="bg-amber-400 flex items-center justify-between p-2">
              <h2 className="text-3xl  font-bebas text-white">Asignar Turnos</h2>
            </div>

            <ul>
              <li>
                <Link
                  className="bg-zinc-800 flex justify-center items-center gap-3 text-white p-10 text-xl rounded-b-3xl text-center hover:bg-zinc-900 transition-all duration-200"
                  to="/admin/assing-shift"
                >
                  Asignar turnos disponibles <FaArrowRight className="animate-bounce" />
                </Link>
              </li>
            </ul>
          </article>

          <div className='flex gap-5'>
            <div>
              <h3 className='text-3xl font-bebas text-black mt-3 mb-5'>MEMBRESIAS MAS POPUALRES</h3>
              <div>
                <ResponsiveContainer width={300} height={300}>
                  <PieChart>
                    <Tooltip />
                    <Pie
                      data={datosMembresias}
                      dataKey="cantidad"
                      nameKey="tipo"
                      cx="50%"
                      cy="50%"
                      outerRadius={80}
                      fill="#8884d8"
                      label={({ name }) => name}
                    >
                      {datosMembresias.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>
            <div>
              <div className='flex flex-col justify-center items-center'>
                <h3 className='text-black text-3xl font-bebas mb-5 mt-3 uppercase'>Nuevos Usuarios por Mes</h3>
                <ResponsiveContainer width={500} height={300}>
                  <LineChart data={nuevosUsuarios}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="mes" />
                    <YAxis />
                    <Tooltip
                      content={({ payload }) => {
                        if (payload && payload.length > 0) {
                          return (
                            <div className="bg-white p-2 border rounded">
                              <p>{`Mes: ${payload[0].payload.mes}`}</p>
                              <p>{`Cantidad: ${payload[0].value}`}</p>
                            </div>
                          );
                        }
                        return null;
                      }}
                    />
                    <Line
                      type="monotone"
                      dataKey="cantidad"
                      stroke="#dc2626"
                      strokeWidth={2}
                      dot
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </div>

      </div>

    </div>
  )
}

export default AdminPage