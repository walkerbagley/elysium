export default function ErrorBar() {
	return (
		<>
			<div className="errorbar grey-blur">
				<div className="error-text">Error 404 | Page Not Found</div>
			</div>
			<style jsx>{`
				.errorbar {
					width: 100vw;
					padding: 1em 5vw;
					display: flex;
					justify-content: space-between;
					align-items: center;
					background-color: #00000020;
				}
			`}</style>
		</>
	)
}
