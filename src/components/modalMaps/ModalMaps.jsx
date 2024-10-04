import React from 'react'

const ModalMaps = ({id, position}) => {
    return (
        <div>
            {/* You can open the modal using document.getElementById('ID').showModal() method */}
            <button className="flex w-full justify-center items-center text-xl px-5 py-3 bg-yellow-500 text-white rounded-sm hover:bg-yellow-600 transition-colors font-bebas" onClick={() => document.getElementById(`my_modal_${id}`).showModal()}>VER DIRECCIÓN</button>
            <dialog id={`my_modal_${id}`} className="modal">
                <div className="modal-box">
                    <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>
                    <h3 className="font-bold text-lg">Dirección:</h3>
                    <div>
                    <iframe src={position} width="450" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
            </dialog>
        </div>
    )
}

export default ModalMaps