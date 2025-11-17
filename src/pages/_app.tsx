import type { ReactElement, ReactNode } from 'react'
import type { NextPage } from 'next'
import { type AppType, AppProps } from 'next/app'
import DefaultLayout from '../layout/default';
import { Raleway, Bodoni_Moda } from '@next/font/google';
import '../styles/css/styles.css'

const raleway = Raleway({
    subsets: ['latin'],
    weight: ['400', '500', '700']
});

const bodoniModa = Bodoni_Moda({
    subsets: ['latin'],
    weight: ['400', '500', '700']
});

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
    getLayout?: (page: ReactElement) => ReactNode
}
 
type AppPropsWithLayout = AppProps & {
    Component: NextPageWithLayout
}

const App: AppType = ({ Component, pageProps }: AppPropsWithLayout) => {
    const getLayout = Component.getLayout ?? ((page) => <DefaultLayout>{page}</DefaultLayout>);

    return getLayout(<Component {...pageProps} />);
};

export default App;