import React from 'react'

const ModalMaps = ({id, position}) => {
    return (
        <div >
            <button className="flex w-full justify-center items-center text-xl px-5 py-3 bg-yellow-500 text-white rounded-sm hover:bg-yellow-600 transition-colors font-bebas" onClick={() => document.getElementById(`my_modal_${id}`).showModal()}>VER UBICACIÓN</button>
            <dialog id={`my_modal_${id}`} className="modal ">
                <div className="modal-box rounded-md items-center text-center w-[500px] h-[560px] bg-gradient-to-br from-black via-zinc-800 to-black">
                    <form method="dialog">
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>
                    <h3 className="text-2xl font-bebas mb-2 ">UBICACIÓN:</h3>
                    <div className='mb-4 h-[2px] flex w-full bg-yellow-500'/>
                    <div>
                    <iframe src={position} width="450" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
            </dialog>
        </div>
    )
}

export default ModalMaps