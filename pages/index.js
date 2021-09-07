import Link from 'next/link'
import Head from 'next/head'
import Hero from '../components/Hero'
import TweakFeature from '../components/TweakFeature'

export default function Home() {
	return (
		<>
			<Head>
				<title>Elysium</title>
			</Head>
			<Hero>
				<h1>Welcome to Elysium.</h1>
				<h2>The perfect paradise for tweaks, themes, tools, and you.</h2>
				<Link href="/addsource">
					<a className="arrow-link">
						<div className="al-text">Add Source</div>
						<div className="right-chevron">
							<svg
								version="1.1"
								id="Capa_1"
								xmlns="http://www.w3.org/2000/svg"
								xlink="http://www.w3.org/1999/xlink"
								x="0px"
								y="0px"
								viewBox="0 0 256 256"
								style={{ enableBackground: 'new 0 0 256 256' }}
								space="preserve"
							>
								<g>
									<g>
										<polygon points="79.093,0 48.907,30.187 146.72,128 48.907,225.813 79.093,256 207.093,128 		" />
									</g>
								</g>
							</svg>
						</div>
					</a>
				</Link>
			</Hero>
			<TweakFeature>
				<h1 className="ft-name">Pigment</h1>
				<h3 className="ft-phrase">Add some color to your device.</h3>
				<h3 className="ft-description">
					With Pigment, you have the ability to colorize notifications, widgets, and the lockscreen player to
					match the artwork or icon.
				</h3>
			</TweakFeature>
			<style jsx>{`
				h2 {
					max-width: 1000px;
					margin: 0 auto;
					margin-bottom: 28px;
				}
				h3 {
					font-size: 2em;
					font-weight: 400;
					margin: 0;
					color: white;
				}
				.ft-name {
					margin-top: 0;
				}
				.ft-name,
				.ft-phrase,
				.left .arrow-link {
					color: #ea4e66;
				}
			`}</style>
		</>
	)
}
