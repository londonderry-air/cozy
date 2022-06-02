import { useSpotifyPlayer } from "spotify/hooks/useSpotifyPlayer"

export default () => {
    const player = useSpotifyPlayer()
    console.log(player)
    return (
        <></>
    )
}