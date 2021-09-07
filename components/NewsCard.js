import Link from 'next/link'

export default function NewsCard({
	children,
	left = true,
	title,
	phrase,
	description,
	buttonText = 'Learn more',
	buttonLink = '/',
	accentColor,
}) {
	const info = (
		<div className="left">
			<h1 className="ft-name">{title}</h1>
			<h3 className="ft-phrase">{phrase}</h3>
			<h3 className="ft-description">{description}</h3>
			<Link href={buttonLink}>
				<a className="arrow-link">
					<div className="al-text">{buttonText}</div>
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
		</div>
	)
	const right = <div className="right">{children}</div>
	const style = (
		<style jsx>{`
			.news-card {
				background-color: #262626;
				display: flex;
				justify-content: space-between;
				align-items: center;
			}
			h3 {
				font-size: 2em;
				font-weight: 400;
				margin: 0;
				color: white;
			}
			.ft-name {
				margin-top: 0;
				padding-top: 40px;
			}
			.ft-name,
			.ft-phrase,
			.left .arrow-link {
				color: currentColor;
			}
			.left {
				width: 50vw;
			}
			svg {
				fill: currentColor;
			}
			.left .arrow-link {
				justify-content: flex-start;
				margin-top: 2em;
				padding-bottom: 40px;
			}
			.right {
				width: 35vw;
				height: 100%;
				display: flex;
				align-items: center;
				justify-content: center;
				overflow: hidden;
			}
			@media screen and (max-width: 850px) {
				.news-card {
					flex-direction: column;
					height: auto;
				}
				.left,
				.right {
					width: 90vw;
				}
				.right {
					padding: 3em 0;
				}
				h1 {
					font-size: 3em;
				}
				h3 {
					font-size: 1.5em;
				}
				.arrow-link {
					font-size: 1.2em;
				}
				svg {
					height: 15px;
				}
			}
		`}</style>
	)
	if (left) {
		return (
			<div className="news-card section" style={{ color: accentColor }}>
				{info}
				{right}
				{style}
			</div>
		)
	} else {
		return (
			<div className="news-card section" style={{ color: accentColor }}>
				{right}
				{info}
				{style}
			</div>
		)
	}
}
