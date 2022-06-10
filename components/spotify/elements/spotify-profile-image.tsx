import { BorderBox } from "shared/elements/box/border"
import { Image } from "shared/elements/image/common"
import { useTheme } from "shared/hooks/useTheme"
import { useSpotifyUser } from "spotify/hooks/useSpotifyUser"

export const SpotifyProfileImage = () => {
    const user = useSpotifyUser()
    const { theme } = useTheme()
    return (
        user ? (
            <BorderBox 
                width={'46px'} 
                height={'46px'} 
                radius={'23px'} 
                overflow={{x: 'hidden', y: 'hidden'}}
                borderPosition={'all'}
                borderWidth={'2px'}
                borderColor={theme.color.main}
                borderStyle={'solid'}
            >
                <Image 
                    width={'42px'} 
                    height={'42px'} 
                    fit={'cover'} 
                    src={user.images ? user.images[0].url : '/images/spotify/spotify_white.png'} 
                />
            </BorderBox>
        ) : <></>
    )
}