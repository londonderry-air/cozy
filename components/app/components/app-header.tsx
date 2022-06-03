import { Box } from "shared/elements/box/common"
import { FlexBox } from "shared/elements/box/flex"
import { useTheme } from "shared/hooks/useTheme"
import { SpotifyLoginButton } from "spotify/elements/spotify-login-button"
import { SpotifyProfileImage } from "spotify/elements/spotify-profile-image"
import styled from "styled-components"

export const AppHeader = () => {
    const {theme} = useTheme()
    return (
        <HeaderBox background={theme.color.base} width="100%" padding='1em 2em'>
            <FlexBox way={'row'} alignItems={'center'} justifyContent={'space-between'}>
                <FlexBox way={'row'}></FlexBox>
                <FlexBox way={'row'} alignItems={'center'} gap={'1em'}>
                    <SpotifyProfileImage/>
                    <SpotifyLoginButton/>
                </FlexBox>
            </FlexBox>
        </HeaderBox>
    )
}

const HeaderBox = styled(Box)`
    border-bottom: solid 2px #E2E1E6;
`