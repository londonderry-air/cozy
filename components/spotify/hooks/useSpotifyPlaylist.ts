import { useCallback,  useEffect,  useState } from "react"

export const useSpotifyPlaylist = () => {
    const [playlists, setPlaylists] = useState<SpotifyApi.PlaylistObjectFull[] | null>(null)
    
    const setNewPlaylist = useCallback(async() => {
        const res = await fetch('/api/spotify/playlist', {
            method: 'GET'
        })
        const data = await res.json()
        setPlaylists(res.status === 200 ? data : [])
    }, [])

    useEffect(() => {
        setNewPlaylist()
    }, [])

    return playlists
}