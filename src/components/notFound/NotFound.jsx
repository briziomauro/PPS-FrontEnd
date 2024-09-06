import React from 'react'

const NotFound = () => {
    return (
        <div className=''>
            <div className='flex relative justify-center items-center h-screen'>
                <img src="./public/img/Notfound.jpg" alt="not-found" />
            </div>
            <div className='absolute flex justify-center items-center'>
                <p>ERROR 404</p>
                <p>NOT FOUND!</p>
            </div>
        </div>
    )
}

export default NotFound