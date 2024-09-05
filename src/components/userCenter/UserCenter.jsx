import React from 'react'
import UserCenterProfessor from '../userCenterProfessor/UserCenterProfessor'
import UserCenterClient from '../userCenterClient/UserCenterClient'

const UserCenter = () => {
    return (
        <div >
            <div className='text-black text-5xl font-bebas flex justify-center items-center'>
                <h3>CENTRO DE USUARIOS</h3>
            </div>
            <div className='flex justify-evenly items-center h-screen'>
                {/*Profesores*/}
                <div className='flex-1'>
                    <UserCenterProfessor />
                </div>
                {/*Alumnos*/}
                <div className='flex-1'>
                    <UserCenterClient />
                </div>
            </div>
        </div>
    )
}

export default UserCenter