import { useEffect, useState } from "react"
import { useRecoilValue } from "recoil"
import { Box } from "shared/elements/box/common"
import { FlexBox } from "shared/elements/box/flex"
import { Image } from "shared/elements/image/common"
import { Word } from "shared/elements/text/common"
import { useTheme } from "shared/hooks/useTheme"
import { modulerScale } from "shared/utils/typo"
import { spotifyPlayerState } from "spotify/states/player"
import { SpotifyPlaylistSelector } from "./spotify-playlist-selector"
import { Spacer } from "shared/elements/spacer/common"

export const SpotifyPlaylist = () => {
    const [playlist, setPlaylist] = useState<SpotifyApi.PlaylistObjectFull | null>(null)
    const [isSelecterOpen, setSelecterOpenState] = useState(false)
    const {theme} = useTheme()
    const {track} = useRecoilValue(spotifyPlayerState)

    return (
        <>
            <FlexBox
                width={'100%'}
                padding={'1em'}
                radius={'12px'}
                way={'column'} 
                onClick={() => setSelecterOpenState(true)}
                background={theme.color.main}
                cursor={'pointer'}
            >
                <FlexBox width={'100%'} way={'row'} alignItems={'center'} gap={'0.5em'}>
                    <Box width={'46px'} height={'46px'} radius={'4px'} overflow={{x: 'hidden'}}>
                        <Image
                            width={'46px'}
                            height={'46px'}
                            fit={'cover'}
                            src={playlist 
                                ? playlist.images.length === 0 
                                    ? '/images/spotify/spotify-playlist-empty.png' 
                                    : playlist.images[0].url
                                : '/images/spotify/spotify-playlist-empty.png' 
                            }
                        />
                        </Box>
                        <FlexBox way={'column'} gap={'4px'}>
                            <Word 
                                color={theme.color.base} 
                                weight={'600'} 
                                size={modulerScale(-2)}
                                h_space={'0.03em'}
                            >{playlist ? playlist.name : 'プレイリストは選択されていません'}</Word>
                            <Word 
                                color={theme.color.base} 
                                weight={'500'} 
                                size={modulerScale(-4)}
                                h_space={'0.04em'}
                            >PLAYLIST</Word>
                        </FlexBox>
                    </FlexBox>
                    <Spacer 
                        color={theme.color.base} 
                        margin={'1em 0px'}
                        borderWidth={'1px'}
                        borderStyle={'solid'}
                    />
                    <FlexBox way={'column'} gap={'2px'}>
                        <Word 
                            color={theme.color.base} 
                            size={modulerScale(-2)}
                            h_space={'0.04em'}
                        >{playlist && track ? track.name : '---'}</Word>
                        <Word 
                            color={theme.color.gray06} 
                            size={modulerScale(-3)}
                            h_space={'0.04em'}
                        >{playlist && track ? track.artists.map(a => a.name).join(',') : '---'}</Word>
                    </FlexBox>
            </FlexBox>
            <SpotifyPlaylistSelector 
                isOpen={isSelecterOpen} 
                onClose={() => setSelecterOpenState(false)}
                onSelect={(p) => setPlaylist(p)}
            />
        </>
    )
}