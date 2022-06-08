import { Cozy } from "cozy/types/sound"
import { FlexBox } from "shared/elements/box/flex"
import { MainH, Sentence } from "shared/elements/text/common"
import { modulerScale } from "shared/utils/typo"

export const CozyDetail = (props: {
    cozy: Cozy
}) => {
    return (
        <FlexBox way={'column'} width={'100%'} gap={'1em'}>
            <MainH 
                weight={'600'} 
                size={modulerScale(4)}
                h_space={'0.02em'}
            >{props.cozy.name}</MainH>
            <Sentence 
                weight={'600'} 
                size={modulerScale(-2)}
                h_space={'0.036em'}
                v_space={'1.6em'}
            >{props.cozy.description}</Sentence>
        </FlexBox>
    )
}