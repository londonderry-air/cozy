import { FlexBox } from "shared/elements/box/flex"
import { Word } from "shared/elements/text/common"
import { SpotifyLoginButton } from "spotify/elements/spotify-login-button"
import { SpotifyProfileImage } from "spotify/elements/spotify-profile-image"

export const page = () => {
    return (
        <FlexBox way={'column'}>
            <Word weight={'600'}>Spotifyと連携する</Word>
            <SpotifyLoginButton/>
            <SpotifyProfileImage/>
        </FlexBox>
    )
}

export default page