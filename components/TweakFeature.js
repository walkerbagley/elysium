import Link from 'next/link'

export default function TweakFeature({ children }) {
	return (
		<div className="featured-tweak section">
			<div className="left">
				{children}
				<Link href="/">
					<a className="arrow-link">
						<div className="al-text">Learn more</div>
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
			<div className="right">
				<img src="assets/screens/pigment-framed.png"></img>
			</div>
			<style jsx>{`
				.featured-tweak {
					height: 100vh;
					background-color: #262626;
					display: flex;
					justify-content: space-between;
					align-items: center;
				}
				.left {
					width: 35vw;
				}
				svg {
					fill: #ea4e66;
				}
				.left .arrow-link {
					justify-content: flex-start;
					margin-top: 3em;
					color: #ea4e66;
				}
				.right {
					width: 50vw;
					height: 100%;
					display: flex;
					align-items: center;
					justify-content: center;
					overflow: hidden;
				}
				img {
					max-height: 180vh;
					margin-top: -18vh;
					max-width: 100%;
				}
				.left .arrow-link {
					justify-content: flex-start;
					margin-top: 3em;
				}
				@media screen and (max-width: 1000px) {
					img {
						margin-top: -10vh;
					}
				}
				@media screen and (max-width: 900px) {
					img {
						margin-top: 0;
					}
				}
				@media screen and (max-width: 550px) {
					.featured-tweak {
						flex-direction: column;
						height: auto;
					}
					.left,
					.right {
						width: 90vw;
						padding-top: 3em;
					}
					img {
						width: 100%;
						height: 100%;
						padding-bottom: 3em;
					}
				}
			`}</style>
		</div>
	)
}
