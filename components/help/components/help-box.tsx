import { FlexBox } from "shared/elements/box/flex"
import { LargeH } from "shared/elements/text/common"
import { modulerScale } from "shared/utils/typo"

export const HelpBox = (props: {
    title: string,
    id: string,
    children: React.ReactNode
}) => {
    return (
        <FlexBox id={props.id} way={'column'} gap={'1.5em'} margin={'0 0 4em 0'} maxWidth={'60ch'}>
            <LargeH size={modulerScale(3)}>{props.title}</LargeH>
            <FlexBox way={'column'} gap={'1.5em'}>
                {props.children}
            </FlexBox>
        </FlexBox>
    )
}