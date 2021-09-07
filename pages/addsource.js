import Link from 'next/link'
import Head from 'next/head'
import Hero from '../components/Hero'

export default function addsource() {
	return (
		<>
			<Head>
				<title>Add Source - Elysium</title>
			</Head>
			<Hero backgroundImage="repo">
				<h1>Add Our Repository</h1>
				<h2>Use the buttons below to add Elysium to your favorite package manager.</h2>
				<div className="as-button-group">
					<a
						href="cydia://url/https://cydia.saurik.com/api/share#?source=https://elysiumrepo.com"
						target="_blank"
						className="as-button grey-blur"
					>
						Cydia
					</a>
					<a href="sileo://source/https://elysiumrepo.com" target="_blank" className="as-button grey-blur">
						Sileo
					</a>
					<a
						href="zbra://sources/add/https://elysiumrepo.com"
						target="_blank"
						className="as-button grey-blur"
					>
						Zebra
					</a>
					<a href="installer://add/https://elysiumrepo.com/" target="_blank" className="as-button grey-blur">
						Installer
					</a>
				</div>
			</Hero>
			<style jsx>{`
				.as-button-group {
					display: grid;
					grid-template-columns: repeat(4, 180px);
					margin: 0 auto;
				}
				.as-button {
					margin: 0 0.8em;
					padding: 1.2em 0;
					border-radius: 1em;
					font-size: 1.5em;
					color: white;
					transition: background-color 0.2s ease;
				}
				.as-button:hover {
					background-color: #00000020;
				}
				@media screen and (max-width: 850px) {
					.as-button-group {
						grid-template-columns: repeat(2, 170px);
						row-gap: 2em;
					}
				}
			`}</style>
		</>
	)
}
