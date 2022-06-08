import { CozySound } from "cozy/types/sound"
import { FlexBox } from "shared/elements/box/flex"
import { useTheme } from "shared/hooks/useTheme"
import styled from "styled-components"
import { CozySoundButton } from "./cozy-sound-button"

export const CozySoundPanel = (props: {
    sounds: CozySound[]
}) => {
    const topSounds = props.sounds.length >= 3
        ? props.sounds.slice(0, 3)
        : props.sounds
    const bottomSounds = props.sounds.length >= 6
        ? props.sounds.slice(3, 6)
        : props.sounds.length > 3
            ? props.sounds.slice(3, props.sounds.length - 1)
            : []
    const { theme } = useTheme()
    return (
        <PanelBox 
            width={'100%'}
            gap={'2em'}
            padding={'2em'}
            boxSizing={'border-box'}
            way={'column'}
            alignItems={'center'}
            justifyContent={'center'}
            background={theme.color.base}
            radius={'30px'}
        >
            <FlexBox 
                width={'100%'}
                way={'row'}
                alignItems={'center'}
                justifyContent={'space-between'}
            >
                {topSounds.map(sound => (
                    <CozySoundButton sound={sound} />
                ))}
            </FlexBox>
            <FlexBox 
                width={'100%'}
                way={'row'}
                alignItems={'center'}
                justifyContent={'space-between'}
            >
                {bottomSounds.map(sound => (
                    <CozySoundButton sound={sound} />
                ))}
            </FlexBox>
        </PanelBox>
    )
}

const PanelBox = styled(FlexBox)`
    box-shadow:  5px 5px 13px #d9d9d9, -5px -5px 13px #ffffff;
`