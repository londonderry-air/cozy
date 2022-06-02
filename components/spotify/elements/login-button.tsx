import Link from "next/link"
import { FlexBox } from "shared/elements/box/flex"
import { Image } from "shared/elements/image/image"
import { Word } from "shared/elements/text/common"
import { useTheme } from "shared/hooks/useTheme"
import { useSpotifyUser } from "spotify/hooks/useSpotifyUser"

export const SpotifyLoginButton = () => {
    const {theme} = useTheme()
    const user = useSpotifyUser()
    console.log(user)
    return (
        <Link href={'/api/spotify/auth/login'}>
            <FlexBox 
                way={'row'}
                gap={'0.8em'}
                width={'fit-content'}
                height={'50px'}
                radius={'25px'}
                padding={"1em 1.5em"}
                background={user ? theme.color.main : theme.color.gray01}
                alignItems={'center'}
            >
                <Image 
                    width={'26px'}
                    height={'26px'}
                    fit={'cover'}
                    src={'/images/spotify/spotify_white.png'}
                />
                <Word size={'0.9em'} weight={'bold'} color={theme.color.base}>{user ? '接続済み' : '未接続'}</Word>
            </FlexBox>
        </Link>
    )
}