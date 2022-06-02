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
                    <AppIconLink name={'test'} icon={'/images/cafe.png'} isActive={false} />
                    <AppIconLink name={'CAFE'} icon={'/images/cafe.png'} isActive={false} />
                    <AppIconLink name={'CAFE'} icon={'/images/cafe.png'} isActive={false} />
                    <AppIconLink name={'CAFE'} icon={'/images/cafe.png'} isActive={false} />
                    <AppIconLink name={'CAFE'} icon={'/images/cafe.png'} isActive={false} />
                </FlexBox>
                <FlexBox way={'column'} alignItems={'center'} gap={'1em'}>
                    <AppIconLink name={'settings'} icon={'/images/cozy/settings.png'} isActive={false} />
                </FlexBox>
            </FlexBox>
        </MenuBox>
    )
}

const MenuBox = styled(Box)`
    border-right: solid 2px #E2E1E6;
`