import Link from "next/link"
import styled from "styled-components"
import { useRouter } from "next/router"
import { Box } from "shared/elements/box/common"
import { Image } from "shared/elements/image/common"
import { useTheme } from "shared/hooks/useTheme"

export const AppIconLink = (props: {
    name: string,
    icon: string,
    isActive: boolean
}) => {
    const router = useRouter()
    const isVisible = router.pathname === `/${props.name}`
    const {theme} = useTheme()
    return (
        <Link href={`/${props.name.toLocaleLowerCase()}`}>
            <LinkBox 
                isVisible={isVisible} 
                color={theme.color.main} 
                boxSizing={'border-box'}
                padding={'8px'} 
                radius={'6px'} 
                opacity={isVisible ? '1' : '0.3'}
            >
                <Image
                    width={'30px'}
                    height={'30px'}
                    fit={'cover'}
                    src={props.icon}
                />
            </LinkBox>
        </Link>
    )
}

const LinkBox = styled(Box)<{isVisible: boolean, color: string}>`
    border: solid 3px ${props => props.isVisible ? props.color : 'transparent'};
`