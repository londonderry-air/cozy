import { FlexBox } from "../../shared/elements/box/flex"
import { CozySoundPanel } from "cozy/elements/cozy-sound-panel"
import { Cozy } from "cozy/types/sound"
import { CozyDetail } from "./cozy-detail"
import { CozySpotifyRecommender } from "./cozy-recommend-spotify"
import { Box } from "shared/elements/box/common"
import { useTheme } from "shared/hooks/useTheme"
import { BorderBox } from "shared/elements/box/border"

export const CozyView = (props: {
    cozy: Cozy
}) => {
    return (
        <FlexBox 
            way={'row'}
            width={'100%'}
            height={'100%'}
            padding={'4em'}
            alignItems={'center'}
            justifyContent={'space-between'}
        >
            <FlexBox way={'column'} width={'45%'}>
                <CozyDetail cozy={props.cozy} />
                <Spacer/>
                <CozySpotifyRecommender />
            </FlexBox>
            <FlexBox way={'column'} width={'45%'}>
                <CozySoundPanel sounds={props.cozy.sounds} />
            </FlexBox>
        </FlexBox>
    )
}

const Spacer = () => {
    const { theme } = useTheme()
    return (
        <BorderBox 
            margin={'2.5em 0 2.5em 0'}
            width={'100%'} 
            height={'0px'}
            borderPosition={'top'}
            borderWidth={'3px'}
            borderColor={theme.color.main}
            borderStyle={'dashed'}
        ></BorderBox>
    )
}