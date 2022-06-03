import { FlexBox } from "shared/elements/box/flex"
import { Word } from "shared/elements/text/common"
import { useTheme } from "shared/hooks/useTheme"
import { modulerScale } from "shared/utils/typo"
import { useSpotifyPlaylist } from "spotify/hooks/useSpotifyPlaylist"
import styled from "styled-components"
import { SpotifyPlaylistItem } from "./spotify-playlist-item"

export const SpotifyPlaylist = () => {
    const { theme } = useTheme()
    const playlists = useSpotifyPlaylist()

    if (!playlists) {
        return <></>
    }

    return (
        <PlaylistBox way={'column'} justifyContent={'space-between'} background={theme.color.base} position={'absolute'} height={'100vh'} boxSizing={'border-box'} padding={'2em 4em 1em 2em'} radius={'20px'}>
            <FlexBox way={'column'} gap={'10px'}>
                <Word size={modulerScale(-2)} weight={'600'} color={theme.color.main}>CONNECT WITH SPOTIFY</Word>
                <Word size={modulerScale(-4)} weight={'600'} color={theme.color.main}>再生するプレイリストを選択してください</Word>
            </FlexBox>
            <FlexBox maxWidth="25vw" height={'80vh'} way={'column'} gap={'6px'} overflow={{x: 'hidden', y: 'scroll'}}>
                {playlists.map(playlist => (
                    <SpotifyPlaylistItem playlist={playlist} />
                ))}
            </FlexBox>
        </PlaylistBox>
    )
}

const PlaylistBox = styled(FlexBox)`
    top: 0;
    right: -2em;
    filter: drop-shadow(-14px 0px 16px rgba(108,108,114,0.6));
`