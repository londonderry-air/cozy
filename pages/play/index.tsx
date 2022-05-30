import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useEffect, useRef, useState } from 'react'
import { SpotifyAuth } from '../../types'

const Home: NextPage = () => {
  const playerName = "COZY"
  const router = useRouter()
  const [token, setToken] = useState<string | null>(null)
  const [refreshToken, setRefreshToken] = useState<string | null>(null)

  const setNewToken = async () => {
    const url = "/api/refresh_token"
    const data = { refreshToken }
    const res = await fetch(url, { 
      method: "POST",
      body: JSON.stringify(data) 
    })
    const auth: SpotifyAuth = await res.json()
    return auth.access_token
  }

  useEffect(() => {
    const query = router.query
    if (query.refresh) {
      setRefreshToken(query.refresh.toString())
    }
  }, [router])

  // check token
  //useEffect(() => {
  //  console.log("NEW TOKEN: "+ token)
  //}, [token])

  useEffect(() => {
    if (!refreshToken) {
      return
    }

    const script = document.createElement("script");
    script.src = "https://sdk.scdn.co/spotify-player.js";
    script.async = true;
    document.body.appendChild(script);
 
    window.onSpotifyWebPlaybackSDKReady = () => {
      const player = new window.Spotify.Player({
        name: playerName,
        getOAuthToken: async (callback) => {
          const newToken = await setNewToken()
          if (newToken) {
            callback(newToken)
            setToken(newToken)
          }
        },
        volume: 0.5,
      });

      player.addListener("ready", ({ device_id }) => {
        console.log("Ready with Device for COZY: ", device_id);
      });

      // player.addListener('player_state_changed', (state: Spotify.PlaybackState) => {
        // if (state) {
        //  console.log('Currently Playing', state.track_window.current_track);
        // }
      // });

      player.connect()
    }

  }, [refreshToken])

  return (
    <div className='box'>
      <h1 className='title'>COZY SPOTIFY PLAYER</h1>
      <p className='message'>COZY にて Spotify の操作が可能です。</p>
    </div>
  )
}

export default Home
