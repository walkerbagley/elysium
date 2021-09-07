import React, { useState } from 'react'
import Hero from '../components/Hero'
import Link from 'next/link'

export default function SignInContainer({ siActive }) {
	const [signIn, setSignIn] = useState(siActive)
	return (
		<>
			<Hero>
				<div className="si-header">
					<div
						className={`si-button grey-blur ${signIn ? 'si-active' : ''}`}
						onClick={() => setSignIn((signIn) => !signIn)}
					>
						Sign In
					</div>
					<div
						className={`ca-button grey-blur ${signIn ? '' : 'si-active'}`}
						onClick={() => setSignIn((signIn) => !signIn)}
					>
						Create Account
					</div>
				</div>
				<div className={`si-container grey-blur ${signIn ? '' : 'hidden'}`}>
					<form method="post">
						<input
							type="email"
							name="email"
							id="si-email"
							className="grey-blur"
							placeholder="Email"
						></input>
						<input
							type="password"
							name="password"
							id="si-password"
							className="grey-blur"
							placeholder="Password"
						></input>
						<input type="submit" value="Sign In" className="grey-blur"></input>
					</form>
				</div>
				<div className={`ca-container grey-blur ${signIn ? 'hidden' : ''}`}>
					<form method="post">
						<input
							type="email"
							name="email"
							id="si-email"
							className="grey-blur"
							placeholder="Email"
						></input>
						<input
							type="password"
							name="password"
							id="si-password"
							className="grey-blur"
							placeholder="Password"
						></input>
						<p>
							By creating an account, I agree to Elysium's{' '}
							<Link href="/termsofservice" target="blank">
								<a>Terms of Service</a>
							</Link>{' '}
							and{' '}
							<Link href="/privacy" target="blank">
								<a>Privacy Policy</a>
							</Link>
							.
						</p>
						<input type="submit" value="Create Account" className="grey-blur"></input>
					</form>
				</div>
				<div className="si-footer grey-blur">
					<h6>Or sign in with...</h6>
					<div className="si-button-container">
						<a href="#">
							<img src="/assets/icons/signin/google.jpg"></img>
						</a>
						<a href="#">
							<img src="/assets/icons/signin/apple.png"></img>
						</a>
						<a href="#">
							<img src="/assets/icons/signin/twitter.png"></img>
						</a>
						<a href="#">
							<img src="/assets/icons/signin/discord.png"></img>
						</a>
					</div>
				</div>
			</Hero>
			<style jsx>{`
				.hidden {
					display: none;
				}
				.si-header {
					display: flex;
					border-radius: 1em;
					margin: 0 auto;
				}
				.si-button,
				.ca-button {
					padding: 1em 0;
					width: 175px;
					font-size: 1.2em;
					cursor: pointer;
					transition: background-color 0.2s ease;
				}
				.si-button:hover,
				.ca-button:hover {
					background-color: #00000060;
				}
				.si-button {
					border-bottom-left-radius: 15px;
					border-top-left-radius: 15px;
				}
				.ca-button {
					border-bottom-right-radius: 15px;
					border-top-right-radius: 15px;
				}
				.si-active {
					background-color: #00000060;
				}
				.si-container,
				.ca-container,
				.si-footer {
					width: 350px;
					padding: 1em;
					margin: 0 auto;
					margin-top: 1em;
					border-radius: 15px;
				}
				.si-container form,
				.ca-container form {
					display: flex;
					flex-direction: column;
					align-items: center;
					justify-content: center;
				}
				.si-inactive {
					display: none;
				}
				.si-container input,
				.ca-container input {
					width: 300px;
					outline: none;
					border: none;
					font-size: 1.3em;
					padding: 0.5em;
					border-radius: 0.5em;
					margin: 0.2em;
					color: white;
				}
				.si-container input[type='submit'],
				.ca-container input[type='submit'] {
					width: 200px;
					cursor: pointer;
					transition: background-color 0.2s ease;
					-webkit-appearance: none;
				}
				.si-container input[type='submit']:hover,
				.ca-container input[type='submit']:hover {
					background-color: #00000020;
				}
				a {
					color: white;
					font-weight: 700;
					transition: opacity 0.2s ease;
					cursor: pointer;
				}
				a:hover {
					opacity: 75%;
				}
				h6 {
					font-size: 1.2em;
					margin: 0;
					margin-bottom: 1em;
					font-weight: 400;
				}
				img {
					width: 50px;
					height: 50px;
					border-radius: 10px;
					margin: 0 0.5em;
				}
				@media screen and (max-width: 450px) {
					.si-container,
					.ca-container,
					.si-footer {
						width: 300px;
					}
					.si-button,
					.ca-button {
						width: 150px;
					}
					.si-container input,
					.ca-container input {
						width: 250px;
					}
				}
			`}</style>
		</>
	)
}
