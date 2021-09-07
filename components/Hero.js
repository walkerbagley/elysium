export default function Hero({ children, backgroundImage = 'home', isError = false }) {
	const temp = isError ? '-118px' : '-70px'
	return (
		<div className="hero">
			<style jsx>{`
				.hero {
					height: 100vh;
					background-image: url('/assets/backgrounds/${backgroundImage}.png');
					background-size: cover;
					background-position: center;
					display: flex;
					flex-direction: column;
					justify-content: center;
					text-align: center;
					padding: 0 5%;
					margin-top: ${temp};
				}
				@media screen and (max-width: 450px;){
					.hero{
						height: 120vh;
					}
				}
			`}</style>
			{children}
		</div>
	)
}
