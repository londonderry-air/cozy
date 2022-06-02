import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { RecoilRoot } from "recoil";
import { AppBox } from 'components/app/components/app-box';
import { AppHeader } from 'components/app/components/app-header';
import { AppMenu } from 'components/app/components/app-menu';
import { FlexBox } from 'shared/elements/box/flex';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <AppBox>
        <AppHeader/>
        <FlexBox way={'row'} grow={'9999'}>
          <AppMenu />
          <FlexBox height={'100%'} way={'column'} grow={'9999'}>
            <Component {...pageProps} />
          </FlexBox>
        </FlexBox>
      </AppBox>
    </RecoilRoot>
)
}
export default MyApp
