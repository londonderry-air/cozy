import { HelpBox } from "./help-box"
import { HelpQuestion } from "./help-question"
import { HelpSentence } from "./help-sentence"

export const HelpQuestions = () => {
    return (
        <HelpBox title={'よくある質問'} id={'question'}>
            <HelpQuestion question={'Spotify のスキップはできないの？'}>
                <HelpSentence>
                    {'COZYでは、プレイリストをお楽しみいただくことを重視してトラックのスキップ機能をオフにしています。今後のアップデートにて、トラックのスキップ機能をオプションとして追加する予定ではあります。プレイリストのセットリストも含めお楽しみいただけると幸いです。'}
                </HelpSentence>
            </HelpQuestion>
        </HelpBox>
    )
}