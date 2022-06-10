import { CozySoundPanel } from "cozy/elements/cozy-sound-panel"
import { cozySounds } from "cozy/utils/variable/sound"
import { FitImage } from "shared/elements/image/fit"
import { HelpBox } from "./help-box"
import { HelpSentence } from "./help-sentence"

export const HelpHowToUse = () => {
    return (
        <HelpBox title={'COZYの操作方法'} id={'howtouse'}>
            <HelpSentence>
                {'環境音は、以下のパネルから利用可能です。\nそれぞれの音は画面右側にある６つのボタンからそれぞれ再生いただけます。'}
            </HelpSentence>
            <FitImage 
                width={'100%'}
                height={'auto'}
                src={'/images/help/cozy-sound-button.png'}
            />
            <HelpSentence>
                {'ボタンをクリックもしくはタップすることで、音を再生・停止することが可能です。再生されている音は、停止をしない限りエンドレスに流れ続けます。また、再生されている状態のボタンを上下にドラッグすることでボリュームを調整することが可能です。ボリュームは上にドラッグすることで上がり、下にドラッグすることで下がります。それぞれの音のボリュームはボタンの周りの黒いインジケーターで確認することができます。\n下のサンプルから試してみてください！（実際に音が出るためご注意ください）'}
            </HelpSentence>
            <CozySoundPanel sounds={cozySounds} />
        </HelpBox>
    )
}