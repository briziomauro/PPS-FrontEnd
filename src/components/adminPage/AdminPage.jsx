import React, { useEffect, useState } from 'react'
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { Bar, BarChart, CartesianGrid, Cell, Legend, Line, LineChart, Pie, PieChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const AdminPage = () => {
  const [membershipCount, setMembershipCount] = useState([])
  const [clientsPerMonth, setClientsPerMonth] = useState([])
  const [clientsPerLocation, setClientsPerLocation] = useState([])
  const [error, setError] = useState("")


  const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };


  //FETCH PARA OBTENER LA CUENTA DE LAS MEMBRESIAS
  useEffect(() => {
    const getMembershipCount = async () => {
      try {
        const response = await fetch(
          "https://localhost:7179/api/Membership/client-count",
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
        setMembershipCount(data);
      } catch (error) {
        setError(error.message);
      }
    };

    getMembershipCount();
  }, []);


  //FETCH PARA OBTENER LA CUENTA DE LOS USUARIOS
  useEffect(() => {
    const getClientPerMonth = async () => {
      try {
        const response = await fetch(
          "https://localhost:7179/api/Client/GetNewClientsPerMonth",
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

        // Transformar la respuesta
        const transformedData = data.map(item => ({
          mes: `${item.year}-${item.month.toString().padStart(2, '0')}`,
          cantidad: item.count
        }));

        setClientsPerMonth(transformedData);
      } catch (error) {
        setError(error.message);
      }
    };

    getClientPerMonth();
  }, []);


  // CANTIDAD DE PERSONAS POR SEDE
  useEffect(() => {
    const getClientsPerLocation = async () => {
      try {
        const response = await fetch(
          "https://localhost:7179/api/Location/locations/clients-count",
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
        setClientsPerLocation(data);
      } catch (error) {
        setError(error.message);
      }
    };

    getClientsPerLocation();
  }, []);

  const sortedClientsPerMonth = [...clientsPerMonth].sort((a, b) => {
    // Asegúrate de que `mes` tenga un formato comparable, como un número o fecha
    return new Date(a.mes) - new Date(b.mes);
  });


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
          <div>
            <div className='flex justify-center items-center text-black text-3xl font-bebas'>
              <h3>CANTIDAD DE PERSONAS POR SEDE</h3>
            </div>
            <ResponsiveContainer width={600} height={450}>
              <BarChart
                data={clientsPerLocation}
                margin={{
                  top: 20,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="locationName" />
                <YAxis tickFormatter={(value) => Math.floor(value)} />
                <Tooltip />
                <Legend />
                <Bar dataKey="clientsCount">
                  {clientsPerLocation.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={getRandomColor()} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>


          </div>

          <div className='flex gap-5 mt-5'>
            <div>
              <h3 className='text-3xl font-bebas text-black mt-3 mb-5'>MEMBRESIAS MAS POPUALRES</h3>
              <div>
                <ResponsiveContainer width={300} height={300}>
                  <PieChart>
                    <Tooltip />
                    <Pie
                      data={membershipCount}
                      dataKey="clientCount"
                      nameKey="type"
                      cx="50%"
                      cy="50%"
                      outerRadius={80}
                      fill="#8884d8"
                      label={({ name }) => name}
                    >
                      {membershipCount.map((index) => (
                        <Cell key={`cell-${index}`} fill={getRandomColor()} />
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
                  <LineChart data={sortedClientsPerMonth}>
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

          <article className="w-3/4">
            <div className="bg-amber-400 flex items-center justify-between p-2">
              <h2 className="text-3xl  font-bebas text-white">Gestión de sedes</h2>
            </div>

            <ul>
              <li>
                <Link
                  className="bg-zinc-800 flex justify-center items-center gap-3 text-white p-10 text-xl rounded-b-3xl text-center hover:bg-zinc-900 transition-all duration-200"
                  to="/admin/manage-locations"
                >
                  Ver Sedes <FaArrowRight className="animate-bounce" />
                </Link>
              </li>
            </ul>
          </article>
        </div>

      </div>

    </div>
  )
}

export default AdminPage