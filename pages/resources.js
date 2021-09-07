import Head from 'next/head'
import Hero from '../components/Hero'
import NewsCard from '../components/NewsCard'

export default function Home() {
	const right = false
	return (
		<>
			<Head>
				<title>Resources - Elysium</title>
			</Head>
			<Hero backgroundImage="resources">
				<h1>Elysium Resources</h1>
				<h2>Useful information for our developers and users</h2>
			</Hero>
			<NewsCard
				title="Become a Developer"
				phrase="It only take a few minutes."
				description="Once we receive your application, our team will thoroughly review it and get back to you within 24 hours."
				buttonText="Apply now"
				buttonLink="/become-developer"
				accentColor="#47afcf"
			>
				<div className="graphic-container">
					<div className="gc-grid">
						<div className="grey-blur"></div>
						<div className="grey-blur"></div>
						<div className="grey-blur"></div>
						<div className="grey-blur"></div>
					</div>
				</div>
			</NewsCard>
			<NewsCard
				left={right}
				title="Developer API"
				phrase="An easy to use API for our developers."
				description="We have excellent API documentation so that our developers can excel when creating new packages."
				buttonLink="/api"
				accentColor="#EB4E66"
			>
				<div className="graphic-container">
					<div className="gc-list">
						<div className="grey-blur long"></div>
						<div className="grey-blur short"></div>
						<div className="grey-blur medium"></div>
						<div className="grey-blur long"></div>
						<div className="grey-blur medium"></div>
						<div className="grey-blur short"></div>
						<div className="grey-blur short"></div>
						<div className="grey-blur long"></div>
					</div>
				</div>
			</NewsCard>
			<NewsCard
				title="Changelog"
				phrase="See how we are constantly improving Elysium."
				description="Here at Elysium, we are constantly improving our services. Take a look at how our repository has progressed since it's inception."
				buttonText="View changelog"
				buttonLink="/changelog"
				accentColor="#59C031"
			>
				<div className="graphic-container">
					<div className="gc-list">
						<div className="flex">
							<div className="grey-blur short"></div>
							<div className="grey-blur tiny"></div>
						</div>
						<div className="grey-blur long"></div>

						<div className="grey-blur short"></div>
						<div className="grey-blur medium"></div>
						<div className="grey-blur short"></div>
						<div className="grey-blur medium"></div>
						<div className="grey-blur long"></div>
					</div>
				</div>
			</NewsCard>
			<style jsx>{`
				.graphic-container {
					background-image: url('/assets/backgrounds/home.png');
					background-size: cover;
					background-position: center;
					width: 400px;
					height: 300px;
					border-radius: 1em;
					display: flex;
					align-items: center;
					justify-content: center;
				}
				.gc-grid,
				.gc-list {
					width: 80%;
					height: 80%;
				}
				.gc-grid {
					display: grid;
					grid-template-columns: repeat(2, 1fr);
					gap: 1.5em;
				}
				.gc-grid div {
					border-radius: 1em;
				}
				.gc-list div {
					height: 20px;
					border-radius: 10px;
					margin-top: 10px;
				}
				.gc-list div:first-of-type {
					margin-top: none;
				}
				.flex {
					display: flex;
					justify-content: space-between;
					margin-bottom: 30px;
				}
				.flex div {
					margin: 0;
					margin-bottom: 10px;
				}
				.tiny {
					width: 25%;
				}
				.short {
					width: 50%;
				}
				.medium {
					width: 75%;
				}
			`}</style>
		</>
	)
}
