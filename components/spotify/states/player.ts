import { atom } from "recoil";
import { SpotifyPlayer } from "spotify/types/player";

// state
export const spotifyPlayerState = atom<SpotifyPlayer>({
  key: "spotify-player",
  default: {
    player: null,
    track: null,
    playlist: null,
    deviceId: null,
    isPaused: false,
    isShuffle: false,
    repeatMode: 'no-repeat'
  },
});