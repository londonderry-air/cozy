import { FlexBox } from "shared/elements/box/flex"
import { HelpLink } from "./help-link"

export const HelpNavigation = () => {
    return (
        <FlexBox way={'column'} width={'40%'} gap={'1em'}>
            <HelpLink href={'#introduction'}>COZYって？</HelpLink>
            <HelpLink href={'#howtouse'}>COZYの使い方</HelpLink>
            <HelpLink href={'#spotify'}>Spotifyの連携方法</HelpLink>
            <HelpLink href={'#question'}>よくある質問</HelpLink>
        </FlexBox>
    )
}