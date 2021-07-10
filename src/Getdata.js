import React, { useEffect, useState } from 'react';


import { storeData } from './actions/index';
import { useDispatch } from 'react-redux';

function Getdata() {

    const [token, setToken] = useState('');
    const dispatch = useDispatch();

    // https://api.spotify.com/v1/browse/new-releases?country=IN&limit=20&offset=5
    //https://api.spotify.com/v1/tracks?ids=7ouMYWpwJ422jRcDASZB7P%2C4VqPOruhp5EdPBeR92t6lQ%2C2takcwOaAZWiXQijPHIx7B&market=ES
    //https://api.spotify.com/v1/me/playlists

    useEffect(() => {

        if (localStorage.getItem('accessToken')) {
            setToken(localStorage.getItem('accessToken'));
        }

    }, []);
    const handleGetTracks = () => {


        fetch("https://api.spotify.com/v1/browse/new-releases?country=IN&limit=50&offset=5", {
            method:'GET',
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer ' + token,
            }
        }).then(res => res.json()).then(data => {
       
            // renaming data
            const requiredData = data.albums?.items.map(item => {
            return {
                id: item.id,
                artist: item.artists[0].name,
                imgURL: item.images[2].url,
                song: item.name,
            }
            });


            // storing data
            dispatch(storeData(requiredData));
           
        }).catch(err => console.log(err));

    
    }




    return (

        <button className="bg-yellow-400 rounded-3xl py-1.5 px-3 my-3" onClick={handleGetTracks}>Load Data</button>

    )
}

export default Getdata
