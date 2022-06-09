import { FlexBox } from "../../shared/elements/box/flex"
import { CozySoundPanel } from "cozy/elements/cozy-sound-panel"
import { Cozy } from "cozy/types/sound"
import { CozyDetail } from "./cozy-detail"
import { CozySpotifyRecommender } from "./cozy-recommend-spotify"
import { Spacer } from "shared/elements/spacer/common"
import { useTheme } from "shared/hooks/useTheme"
import { BorderBox } from "shared/elements/box/border"
import { SpotifyPlaylist } from "spotify/elements/spotify-playlist"

export const CozyView = (props: {
    cozy: Cozy
}) => {
    const { theme } = useTheme()
    return (
        <FlexBox 
            way={'row'}
            width={'100%'}
            height={'100%'}
            padding={'0 4em'}
            alignItems={'center'}
            justifyContent={'space-between'}
        >
            <FlexBox way={'column'} width={'45%'}>
                <CozyDetail cozy={props.cozy} />
                <Spacer 
                    margin={'2.5em 0 2.5em 0'} 
                    color={theme.color.main}
                    borderStyle={'solid'}
                    borderWidth={'2px'}
                />
                <CozySpotifyRecommender />
            </FlexBox>
            <FlexBox way={'column'} width={'45%'} gap={'2em'}>
                <CozySoundPanel sounds={props.cozy.sounds} />
                <SpotifyPlaylist />
            </FlexBox>
        </FlexBox>
    )
}