import { FlexBox } from "shared/elements/box/flex"
import useMediaQuery from "shared/hooks/useMediaQuery"
import { HelpHowToUse } from "./help-howtouse"
import { HelpIntroduction } from "./help-introduction"
import { HelpQuestions } from "./help-questions"
import { HelpSpotify } from "./help-spotify"

export const HelpContents = () => {
    const isMQ = useMediaQuery()
    return (
        <FlexBox position={'relative'} width={'100%'} height={'100%'} overflow={{y: 'scroll'}} way={'column'} padding={isMQ ? '0' : '0 0 0 2em'}>
            <FlexBox position={'absolute'} way={'column'} padding={'4em 0 0 0 '}>
                <HelpIntroduction />
                <HelpHowToUse />
                <HelpSpotify />
                <HelpQuestions />
            </FlexBox>
        </FlexBox>
    )
}