import { Box } from "shared/elements/box/common"
import { FlexBox } from "shared/elements/box/flex"
import { Word } from "shared/elements/text/common"
import { useTheme } from "shared/hooks/useTheme"
import { modulerScale } from "shared/utils/typo"

export const HelpQuestion = (props: {
    question: string,
    children: React.ReactNode
}) => {
    const { theme } = useTheme()
    return (
        <FlexBox way={'column'} maxWidth={'60ch'} gap={'0.5em'}>
            <FlexBox way={'row'} alignItems={'baseline'}>
                <FlexBox way={'column'} width={'10ch'} shrink={'0'}>
                    <Word
                        size={modulerScale(-1)}
                        weight={'600'}
                        v_space={'2em'}
                        color={theme.color.gray05}
                    >Question</Word>
                </FlexBox>
                <Word
                    size={modulerScale(0)}
                    color={theme.color.main}
                    v_space={'2em'}
                    weight={'600'}
                >{props.question}</Word>
            </FlexBox>
            <FlexBox way={'row'} alignItems={'baseline'}>
                <FlexBox way={'column'} width={'10ch'} shrink={'0'}>
                    <Word
                        size={modulerScale(-1)}
                        weight={'600'}
                        v_space={'2em'}
                        color={theme.color.gray05}
                    >Answer</Word>
                </FlexBox>
                <Box>{props.children}</Box>
            </FlexBox>
        </FlexBox>
    )
}