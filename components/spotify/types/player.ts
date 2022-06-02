export type SpotifyPlayer = {
    player: Spotify.Player | null
    track: Spotify.Track | null
    playlist: Spotify.PlaybackContext | null
    deviceId: string | null
    isPaused: boolean
    isShuffle: boolean
    repeatMode: SpotifyPlayerRepeatState
}

export type SpotifyPlayerRepeatState = 'no-repeat' | 'repeat-context' | 'repeat-track'