import { Box } from "shared/elements/box/common"
import { FlexBox } from "shared/elements/box/flex"
import { Image } from "shared/elements/image/common"
import useMediaQuery from "shared/hooks/useMediaQuery"
import { useTheme } from "shared/hooks/useTheme"
import { SpotifyLoginButton } from "spotify/elements/spotify-login-button"
import { SpotifyProfileImage } from "spotify/elements/spotify-profile-image"
import styled from "styled-components"
import { AppIconLink } from "./app-icon-link"

export const AppHeader = () => {
    const {theme} = useTheme()
    const isMobile = useMediaQuery('(max-width: 600px)');
    return (
        <HeaderBox background={theme.color.base} width="100%" padding={isMobile ? '1em 10px' : '1em 2em'}>
            <FlexBox way={'row'} alignItems={'center'} justifyContent={'space-between'}>
                <FlexBox way={'row'}></FlexBox>
                <FlexBox way={'row'} alignItems={'center'} gap={isMobile ? '1em' : '1em'}>
                    <SpotifyProfileImage/>
                    {isMobile ? (
                        <>
                            <AppIconLink width={'40px'} height={'40px'} href={'/help'} icon={'/images/cozy/question.png'} />
                            <AppIconLink width={'40px'} height={'40px'} href={'/settings'} icon={'/images/cozy/settings.png'}/>
                        </>
                    ) : (
                        <SpotifyLoginButton/>
                    )}
                </FlexBox>
            </FlexBox>
        </HeaderBox>
    )
}

const HeaderBox = styled(Box)`
    border-bottom: solid 2px #E2E1E6;
`