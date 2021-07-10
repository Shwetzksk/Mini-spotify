import React from 'react';
import {MdMoreVert} from 'react-icons/md';

function Track(props) {


    function handleDragStart(e) {


        const id = e.target.id;
        e.dataTransfer.setData("text / plain", id)
    }
    function toggleMenu(id) {
        document.getElementById(`menu__${id}--toggle`).classList.toggle('invisible');

    }


    return (
        <div className=" flex  bg-gray-800 p-2 w-auto  text-gray-500 rounded-lg mx-2 mb-2 items-center cursor-move hover:shadow-md relative"
            draggable
            onDragStart={handleDragStart}
            id={props.id}

        >
            <div className="rounded-full bg-gray-200 w-10 h-10 text-center ml-4">
                <img className="rounded-full w-10 h-10"

                    src={props.imgURL}
                    alt={props.song}
                />
            </div>
            <div className="text-left ml-3">
                <h1 className="text-base font-semibold">{props.song}</h1>
                <div className="flex">
                    {/* {props.artist.map((artist)=><p className="text-xs font-regular text-gray-600 " >{artist}</p>)} */}
                    <p className="text-xs font-regular text-gray-600 " >{props.artist}</p>
                </div>
            </div>

            <MdMoreVert className="ml-auto cursor-pointer" style={{ fontSize: '25px' }} onClick={() => toggleMenu(props.uid)} />

            <div className={`absolute bg-gray-700 -bottom-4 -right-0.5 z-20 py-1 px-2 mt-6 rounded-md cursor-pointer ${props.class} invisible`} id={`menu__${props.uid}--toggle`}>
                <p className="text-sm font-light" onClick={() => props.handleMenu(props.id)}>{props.menu}</p>
            </div >

        </div >
    )
}

export default Track
