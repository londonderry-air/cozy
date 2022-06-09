import { FlexBox } from "shared/elements/box/flex"
import { Box } from "shared/elements/box/common"
import { Image } from "shared/elements/image/common"
import { modulerScale } from "shared/utils/typo"
import { useTheme } from "shared/hooks/useTheme"
import { EllipseWord } from "shared/elements/text/ellipse"
import { useRecoilValue } from "recoil"
import { spotifyPlayerState } from "spotify/states/player"

export const SpotifyPlaylistItem = (props: {
    playlist: SpotifyApi.PlaylistObjectFull,
    onSelect?: (playlist: SpotifyApi.PlaylistObjectFull) => void
}) => {
    const { theme } = useTheme()
    const { player, deviceId, isPaused } = useRecoilValue(spotifyPlayerState)

    return (
        <FlexBox width={'100%'} way={'row'} gap={'20px'} alignItems={'center'} cursor={'pointer'}
            onClick={() => {
                fetch(`/api/spotify/play?device_id=${deviceId}&context_uri=${props.playlist.uri}`)
                    .then((res) => {
                        if (props.onSelect) {
                            props.onSelect(props.playlist)
                        }
                    })
                    .catch((err) => console.log(err))
            }}
        >
            <Box position="relative" width={'45px'} height={'45px'} radius={'3px'} overflow={{x: 'hidden', y: 'hidden'}}>
                <Image
                    width={'100%'}
                    height={'100%'}
                    fit={'cover'}
                    src={props.playlist.images.length > 0 ? props.playlist.images[0].url : '/images/spotify/spotify_black.png'}
                />
            </Box>
            <FlexBox width={'calc(100% - 65px)'} way={'column'} gap={'2px'}>
                <EllipseWord size={modulerScale(-2)} weight={'600'} color={theme.color.main}>{props.playlist.name}</EllipseWord>
                <EllipseWord size={modulerScale(-4)} weight={'500'} color={theme.color.gray03}>{props.playlist.owner.display_name}</EllipseWord>
            </FlexBox>
        </FlexBox>
    )
}