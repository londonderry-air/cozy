import { cozyList } from "cozy/utils/variable/cozy"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { Box } from "shared/elements/box/common"
import { CozyView } from "cozy/elements/cozy"
import { Word } from "shared/elements/text/common"
import { COZY_ISDEVELOP } from "shared/utils/variable"
import { SpotifyPlaylist } from "spotify/elements/spotify-playlist"
import { useSpotifyPlayer } from "spotify/hooks/useSpotifyPlayer"

export default () => {
    const player = useSpotifyPlayer()
    const router = useRouter()
    const [isOpen, setOpenState] = useState(false)

    useEffect(() => {
        if (!COZY_ISDEVELOP && router.isReady) {
            router.push('/')
        }
    }, [router])

    if (!COZY_ISDEVELOP) {
        return <></>
    }

    return (
        <>
            <CozyView cozy={cozyList[0]} />

            <SpotifyPlaylist isOpen={isOpen} onClose={() =>  setOpenState(false)} />
        </>
    )
}