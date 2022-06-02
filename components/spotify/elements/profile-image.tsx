import { Box } from "shared/elements/box/common"
import { Image } from "shared/elements/image/image"
import { useSpotifyUser } from "spotify/hooks/useSpotifyUser"

export const SpotifyProfileImage = () => {
    const user = useSpotifyUser()
    return (
        user ? (
            <Box 
                width={'48px'} 
                height={'48px'} 
                radius={'24px'} 
                overflow={{x: 'hidden', y: 'hidden'}}
            >
                <Image 
                    width={'48px'} 
                    height={'48px'} 
                    fit={'cover'} 
                    src={user.images ? user.images[0].url : '/images/spotify/spotify_white.png'} 
                />
            </Box>
        ) : <></>
    )
}