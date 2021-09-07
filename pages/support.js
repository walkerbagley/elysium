import Head from 'next/head'
import Hero from '../components/Hero'

export default function Home() {
	return (
		<>
			<Head>
				<title>Support - Elysium</title>
			</Head>
			<Hero backgroundImage="support">
				<h2>Welcome to</h2>
				<h1>Elysium Support</h1>
				<h2>Need help with our content? Let us know.</h2>
			</Hero>
			<div className="support-section section">
				<h1 className="support-header">We're Here To Help.</h1>
				<h4 className="support-subtitle">
					We put our hearts into the content we release to ensure that each and every user has the best
					possible experience. If something is wrong, let us make it right.
				</h4>
				<div className="social-grid">
					<a href="https://twitter.com/ElysiumRepo" target="blank" className="social-card twitter grey-blur">
						<h4 className="twitter">Twitter</h4>
						<div className="social-subtitle">@ElysiumRepo</div>
						<div className="social-icon">
							<svg viewBox="-0.0000209808349609375 48 512 450">
								<g>
									<g>
										<path
											d="M512,97.248c-19.04,8.352-39.328,13.888-60.48,16.576c21.76-12.992,38.368-33.408,46.176-58.016
											c-20.288,12.096-42.688,20.64-66.56,25.408C411.872,60.704,384.416,48,354.464,48c-58.112,0-104.896,47.168-104.896,104.992
											c0,8.32,0.704,16.32,2.432,23.936c-87.264-4.256-164.48-46.08-216.352-109.792c-9.056,15.712-14.368,33.696-14.368,53.056
											c0,36.352,18.72,68.576,46.624,87.232c-16.864-0.32-33.408-5.216-47.424-12.928c0,0.32,0,0.736,0,1.152
											c0,51.008,36.384,93.376,84.096,103.136c-8.544,2.336-17.856,3.456-27.52,3.456c-6.72,0-13.504-0.384-19.872-1.792
											c13.6,41.568,52.192,72.128,98.08,73.12c-35.712,27.936-81.056,44.768-130.144,44.768c-8.608,0-16.864-0.384-25.12-1.44
											C46.496,446.88,101.6,464,161.024,464c193.152,0,298.752-160,298.752-298.688c0-4.64-0.16-9.12-0.384-13.568
											C480.224,136.96,497.728,118.496,512,97.248z"
										></path>
									</g>
								</g>
							</svg>
						</div>
					</a>
					<a href="https://discord.gg/JBKXzRq" target="blank" className="social-card discord grey-blur">
						<h4 className="discord">Discord</h4>
						<div className="social-subtitle">Elysium Services</div>
						<div className="social-icon">
							<svg
								id="Bold"
								enable-background="new 0 0 24 24"
								height="512"
								viewBox="0 0 24 24"
								width="512"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path d="m3.58 21.196h14.259l-.681-2.205 1.629 1.398 1.493 1.338 2.72 2.273v-21.525c-.068-1.338-1.22-2.475-2.648-2.475l-16.767.003c-1.427 0-2.585 1.139-2.585 2.477v16.24c0 1.411 1.156 2.476 2.58 2.476zm10.548-15.513-.033.012.012-.012zm-7.631 1.269c1.833-1.334 3.532-1.27 3.532-1.27l.137.135c-2.243.535-3.26 1.537-3.26 1.537s.272-.133.747-.336c3.021-1.188 6.32-1.102 9.374.402 0 0-1.019-.937-3.124-1.537l.186-.183c.291.001 1.831.055 3.479 1.26 0 0 1.844 3.15 1.844 7.02-.061-.074-1.144 1.666-3.931 1.726 0 0-.472-.534-.808-1 1.63-.468 2.24-1.404 2.24-1.404-.535.337-1.023.537-1.419.737-.609.268-1.219.4-1.828.535-2.884.468-4.503-.315-6.033-.936l-.523-.266s.609.936 2.174 1.404c-.411.469-.818 1.002-.818 1.002-2.786-.066-3.802-1.806-3.802-1.806 0-3.876 1.833-7.02 1.833-7.02z" />
								<path d="m14.308 12.771c.711 0 1.29-.6 1.29-1.34 0-.735-.576-1.335-1.29-1.335v.003c-.708 0-1.288.598-1.29 1.338 0 .734.579 1.334 1.29 1.334z" />
								<path d="m9.69 12.771c.711 0 1.29-.6 1.29-1.34 0-.735-.575-1.335-1.286-1.335l-.004.003c-.711 0-1.29.598-1.29 1.338 0 .734.579 1.334 1.29 1.334z" />
							</svg>
						</div>
					</a>
					<a href="mailto:support@elysiumrepo.com" target="blank" className="social-card email grey-blur">
						<h4 className="email">Email</h4>
						<div className="social-subtitle">support@elysiumrepo.com</div>
						<div className="social-icon">
							<svg
								version="1.1"
								id="Capa_1"
								xmlns="http://www.w3.org/2000/svg"
								xlink="http://www.w3.org/1999/xlink"
								x="0px"
								y="0px"
								width="512"
								height="512"
								viewBox="0 0 512 512"
								style={{ enableBackground: 'new 0 0 512 512' }}
								space="preserve"
							>
								<g>
									<g>
										<polygon points="339.392,258.624 512,367.744 512,144.896 		" />
									</g>
								</g>
								<g>
									<g>
										<polygon points="0,144.896 0,367.744 172.608,258.624 		" />
									</g>
								</g>
								<g>
									<g>
										<path d="M480,80H32C16.032,80,3.36,91.904,0.96,107.232L256,275.264l255.04-168.032C508.64,91.904,495.968,80,480,80z" />
									</g>
								</g>
								<g>
									<g>
										<path
											d="M310.08,277.952l-45.28,29.824c-2.688,1.76-5.728,2.624-8.8,2.624c-3.072,0-6.112-0.864-8.8-2.624l-45.28-29.856
											L1.024,404.992C3.488,420.192,16.096,432,32,432h448c15.904,0,28.512-11.808,30.976-27.008L310.08,277.952z"
										/>
									</g>
								</g>
							</svg>
						</div>
					</a>
					<a href="#" target="blank" className="social-card github grey-blur">
						<h4 className="github">Github</h4>
						<div className="social-subtitle">Elysium</div>
						<div className="social-icon">
							<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
								<path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
							</svg>
						</div>
					</a>
				</div>
			</div>
			<style jsx>{`
				.support-section {
					background-image: url('assets/backgrounds/social-media.png');
					background-size: cover;
					color: white;
				}
				.support-header {
					padding-top: 0.5em;
					opacity: 50%;
				}
				.support-subtitle {
					margin: 0.4em 0;
				}
				h4 {
					font-size: 2.5em;
					max-width: 1100px;
					opacity: 50%;
					margin-block-end: 0;
					margin-block-start: 0;
				}
				.social-grid {
					width: 90vw;
					display: grid;
					gap: 1.5em;
					grid-template-columns: repeat(2, 1fr);
					padding-top: 2em;
					padding-bottom: 3.5em;
				}
				.social-card {
					display: flex;
					flex-direction: column;
					align-items: center;
					justify-content: center;
					transition: background-color 0.2s ease;
					border-radius: 1em;
					background-color: #00000010;
				}
				.social-card:hover {
					background-color: #00000020;
				}
				.social-icon svg {
					height: 125px;
					width: auto;
				}
				.social-card h4 {
					opacity: 1;
					padding-top: 0.5em;
				}
				.twitter {
					color: #39a2f2;
				}
				.discord {
					color: #8d9ef8;
				}
				.email {
					color: #9a4dbe;
				}
				.github {
					color: #bbbbbb;
				}
				.twitter svg {
					fill: #39a2f2;
				}
				.discord svg {
					fill: #8d9ef8;
				}
				.email svg {
					fill: #9a4dbe;
				}
				.github svg {
					fill: #bbbbbb;
				}
				.social-subtitle {
					color: white;
					opacity: 0.5;
					padding-top: 1em;
					padding-bottom: 1.5em;
				}
				.social-icon {
					padding-bottom: 1em;
				}
				@media screen and (max-width: 650px) {
					.social-grid {
						grid-template-columns: repeat(1, 1fr);
					}
					h4 {
						font-size: 2em;
					}
				}
			`}</style>
		</>
	)
}
