import { Box } from "shared/elements/box/common"
import { useTheme } from "shared/hooks/useTheme"
import { SpotifyLoginButton } from "spotify/elements/login-button"

export const page = () => {
    const { theme } = useTheme()
    return (
        <Box background={theme.color.base} width={'100vw'} height={'100vh'}>
            <SpotifyLoginButton></SpotifyLoginButton>
        </Box>
    )
}

export default page