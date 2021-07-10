import React, { useEffect } from 'react';
import './webApp.css';
import GetData from './Getdata';
import {MdClose} from 'react-icons/md';

// https://accounts.spotify.com/authorize?client_id=5fe01282e44241328a84e7c5cc169165&response_type=code&redirect_uri=https%3A%2F%2Fexample.com%2Fcallback&scope=user-read-private%20user-read-email&state=34fFs29kd09
const CLIENT_ID = "2207694848d44164aab49c7a3cc492b3";
const SPOTIFY_AUTHORIZE_ENDPOINT = "https://accounts.spotify.com/authorize";
const REDIRECT_URL_AFTER_LOGIN = "https://mini-spotifyv2.netlify.app/";

const SPACE_DELIMITER = "%20";
const SCOPE = ["user-top-read", "playlist-modify-public", "playlist-read-private"];
const SCOPE_URL_PARAM = SCOPE.join(SPACE_DELIMITER);

// https://accounts.spotify.com/en/authorize?client_id=2207694848d44164aab49c7a3cc492b3&redirect_uri=http:%2F%2Flocalhost:3000&scope=user-top-read%20playlist-modify-public&response_type=token&show_dialog=true

const getReturnParamFromSpotifyAuth = (hash) => {

    const stringAfterHash = hash.substring(1);
    const paramsInUrl = stringAfterHash.split("&");
    const paramsSplitUp = paramsInUrl.reduce((accumulator, currentValue) => {
        const [key, value] = currentValue.split("=");
        accumulator[key] = value;
        return accumulator;
    }, {});

    return paramsSplitUp;
}

const WebApp = () => {

    

    useEffect(() => {
        if (window.location.hash) {

            
            const { access_token, expires_in, token_type } = getReturnParamFromSpotifyAuth(window.location.hash);

            localStorage.setItem("accessToken", access_token);
            localStorage.setItem("expiresIn", expires_in);
            localStorage.setItem("tokenType", token_type);
        }



    }, []);

    const handleLogin = () => {
        window.location = `${SPOTIFY_AUTHORIZE_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URL_AFTER_LOGIN}&scope=${SCOPE_URL_PARAM}&response_type=token&show_dialog=true`;
    }
    function close() {

        document.querySelector('#logIn').classList.add('hidden');
        document.querySelector('#logIn__btn').classList.remove('hidden');
    }
    function open() {
        document.querySelector('#logIn__btn').classList.add('hidden');
        document.querySelector('#logIn').classList.remove('hidden');
    }
    return (<div className="z-20 absolute logIn__popUp ">

        <button className="bg-green-700 py-2 px-4 rounded-3xl hidden" onClick={open} id="logIn__btn">LOG IN</button>

        <div className="bg-gray-200 w-96  px-3 rounded-lg py-7 " id="logIn">



            <MdClose className="absolute right-5 top-4 cursor-pointer" onClick={close} />
            <div className="flex flex-col items-center mt-2">
                <h1 className="text-2xl font-bold text-gray-900 text-center mb-4  font-500">Log In</h1>

                <button onClick={handleLogin} className="bg-green-600 p-3 mx-auto rounded-3xl">Login to SPOTIFY</button>
                <GetData />
            </div>

            <ol className="text-center text-base">
                <li>1. Log in to spotify account</li>
                <li>2. Click on 'Load data' button</li>
            </ol>

        </div>
    </div>)
}

export default WebApp;


