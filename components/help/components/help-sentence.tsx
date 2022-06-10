import { Sentence } from "shared/elements/text/common"
import { modulerScale } from "shared/utils/typo"

export const HelpSentence = (props: {
    children: string
}) => {
    return (
        <Sentence size={modulerScale(-1)} v_space={'2em'} h_space={'0.024em'} weight={'400'}>
            {props.children}
        </Sentence>
    )
}