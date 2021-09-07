import React, { useState } from 'react'
import Link from 'next/link'

export default function Navbar() {
	const [isDropdownOpen, setIsDropdownOpen] = useState(false)
	return (
		<>
			<div className="navbar grey-blur">
				<div className="navlist">
					<ul className="nav-items">
						<Link href="/">
							<a onClick={() => setIsDropdownOpen(false)}>
								<li className="nav-link">Elysium</li>
							</a>
						</Link>
						<Link href="/repo">
							<a onClick={() => setIsDropdownOpen(false)}>
								<li className="nav-link">Repo</li>
							</a>
						</Link>
						<Link href="/resources">
							<a onClick={() => setIsDropdownOpen(false)}>
								<li className="nav-link">Resources</li>
							</a>
						</Link>
						<Link href="/support">
							<a onClick={() => setIsDropdownOpen(false)}>
								<li className="nav-link">Support</li>
							</a>
						</Link>
					</ul>
				</div>
				<div
					className={`sign-in  ${isDropdownOpen ? 'open' : ''}`}
					onClick={() => setIsDropdownOpen((s) => !s)}
				>
					<img className="profile-picture" src="assets/icons/account.png" alt=""></img>
					<div className="profile-name">Sign In</div>
					<div className="down-arrow">
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
				</div>
			</div>
			<div className={`dropdown-space ${isDropdownOpen ? 'open' : ''}`}>
				<div className="dropdown-container" id="dropdown">
					<Link href="/signin">
						<a className="dropdown-option" onClick={() => setIsDropdownOpen((s) => !s)}>
							<div className="dropdown-option-title">Sign In</div>
							<img className="dropdown-img" src="assets/icons/right-arrow.png" alt=""></img>
						</a>
					</Link>
					<Link href="/createaccount">
						<a className="dropdown-option" onClick={() => setIsDropdownOpen((s) => !s)}>
							<div className="dropdown-option-title">Create an Account</div>
							<img src="assets/icons/plus.png" alt="" className="dropdown-img"></img>
						</a>
					</Link>
				</div>
			</div>
			<style jsx>{`
				.navbar {
					height: 70px;
					width: 100vw;
					padding: 0 5vw;
					display: flex;
					justify-content: space-between;
					align-items: center;
					margin: 0 auto;
				}
				.nav-items {
					display: flex;
					padding-inline-start: 0;
				}
				.nav-items a,
				.error-text {
					text-decoration: none;
					color: white;
					font-size: 1.3em;
					padding: 0.5em 1em;
					margin: 0 0.25em;
					transition: opacity 0.2s ease;
				}
				.nav-items a:first-of-type {
					padding-left: 0;
					margin-left: 0;
				}
				.nav-link:hover {
					opacity: 0.75;
				}
				.nav-link {
					list-style: none;
					opacity: 0.5;
				}
				.sign-in {
					display: flex;
					align-items: center;
					justify-content: center;
					opacity: 0.5;
					cursor: pointer;
					transition: opacity 0.2s ease;
				}
				.sign-in:hover {
					opacity: 0.75;
				}
				.profile-picture {
					width: 25px;
					height: auto;
				}
				svg {
					height: 15px;
					fill: white;
				}
				.profile-name {
					margin-left: 0.4em;
					margin-right: 0.4em;
				}
				.down-arrow {
					transform: rotate(90deg);
					transition: transform 0.2s ease;
				}
				.sign-in.open > .down-arrow {
					transform: rotate(270deg);
				}
				.dropdown-space.open {
					display: block;
				}
				.dropdown-space {
					width: 200px;
					right: calc(5% - 16px);
					display: none;
					position: absolute;
					z-index: 1;
				}
				.dropdown-container {
					width: 200px;
					background-color: #00000040;
					backdrop-filter: blur(10px);
					margin-top: 1em;
					border-radius: 1em;
					z-index: 1;
				}
				.dropdown-option {
					display: flex;
					align-items: center;
					justify-content: space-between;
					opacity: 50%;
					padding: 0.8em 1em;
					text-decoration: none;
					color: white;
				}
				.dropdown-option:hover {
					opacity: 80%;
				}
				.dropdown-img {
					height: 20px;
					width: 20px;
					margin: 0;
				}
				@media screen and (max-width: 650px) {
					.navbar {
						height: 60px;
					}
					.nav-items a {
						font-size: 1em;
					}
				}
				@media screen and (max-width: 550px) {
					.profile-name {
						display: none;
					}
				}
				@media screen and (max-width: 450px) {
					.nav-items a {
						padding: 0.2em 0.3em;
					}
				}
			`}</style>
		</>
	)
}
