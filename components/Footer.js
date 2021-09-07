import Link from 'next/link'

export default function Footer() {
	return (
		<div className="footer section">
			<style jsx>{`
				.footer {
					background-image: url('assets/backgrounds/footer.png');
					background-size: cover;
					background-position: center;
					color: white;
					font-weight: 400;
				}
				.footer-table {
					width: 90vw;
					margin: 0 auto;
					padding: 2em 0;
					display: grid;
					grid-template-columns: repeat(5, 1fr);
				}
				.footer-column {
					margin: 0 auto;
				}
				.column-title {
					font-weight: 700;
					margin: 0;
					padding: 0;
				}
				.footer-list {
					padding-inline-start: 0;
					margin-block-start: 0;
				}
				.footer-list li {
					list-style: none;
					text-indent: 0;
					margin: 0.8em 0;
					padding: 0;
				}
				.footer-list a {
					text-decoration: none;
					color: white;
					margin: 0;
					padding: 0;
					transition: opacity 0.2s ease;
				}
				.footer-list li:hover {
					opacity: 0.8;
				}
				.footer-text {
					margin-left: 5vw;
					padding-bottom: 0.25em;
				}
				.footer-text a {
					text-decoration: none;
					font-weight: 700;
					color: white;
					transition: opacity 0.2s ease;
				}
				.footer-text a:hover {
					opacity: 0.8;
				}
				.footer-text:last-of-type {
					padding-bottom: 2em;
				}
				@media screen and (max-width: 900px) {
					.footer-table {
						grid-template-columns: repeat(3, 1fr);
					}
					.footer-column {
						margin: 0.5em 1.2em;
					}
				}
				@media screen and (max-width: 600px) {
					.footer-table {
						grid-template-columns: repeat(2, 1fr);
						margin: 0 auto;
					}
				}
			`}</style>
			<div className="footer-table">
				<div className="footer-column">
					<div className="column-title">Quick Access</div>
					<ul className="footer-list">
						<Link href="/">
							<a>
								<li>Home</li>
							</a>
						</Link>
						<Link href="/repo">
							<a>
								<li>Repo</li>
							</a>
						</Link>
						<Link href="/resources">
							<a>
								<li>Resources</li>
							</a>
						</Link>
						<Link href="/support">
							<a>
								<li>Support</li>
							</a>
						</Link>
					</ul>
				</div>
				<div className="footer-column">
					<div className="column-title">Account</div>
					<ul className="footer-list">
						<Link href="/signin">
							<a>
								<li>Sign In</li>
							</a>
						</Link>
						<Link href="/createaccount">
							<a>
								<li>Create Account</li>
							</a>
						</Link>
						<Link href="/purchases">
							<a>
								<li>View Purchases</li>
							</a>
						</Link>
						<Link href="/account">
							<a>
								<li>Manage Account</li>
							</a>
						</Link>
					</ul>
				</div>
				<div className="footer-column">
					<div className="column-title">Developer</div>
					<ul className="footer-list">
						<Link href="/become-developer">
							<a>
								<li>Become a Developer</li>
							</a>
						</Link>
						<Link href="/api">
							<a>
								<li>API</li>
							</a>
						</Link>
						<a href="https://developer.elysiumrepo.com" target="_blank">
							<li>Dashboard</li>
						</a>
						<a href="https://developer.elysiumrepo.com/packages" target="_blank">
							<li>Manage Packages</li>
						</a>
					</ul>
				</div>
				<div className="footer-column">
					<div className="column-title">Contact Us</div>
					<ul className="footer-list">
						<a href="#" target="_blank">
							<li>Email</li>
						</a>
						<a href="https://twitter.com/ElysiumRepo" target="_blank">
							<li>Twitter</li>
						</a>
						<a href="https://discord.gg/JBKXzRq" target="_blank">
							<li>Discord</li>
						</a>
						<a href="#" target="_blank">
							<li>Github</li>
						</a>
					</ul>
				</div>
				<div className="footer-column">
					<div className="column-title">Learn More</div>
					<ul className="footer-list">
						<Link href="/about">
							<a>
								<li>About Elysium</li>
							</a>
						</Link>
						<Link href="/team">
							<a>
								<li>Meet the Team</li>
							</a>
						</Link>
						<Link href="/termsofservice">
							<a>
								<li>Terms of Service</li>
							</a>
						</Link>
						<Link href="/privacy">
							<a>
								<li>Privacy Policy</li>
							</a>
						</Link>
					</ul>
				</div>
			</div>
			<div className="footer-text"> Copyright © 2020 Elysium. All rights reserved.</div>
			<div className="footer-text">
				Design by{' '}
				<a href="https://twitter.com/simalary_ch" target="_blank">
					Simalary (Chris™)
				</a>{' '}
				and Frontend by{' '}
				<a href="https://twitter.com/BagleyWalker" target="_blank">
					Walker Bagley
				</a>
			</div>
		</div>
	)
}
