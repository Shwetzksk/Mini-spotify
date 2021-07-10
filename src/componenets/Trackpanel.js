import React from 'react';
import Track from './Track';

import { useDispatch, useSelector } from 'react-redux';
import { add } from '../actions/index';



function Trackpanel(props) {

    //tracks need to added on playlist panel
    const toAddInPlaylist = useSelector(state => state.tracks);
    const dispatch = useDispatch();

    //when 'add to playlist' is clicked then add track to reducer state
    function addToPlaylist(id) {

        //extracting track from data array
        const data = props.data.find(track => track.id === id);

        //if track is not present in state then add that track
        if (!toAddInPlaylist.some(track => track.id === id)) {
            dispatch(add(data));
        }




    }

    return (
        <figure className="border-r border-gray-800 overflow-y-auto w-96">
            <h1 className="text-lg font-bold text-gray-200 text-center mb-4 ">Tracks</h1>

            {props.data.map(track => <Track key={track.id} {...track} menu={'add to playlist'} class={'hover:bg-green-500'} uid={`${track.id}t`} handleMenu={addToPlaylist} />)
            }


        </figure>
    )
}

export default Trackpanel
