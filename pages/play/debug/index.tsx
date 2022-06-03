import { useRouter } from "next/router"
import { useEffect } from "react"
import { SpotifyPlaylist } from "spotify/elements/spotify-playlist"
import { useSpotifyPlayer } from "spotify/hooks/useSpotifyPlayer"

export default () => {
    const player = useSpotifyPlayer()
    const router = useRouter()

    useEffect(() => {
        if (process.env.NODE_ENV !== 'development' && router.isReady) {
            router.push('/')
        }
    }, [router])

    if (process.env.NODE_ENV !== 'development') {
        return <></>
    }

    return (
        <>
            <SpotifyPlaylist/>
        </>
    )
}