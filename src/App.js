import React, { useState, useEffect } from 'react';
import './App.css';
import spotifylogo from './spotify-icon.svg'

import Trackpanel from './componenets/Trackpanel';
import Playlistpanel from './componenets/Playlistpanel';


import WebApp from './WebApp';

import { useSelector } from 'react-redux';




function App() {



  const [tracks, updateTracks] = useState([]);
  const dataFromSpotify = useSelector(state => state.spotifyData);
  const localStored = useSelector(state => state.localStore);

  useEffect(() => {



    if (dataFromSpotify.length > 0) {
      updateTracks(dataFromSpotify);
    }
  }, [dataFromSpotify]);

  useEffect(() => {
    localStorage.setItem('playlist_saved', JSON.stringify(localStored));

  }, [localStored]);



  return (
    <section className="App bg-gray-900  h-screen flex flex-col pt-6 relative">

      <WebApp />
      <div className="flex mx-auto w-auto  items-center">
        <img src={spotifylogo} alt='spotify' />
        <h1 className="text-green-500  mx-2 text-2xl font-logo font-bold">Mini spotify</h1>
      </div>
      <div className="flex w-11/12 mx-auto justify-between px-2 mb-2 mt-auto h-5/6 font-body ">
        <Trackpanel data={tracks} />
        <Playlistpanel data={tracks} />

      </div>
      <p className="text-sm text-center py-3 text-gray-400">Developed by Shweta </p>
    </section>
  );
}

export default App;
