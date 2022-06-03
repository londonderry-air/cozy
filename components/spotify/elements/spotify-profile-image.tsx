import { Box } from "shared/elements/box/common"
import { Image } from "shared/elements/image/common"
import { useSpotifyUser } from "spotify/hooks/useSpotifyUser"

export const SpotifyProfileImage = () => {
    const user = useSpotifyUser()
    return (
        user ? (
            <Box 
                width={'45px'} 
                height={'45px'} 
                radius={'24px'} 
                overflow={{x: 'hidden', y: 'hidden'}}
            >
                <Image 
                    width={'45px'} 
                    height={'45px'} 
                    fit={'cover'} 
                    src={user.images ? user.images[0].url : '/images/spotify/spotify_white.png'} 
                />
            </Box>
        ) : <></>
    )
}