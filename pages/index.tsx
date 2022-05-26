import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

const Home: NextPage = () => {
  const playerName = "COZY"
  const router = useRouter()
  const [token, setToken] = useState("")
  const [player, setPlayer] = useState<Spotify.Player | null>(null);

  useEffect(() => {
    const query = router.query
    if (query.token) {
      setToken(query.token.toString())
    }
  }, [router])

  useEffect(() => {
    if (token === "") {
      return
    }

    const script = document.createElement("script");
    script.src = "https://sdk.scdn.co/spotify-player.js";
    script.async = true;

    document.body.appendChild(script);

    window.onSpotifyWebPlaybackSDKReady = () => {
      const player = new window.Spotify.Player({
        name: playerName,
        getOAuthToken: (cb) => {
          cb(token);
        },
        volume: 0.5,
      });
      setPlayer(player)

      player.addListener("ready", ({ device_id }) => {
        console.log("Ready with Device ID", device_id);
      });

      player.connect();
    }
  }, [token])
  return (
    <div className='box'>
      <h1 className='title'>COZY SPOTIFY PLAYER</h1>
      <p className='message'>COZY にて Spotify の操作が可能です。</p>
    </div>
  )
}

export default Home
