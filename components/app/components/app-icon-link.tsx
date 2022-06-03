import Link from "next/link"
import styled from "styled-components"
import { useRouter } from "next/router"
import { Box } from "shared/elements/box/common"
import { Image } from "shared/elements/image/common"
import { useTheme } from "shared/hooks/useTheme"

export const AppIconLink = (props: {
    width?: string,
    height?: string,
    href: string,
    icon: string,
}) => {
    const router = useRouter()
    const isVisible = router.pathname === `${props.href}`
    const {theme} = useTheme()
    return (
        <Link href={`${props.href.toLocaleLowerCase()}`}>
            <LinkBox 
                isVisible={isVisible} 
                color={theme.color.main} 
                boxSizing={'border-box'}
                padding={'8px'} 
                radius={'6px'} 
                opacity={isVisible ? '1' : '0.3'}
            >
                <Image
                    width={props.width ?? '30px'}
                    height={props.height ?? '30px'}
                    fit={'cover'}
                    src={props.icon}
                />
            </LinkBox>
        </Link>
    )
}

const LinkBox = styled(Box)<{isVisible: boolean, color: string}>`
    border: solid 3px ${props => props.isVisible ? props.color : 'transparent'};

    @media (max-width: 600px) {
        padding: 0;
        border-radius: 0;
        opacity: 1;
    }
`