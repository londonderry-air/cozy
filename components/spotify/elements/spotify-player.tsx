import { useEffect } from "react"
import { FlexBox } from "shared/elements/box/flex"
import { Image } from "shared/elements/image/common"
import { Word } from "shared/elements/text/common"
import { useSpotifyPlayer } from "spotify/hooks/useSpotifyPlayer"

export const SpotifyPlayer = () => {
    const {player, track} = useSpotifyPlayer()

    return (
        <FlexBox way={'column'}>
            <FlexBox way={'row'}>
                <Image 
                    width={'30px'} 
                    height={'30px'} 
                    fit={'cover'} 
                    src={track ? track.album.images[0].url : '/images/spotify/spotify_white.png'} 
                />
                <FlexBox way={'column'}>
                    <Word>{track ? track.name : ''}</Word>
                    <Word>PLAYLIST</Word>
                </FlexBox>
            </FlexBox>
        </FlexBox>
    )
}