import { FlexBox } from "shared/elements/box/flex"
import useMediaQuery from "shared/hooks/useMediaQuery"
import { HelpContents } from "./help-contents"
import { HelpNavigation } from "./help-navigation"

export const Help = () => {
    const isMQ = useMediaQuery()
    return (
        <FlexBox
            way={isMQ ? 'column' : 'row'} 
            width={'100%'} 
            height={'100%'} 
            padding={isMQ ? '0 1em' : '0 6em'}
            alignItems={isMQ ? 'flex-start' : 'center'}
        >
            <HelpNavigation />
            <HelpContents />
        </FlexBox>
    )
}