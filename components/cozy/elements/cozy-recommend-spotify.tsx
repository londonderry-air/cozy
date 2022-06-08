import { FlexBox } from "shared/elements/box/flex"
import { Sentence, Word } from "shared/elements/text/common"
import { modulerScale } from "shared/utils/typo"
import { SpotifyLoginButton } from "spotify/elements/spotify-login-button"

export const CozySpotifyRecommender = () => {
    return (
        <FlexBox way={'column'} gap={'2em'}>
            <FlexBox way={'column'} gap={'1em'}>
            <Word 
                weight={'600'} 
                h_space={'0.02em'}
                size={modulerScale(1)}
            >好きなプレイリストと一緒に楽しむ</Word>
            <Sentence weight={'600'} 
                h_space={'0.03em'}
                v_space={'1.6em'}
                size={modulerScale(-3)}>
                COZYでは、Spotifyと連携することで好きなプレイリストを環境音と共にお楽しみいただくことができます。（連携するには有料会員である必要があります。）
            </Sentence>
            </FlexBox>
            <SpotifyLoginButton />
        </FlexBox>
    )
}