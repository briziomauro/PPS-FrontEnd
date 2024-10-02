import React from 'react'
import UserCenterProfessor from '../userCenterProfessor/UserCenterProfessor'
import UserCenterClient from '../userCenterClient/UserCenterClient'

const UserCenter = () => {
    return (
        <div className="min-h-screen bg-gradient-to-tr from-black via-zinc-900 to-black">
            <div className="text-white font-bebas text-5xl font-bold flex justify-center items-center">
                <h3 className='mt-10'>CENTRO DE USUARIOS</h3>
            </div>
            <div className="flex justify-evenly items-center flex-wrap h-auto space-y-4 lg:space-y-0 lg:space-x-8 mt-10">
                {/* Profesores */}
                <div className="flex-1 max-w-sm p-4 flex justify-center items-center ">
                    <UserCenterProfessor />
                </div>

                {/* Alumnos */}
                <div className="flex-1 max-w-sm p-4 flex justify-center items-center">
                    <UserCenterClient />
                </div>
            </div>
        </div>

    )
}

export default UserCenter