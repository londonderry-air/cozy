import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useEffect, useRef, useState } from 'react'
import { SpotifyAuth } from 'spotify/types/auth'

const Home: NextPage = () => {
  const playerName = "COZY"
  const [deviceId, setDeviceId] = useState<string | null>(null)
  const router = useRouter()

  const getToken = async () => {
    const url = "/api/spotify/auth/refresh_token"
    const res = await fetch(url, { 
      method: "GET",
    })
    const auth: SpotifyAuth = await res.json()
    return auth.access_token
  }

  // check token
  //useEffect(() => {
  //  console.log("NEW TOKEN: "+ token)
  //}, [token])

  useEffect(() => {

    const script = document.createElement("script");
    script.src = "https://sdk.scdn.co/spotify-player.js";
    script.async = true;
    document.body.appendChild(script);
 
    window.onSpotifyWebPlaybackSDKReady = () => {
      const player = new window.Spotify.Player({
        name: playerName,
        getOAuthToken: async (callback) => {
          const newToken = await getToken()
          if (newToken) {
            callback(newToken)
          }
        },
        volume: 0.5,
      });

      player.addListener("ready", ({ device_id }) => {
        console.log("Ready with Device for COZY: ", device_id);
        setDeviceId(device_id)
      });

      player.on('initialization_error', ({ message }) => {
        console.error('Failed to initialize', message);
      });

      player.on('authentication_error', ({ message }) => {
        console.error('Failed to authenticate', message);
      });

      player.on('playback_error', ({ message }) => {
        console.error('Failed to perform playback', message);
      });

      // player.addListener('player_state_changed', (state: Spotify.PlaybackState) => {
        // if (state) {
        //  console.log('Currently Playing', state.track_window.current_track);
        // }
      // });

      player.connect()
    }

  }, [])

  return (
    <div className='box'>
      <h1 className='title'>COZY SPOTIFY PLAYER</h1>
      <p className='message'>COZY にて Spotify の操作が可能です。</p>
    </div>
  )
}

export default Home
