import Head from 'next/head'
import Hero from '../components/Hero'
import ErrorBar from '../components/ErrorBar'

export default function Custom404() {
	return (
		<>
			<Head>
				<title>404 Error - Elysium</title>
			</Head>
			<ErrorBar />
			<Hero backgroundImage="error" isError="true">
				<img src="/assets/icons/ConorTheClown.png"></img>
				<h2 className="error-descriptor">Stop clowning around, this page doesn't exist!</h2>
			</Hero>
			<style>{`
				img{
					width: 200px;
					height: auto;
					margin: 0 auto;
				}
			`}</style>
		</>
	)
}
