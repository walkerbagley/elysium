import Head from 'next/head'
import Hero from '../components/Hero'

export default function Home() {
	return (
		<>
			<Head>
				<title>Repo - Elysium</title>
			</Head>
			<Hero backgroundImage="repo">
				<h1>Elysium Repository</h1>
				<form action="search.php" method="post">
					<input
						type="text"
						name="searchbar"
						id="searchbar"
						placeholder="Search our repo..."
						className="grey-blur"
					></input>
				</form>
			</Hero>
			<div className="tweak-section section">
				<h2>Recently Updated</h2>
				<h2>Popular Tweaks</h2>
				<h2>Popular Themes</h2>
			</div>
			<style jsx>{`
				#searchbar {
					width: 45vw;
					max-width: 900px;
					min-width: 275px;
					margin-top: 1em;
					outline: none;
					border: none;
					font-size: 2em;
					padding: 0.7em 1em;
					border-radius: 0.5em;
					color: white;
				}
				#searchbar::placeholder {
					color: white;
					opacity: 50%;
				}
				@media screen and (max-width: 550px) {
					#searchbar {
						font-size: 1.5em;
					}
				}
			`}</style>
		</>
	)
}
