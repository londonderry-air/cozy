import { useEffect, useRef, useState } from "react"
import { useRecoilState } from "recoil"
import { spotifyPlayerState } from "spotify/states/player"
import { SpotifyPlayerRepeatState } from "spotify/types/player"
import { refreshSpotifyAccessToken } from "spotify/utils/token"

export const useSpotifyPlayer = () => {

    const [player, setPlayer] = useRecoilState(spotifyPlayerState)
    const deviceIdRef = useRef<string | null>(null)

    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://sdk.scdn.co/spotify-player.js";
        script.async = true;
        document.body.appendChild(script);
        window.onSpotifyWebPlaybackSDKReady = () => {
            const newPlayer = new window.Spotify.Player({
              name: 'COZY',
              getOAuthToken: async (callback) => {
                const newToken = await refreshSpotifyAccessToken()
                if (newToken) {
                  callback(newToken)
                }
              },
              volume: 0.5,
            });
      
            newPlayer.addListener("ready", ({ device_id }) => {
                // console.log("Ready with Device for COZY: ", device_id);
                deviceIdRef.current = device_id
                setPlayer({...player, deviceId: device_id})
            });
      
            newPlayer.addListener('player_state_changed', (state: Spotify.PlaybackState) => {
              if (state) {
                setPlayer({...player, 
                    player: newPlayer,
                    deviceId: deviceIdRef.current,
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