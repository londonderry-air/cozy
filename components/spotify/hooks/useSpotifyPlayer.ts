import { useEffect, useRef, useState } from "react"
import { useRecoilState } from "recoil"
import { spotifyPlayerState } from "spotify/states/player"
import { SpotifyAuth } from "spotify/types/auth"
import { SpotifyPlayerRepeatState } from "spotify/types/player"

// For playing in chrome, you need to allow autoplay
// https://qiita.com/AAA0125/items/40020f7ef30a4e3b6d79

export const useSpotifyPlayer = () => {

    const [player, setPlayer] = useRecoilState(spotifyPlayerState)

    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://sdk.scdn.co/spotify-player.js";
        script.async = true;
        document.body.appendChild(script);
        window.onSpotifyWebPlaybackSDKReady = () => {
            const newPlayer = new window.Spotify.Player({
              name: 'COZY',
              getOAuthToken: async (callback) => {
                const newToken = await getToken()
                if (newToken) {
                  callback(newToken)
                }
              },
              volume: 0.5,
            });
      
            newPlayer.addListener("ready", ({ device_id }) => {
                console.log("Ready with Device for COZY: ", device_id);
                setPlayer({...player, deviceId: device_id})
                console.log({...player, deviceId: device_id})
            });
      
            newPlayer.addListener('player_state_changed', (state: Spotify.PlaybackState) => {
              console.log(state)
              if (state) {
                setPlayer({...player, 
                    player: newPlayer,
                    track: state.track_window.current_track,
                    playlist: state.context ?? null,
                    isPaused: state.paused,
                    isShuffle: state.shuffle,
                    repeatMode: getRepeatState(state.repeat_mode)
                })
              }
            });
      
            newPlayer.connect()
            setPlayer({...player, player: newPlayer})
          }
        return () => {
          if (player.player) {
            player.player.disconnect()
          }
          document.body.removeChild(script)
        }
    }, [])

    return player
}


const getToken = async () => {
    const url = "/api/spotify/auth/refresh_token"
    const res = await fetch(url, { 
      method: "GET",
    })
    const auth: SpotifyAuth = await res.json()
    return auth.access_token
}

const getRepeatState = (state: number): SpotifyPlayerRepeatState => {
    switch (state) {
        case 0:
            return 'no-repeat'
        case 1:
            return 'repeat-context'
        case 2:
            return 'repeat-track'
        default:
            return 'no-repeat'
    }
}