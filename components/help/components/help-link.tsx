import Link from "next/link"
import { Box } from "shared/elements/box/common"
import { Word } from "shared/elements/text/common"
import { useTheme } from "shared/hooks/useTheme"
import { modulerScale } from "shared/utils/typo"
import styled from "styled-components"

export const HelpLink = (props: {
    href: string,
    children: string
}) => {
    const { theme } = useTheme()
    return (
        <Word color={theme.color.main}>
            <_HelpLink href={props.href}>{props.children}</_HelpLink>
        </Word>
    )
}

const _HelpLink = styled.a`
    font-size: ${modulerScale(1)};
    font-weight: 600;
`