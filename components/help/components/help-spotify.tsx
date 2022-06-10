import { FitImage } from "shared/elements/image/fit"
import { HelpBox } from "./help-box"
import { HelpSentence } from "./help-sentence"

export const HelpSpotify = () => {
    return (
        <HelpBox title={'Spotifyの連携方法'} id={'spotify'}>
            <HelpSentence>
                {'COZYは、Spotifyと連携することでお好きなプレイリストと一緒にお楽しみいただくことができます。'}
            </HelpSentence>
            <FitImage 
                width={'100%'}
                height={'auto'}
                src={'/images/help/spotify-player.png'}
            />
            <HelpSentence>
                {'Spotifyと連携するには、「未接続」と書いてあるボタンをクリックすることで認証画面へと移動します。現在のログイン状態は、画面右上にあるログインボタンから確認可能です。ログイン・未ログイン状態でそれぞれ以下のように表示されています。ログインしている場合、「接続済み」というボタンと共にログインしているSpotifyユーザーのプロフィール画像が左に表示されます。'}
            </HelpSentence>
            <FitImage 
                width={'100%'}
                height={'auto'}
                src={'/images/help/spotify-login.png'}
            />
        </HelpBox>
    )
}