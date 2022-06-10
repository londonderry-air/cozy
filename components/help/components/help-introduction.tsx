import { HelpBox } from "./help-box"
import { HelpSentence } from "./help-sentence"

export const HelpIntroduction = () => {
    return (
        <HelpBox title={'COZYって？'} id={'introduction'}>
            <HelpSentence>
                {'COZYは、複数の音を組み合わせて、お好みの環境音を作成いただけるアプリケーションです。\n音の選択や音量の調節をすることで、お気に入りの環境音を作ってみてください。\nまた、Spotifyと連携することでお好きなプレイリストも同時にお楽しみいただくことができます。（Spotify有料会員限定）'}
            </HelpSentence>
        </HelpBox>
    )
}