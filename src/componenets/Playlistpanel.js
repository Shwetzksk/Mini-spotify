import React, { useState, useEffect } from 'react'
import Track from './Track';

import { remove, storeLocally } from '../actions/index'
import { useSelector, useDispatch } from 'react-redux';

function Playlistpanel(props) {

    const [panelDrops, updatePanel] = useState([]);
    const [dropped, setDrop] = useState(false);


    //tracks which are added via clicking 'add to playlist' button
    const addInPlaylist = useSelector(state => state.tracks);
    const dispatch = useDispatch();


    //when refreshed extract playlist saved from localStorage
    useEffect(() => {

        const data = JSON.parse(localStorage.getItem('playlist_saved'));

        if (localStorage.getItem('playlist_saved')?.length) {
            setDrop(true);
            updatePanel(() => data);

        }
        // localStorage.removeItem('playlist_saved');





    }, [])

    //storing in localStorage
    useEffect(() => {

        dispatch(storeLocally(panelDrops));


    }, [panelDrops]);





    //whenever change occur in addInPlaylist array then update tracksToShowInPanel
    useEffect(() => {

        const stored = JSON.parse(localStorage.getItem('playlist_saved'));
        //check whether playlist has that track
        addInPlaylist.forEach(addedtrack => {
            if (!panelDrops.some(track => track.id === addedtrack.id) && !stored?.some(track => track.id === addedtrack.id)) {
                updatePanel((prevValue) => [...prevValue, addedtrack]);
                setDrop(true);

            }

        });



    }, [addInPlaylist, panelDrops])

    function handleDropOver(e) {
        e.preventDefault();

    }



    function handleOnDrop(e) {
        const id = e.dataTransfer.getData("text / plain");
        const stored = JSON.parse(localStorage.getItem('playlist_saved'));
        const droppingItem = props.data.find(track => track.id === id);

        updatePanel((prevValue) => {


            if (!panelDrops.some(track => track.id === droppingItem.id) && !stored?.some(track => track.id === droppingItem.id)) {

                return [...prevValue, droppingItem];

            }

            return prevValue;

        });

        setDrop(true);

    };

    function removeFromPlaylist(id) {
        const filtered = panelDrops.filter(track => track.id !== id);
        const delTrack = panelDrops.find(track => track.id === id);

        updatePanel(filtered);
        dispatch(remove(delTrack))


        if (panelDrops.length === 1) {

            setDrop(false);

        }

    }


    return (
        <figure className=" border-l border-gray-800 overflow-y-auto w-96"
            onDragOver={handleDropOver}
            onDrop={handleOnDrop}
        >
            <h1 className="text-lg font-bold text-gray-200 text-center mb-4 ">Playlists</h1>
            {(dropped && panelDrops.map(track => <Track key={track.id} {...track} uid={`${track.id}p`} menu={'remove'} class={'hover:bg-red-500'} handleMenu={removeFromPlaylist} />)) || ''}


            {(!dropped && <div className="text-lg font-bold  text-gray-600 text-center   mt-24">
                <h1>Add your tracks here</h1>
                <h1>or</h1>
                <h1>Drag and drop here</h1>
            </div>) || ''}


        </figure>
    )
}

export default Playlistpanel
