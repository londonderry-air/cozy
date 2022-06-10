import { FlexBox } from "shared/elements/box/flex"
import useMediaQuery from "shared/hooks/useMediaQuery"
import styled from "styled-components"
import { HelpLink } from "./help-link"

export const HelpNavigation = () => {
    const isMQ = useMediaQuery()
    return (
        <HelpNavigationBox way={isMQ ? 'row' : 'column'} width={isMQ ? '100%' : '40%'} gap={'1em'}>
            <HelpLink href={'#introduction'}>COZYって？</HelpLink>
            <HelpLink href={'#howtouse'}>COZYの使い方</HelpLink>
            <HelpLink href={'#spotify'}>Spotifyの連携方法</HelpLink>
            <HelpLink href={'#question'}>よくある質問</HelpLink>
        </HelpNavigationBox>
    )
}

export const HelpNavigationBox = styled(FlexBox)`
    @media (max-width: 600px) {
        display: none;
    }
`