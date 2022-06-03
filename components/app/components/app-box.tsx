import React from "react"
import { FlexBox } from "shared/elements/box/flex"
import { useTheme } from "shared/hooks/useTheme"

export const AppBox = (props: {children?: React.ReactNode}) => {
    const {theme} = useTheme()
    return (
        <FlexBox way={'column'} background={theme.color.base} width={'100%'} height={'100%'} overflow={{x: 'hidden', y: 'hidden'}}>
            {props.children}
        </FlexBox>
    )
}