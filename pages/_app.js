import App from 'next/app'
import Head from 'next/head'
import { parseCookies } from 'nookies'
import Modal from 'react-modal'

import Navbar from '../components/Navbar'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

Modal.setAppElement('#__next')

export default function CustomApp({ Component, pageProps, userInfo }) {
	return (
		<>
			<Head>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<style jsx global>{`
				* {
					box-sizing: border-box;
				}

				html {
					background-color: #2e2e2e;
					font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell;
					color: #ffffff;
				}

				body {
					margin: 0;
					padding: 0;
				}

				h1,
				h2 {
					margin: 0;
					margin-block-start: 0;
					margin-block-end: 0;
				}

				svg {
					fill: white;
					width: 20px;
					height: 20px;
				}

				h1 {
					font-weight: 500;
					font-size: 72px;
					margin-bottom: 28px;
				}

				h2 {
					font-weight: 500;
					font-size: 48px;
					margin-bottom: 28px;
				}

				a {
					text-decoration: none;
				}

				.section {
					padding: 0 5vw;
					margin-top: 20px;
				}

				.arrow-link {
					color: white;
					font-size: 1.5em;
					text-decoration: none;
					display: flex;
					align-items: center;
					justify-content: center;
				}
				.right-chevron {
					margin-left: 0.2em;
					margin-top: 0.15em;
					transition: margin-left 0.2s ease;
				}
				.arrow-link:hover .right-chevron {
					margin-left: 0.5em;
				}

				// Walker's version
				.grey-blur {
					background-color: #00000040;
					backdrop-filter: blur(10px);
				}
				.default-vibrant-background {
					background-color: rgba(0, 0, 0, 0.4);
					backdrop-filter: blur(10px);
				}

				.ReactModal__Overlay {
					background-color: rgba(0, 0, 0, 0.65) !important;
					display: flex;
					justify-content: center;
					align-items: center;
				}

				.ReactModal__Content {
					position: static !important;
					border: 0 none !important;
					border-radius: 15px !important;
					background-color: rgba(0, 0, 0, 0.4) !important;
					backdrop-filter: blur(10px);
				}

				@media screen and (max-width: 450px){
					h1{
						font-size: 4em;
					}
					h2{
						font-size: 2em;
					}]
				}
			`}</style>
			{/* <Navigation defaultUserInfo={userInfo} /> */}
			<Navbar />
			<Component {...pageProps} />
			<Footer />
		</>
	)
}

CustomApp.getInitialProps = async (appContext) => {
	// calls page's `getInitialProps` and fills `appProps.pageProps`
	const appProps = await App.getInitialProps(appContext)

	const userInfo = parseCookies(appContext.ctx).userInfo

	return { ...appProps, userInfo }
}
