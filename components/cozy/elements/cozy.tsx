import { FlexBox } from "../../shared/elements/box/flex"
import { CozySoundPanel } from "cozy/elements/cozy-sound-panel"
import { Cozy } from "cozy/types/sound"
import { CozyDetail } from "./cozy-detail"
import { CozySpotifyRecommender } from "./cozy-recommend-spotify"
import { Spacer } from "shared/elements/spacer/common"
import { useTheme } from "shared/hooks/useTheme"
import { SpotifyPlaylist } from "spotify/elements/spotify-playlist"
import styled from "styled-components"
import useMediaQuery from "shared/hooks/useMediaQuery"

export const CozyView = (props: {
    cozy: Cozy
}) => {
    const { theme } = useTheme()
    const isMQ = useMediaQuery()
    return (
        <FlexBox 
            way={'row'}
            width={'100%'}
            height={'100%'}
            padding={'0 4em'}
            alignItems={'center'}
            justifyContent={'space-between'}
        >
            <CozyLeftBox way={'column'} width={'45%'}>
                <CozyDetail cozy={props.cozy} />
                <Spacer 
                    margin={'2.5em 0 2.5em 0'} 
                    color={theme.color.main}
                    borderStyle={'solid'}
                    borderWidth={'2px'}
                />
                <CozySpotifyRecommender />
            </CozyLeftBox>
            <FlexBox way={'column'} width={isMQ ? '100%' : '45%'} gap={'2em'}>
                <CozySoundPanel sounds={props.cozy.sounds} />
                <SpotifyPlaylist />
            </FlexBox>
        </FlexBox>
    )
}

const CozyLeftBox = styled(FlexBox)`
    @media (max-width: 600px) {
        display: none;
    }
`