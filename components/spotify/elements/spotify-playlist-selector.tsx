import { useState } from "react"
import { Box } from "shared/elements/box/common"
import { FlexBox } from "shared/elements/box/flex"
import { Word } from "shared/elements/text/common"
import useMediaQuery from "shared/hooks/useMediaQuery"
import { useTheme } from "shared/hooks/useTheme"
import { modulerScale } from "shared/utils/typo"
import { useSpotifyPlaylist } from "spotify/hooks/useSpotifyPlaylist"
import styled from "styled-components"
import { SpotifyPlaylistItem } from "./spotify-playlist-item"

export const SpotifyPlaylistSelector = (props: {
    isOpen: boolean,
    onClose: () => void,
    onSelect?: (playlist: SpotifyApi.PlaylistObjectFull) => void
}) => {
    const { theme } = useTheme()
    const playlists = useSpotifyPlaylist()
    const isMobile = useMediaQuery('(max-width: 600px)')
    if (!playlists) {
        return <></>
    }

    return (
        <PlaylistContainer
            isOpen={props.isOpen}
            way={'column'} 
            justifyContent={'space-between'} 
            background={theme.color.base} 
            position={'absolute'}
            width={isMobile ? '100vw' : 'auto'}
            height={isMobile ? 'calc(100vh - 40px)' : '100vh'} 
            padding={isMobile ? '0' : '2em 4em 1em 2em'} 
            radius={'20px'}
            overflow={{x: 'hidden'}}
        >
            <PlaylistHeader
                width={'100%'}
                way={'row'} 
                alignItems={isMobile ? 'center' : 'flex-start'}
                justifyContent={'space-between'}
                wrap={'nowrap'}
                padding={isMobile ? '1.5em 1em 2em 1em' : '0'} 
                background={theme.color.base}
            >
                <Box opacity={'0'}>
                    <Word size={modulerScale(-3)} weight={'500'} color={theme.color.main}>キャンセル</Word>
                </Box>
                <Word size={modulerScale(-2)} weight={'600'} color={theme.color.main}>プレイリストを再生する</Word>
                <Box cursor={'pointer'}>
                   <Word size={modulerScale(-3)} weight={'500'} color={theme.color.main} onClick={() => { props.onClose() }}>キャンセル</Word> 
                </Box>
            </PlaylistHeader>
            <FlexBox 
                maxWidth={isMobile ? '100%' : "25vw"} 
                minWidth={isMobile ? '100%' : "240px"}
                height={isMobile ? 'calc(100vh - 40px)' : '80vh'}
                padding={'0 1em'}
                way={'column'} 
                gap={'6px'} 
                overflow={{x: 'hidden', y: 'scroll'}}
            >
                {playlists.map(playlist => (
                    <SpotifyPlaylistItem 
                        playlist={playlist} 
                        onSelect={(p) => {
                            if (props.onSelect) {
                                props.onSelect(p)
                            }
                        }}
                    />
                ))}
            </FlexBox>
        </PlaylistContainer>
    )
}

const PlaylistContainer = styled(FlexBox)<{isOpen: boolean}>`
    transition: 0.3s;
    transition-timing-function: cubic-bezier(.42,0,.58,1);
    top: 0;
    right: 0;
    filter: drop-shadow(-14px 0px 16px rgba(108,108,114,0.6));
    transform: translateX(${props => props.isOpen ? '2em' : '100%'});

    @media (max-width: 600px) {
        transition: 0.3s;
        top: 0;
        transform: translateY(${props => props.isOpen ? '40px' : '100vh'});
        right: 0;
        pointer-events: ${props => props.isOpen ? 'all' : 'none'};
    }
`

const PlaylistHeader = styled(FlexBox)`
    filter: drop-shadow(0px 2px 7px rgba(244,244,244,0.6));
    transform: translateZ(0);
`

const CancelBox = styled(Box)`
    display: none;

    @media (max-width: 600px) {
        display: block;
        position: absolute;
        right: 1em;
    }
`