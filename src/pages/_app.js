import RootLayout from '@/Components/layout'

export default function MyApp({ Component, pageProps: { session, ...pageProps } }) {
    return (

        <RootLayout>
            <Component {...pageProps} />
        </RootLayout>
    )
}
