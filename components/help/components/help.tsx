import { FlexBox } from "shared/elements/box/flex"
import { HelpContents } from "./help-contents"
import { HelpNavigation } from "./help-navigation"

export const Help = () => {
    return (
        <FlexBox
            way={'row'} 
            width={'100%'} 
            height={'100%'} 
            padding={'0 6em'}
            alignItems={'center'}
        >
            <HelpNavigation />
            <HelpContents />
        </FlexBox>
    )
}