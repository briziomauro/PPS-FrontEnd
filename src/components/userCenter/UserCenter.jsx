import React from 'react'
import UserCenterProfessor from '../userCenterProfessor/UserCenterProfessor'
import UserCenterClient from '../userCenterClient/UserCenterClient'

const UserCenter = () => {
    return (
        <div className="min-h-screen">
            <div className="text-gray-800 text-5xl font-bold flex justify-center items-center my-8">
                <h3>CENTRO DE USUARIOS</h3>
            </div>
            <div className="flex justify-evenly items-center flex-wrap h-auto space-y-4 lg:space-y-0 lg:space-x-8">
                {/* Profesores */}
                <div className="flex-1 max-w-sm p-4">
                    <UserCenterProfessor />
                </div>

                {/* Alumnos */}
                <div className="flex-1 max-w-sm p-4">
                    <UserCenterClient />
                </div>
            </div>
        </div>

    )
}

export default UserCenter