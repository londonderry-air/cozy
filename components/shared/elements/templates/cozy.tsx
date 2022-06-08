import { FlexBox } from "../box/flex"
import { CozySoundPanel } from "cozy/elements/cozy-sound-panel"
import { Cozy } from "cozy/types/sound"

export const CozyView = (props: {
    cozy: Cozy
}) => {
    return (
        <FlexBox 
            way={'row'}
            width={'100%'}
            height={'100%'}
            padding={'2em'}
            alignItems={'center'}
            justifyContent={'space-between'}
        >
            <FlexBox way={'column'} width={'45%'}></FlexBox>
            <FlexBox way={'column'} width={'45%'}>
                <CozySoundPanel sounds={props.cozy.sounds} />
            </FlexBox>
        </FlexBox>
    )
}