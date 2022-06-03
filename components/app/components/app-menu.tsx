import { Box } from "shared/elements/box/common"
import { FlexBox } from "shared/elements/box/flex"
import { useTheme } from "shared/hooks/useTheme"
import styled from "styled-components"
import { AppIconLink } from "./app-icon-link"

export const AppMenu = () => {
    const {theme} = useTheme()

    return (
        <MenuBox height={'100%'} padding={'2em 1.5em 1em 1.5em'}>
            <FlexBox height={'100%'} way={'column'} justifyContent={'space-between'}>
                <FlexBox way={'column'} alignItems={'center'} gap={'1em'}>
                    <AppIconLink href={'/test'} icon={'/images/cafe.png'} />
                    <AppIconLink href={'/cafe'} icon={'/images/cafe.png'} />
                    <AppIconLink href={'/cafe'} icon={'/images/cafe.png'} />
                    <AppIconLink href={'/cafe'} icon={'/images/cafe.png'} />
                    <AppIconLink href={'/cafe'} icon={'/images/cafe.png'} />
                </FlexBox>
                <FlexBox way={'column'} alignItems={'center'} gap={'1em'}>
                    <AppIconLink href={'/settings'} icon={'/images/cozy/settings.png'} />
                </FlexBox>
            </FlexBox>
        </MenuBox>
    )
}

const MenuBox = styled(Box)`
    border-right: solid 2px #E2E1E6;

    @media (max-width: 600px) {
        display: none;
    }
`