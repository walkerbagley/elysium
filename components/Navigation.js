// NOTE: THIS IS DEPRECATED, PLEASE USE Navbar.js

import axios from 'axios'
import { useState, useEffect } from 'react'
import Modal from 'react-modal'
import { parseCookies } from 'nookies'

import Link from 'next/link'
import { useRouter } from 'next/router'
import Navbar from './Navbar'

function LoginModal({ login, visible, onRequestClose, onSubmit }) {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	useEffect(() => {
		setEmail('')
		setPassword('')
	}, [visible])

	return (
		<Modal isOpen={visible} onRequestClose={() => onRequestClose()}>
			<style jsx>{`
				form {
					width: 300px;
					display: flex;
					flex-direction: column;
					align-items: center;
				}

				input {
					display: block;
					width: 100%;

					font-size: 20px;
				}

				h3 {
					margin-top: 0;
				}
			`}</style>
			<form
				onSubmit={(e) => {
					e.preventDefault()
					onSubmit(email, password)
				}}
			>
				<h3>{login ? 'Sign In' : 'Create an Account'}</h3>
				<input placeholder="Email" type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
				<input
					placeholder="Password"
					type="password"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
				/>
				<button>{login ? 'Sign In' : 'Create'}</button>
			</form>
		</Modal>
	)
}

function L({ href, children }) {
	const { pathname } = useRouter()
	return (
		<Link href={href}>
			<a className={pathname === href ? 'current-page' : undefined}>
				<style jsx>{`
					a {
						color: #ffffff;
						opacity: 0.5;
						text-decoration: none;
						padding: 15px;
					}

					a:hover {
						opacity: 0.75;
					}

					a:first-child {
						margin-left: -15px;
					}

					a.current-page {
						opacity: 1;
					}
				`}</style>
				{children}
			</a>
		</Link>
	)
}

const ModalState = Object.freeze({
	CLOSED: 0,
	SIGN_IN: 1,
	REGISTER: 2,
})

export default function Navigation({ defaultUserInfo }) {
	const [userInfo, setUserInfo] = useState(defaultUserInfo)

	const [isDropdownOpen, setIsDropdownOpen] = useState(false)

	const [isModalOpen, setIsModalOpen] = useState(ModalState.CLOSED)

	return (
		<nav className="default-vibrant-background">
			<style jsx>{`
				nav {
					position: fixed;
					width: 100%;
					padding: 0 5%;
					height: 70px;
					display: flex;
					justify-content: space-between;
					align-items: center;
				}

				.sign-in {
					opacity: 0.5;
					padding: 15px;
					margin-right: -15px;
					display: flex;
					align-items: center;
					cursor: pointer;
					user-select: none;
				}

				.sign-in:hover,
				.sign-in.open {
					opacity: 0.75;
				}

				.sign-in > .profile {
					width: 25px;
					height: 25px;
				}

				.sign-in > span {
					margin: 0 8px;
				}

				.sign-in > .arrow {
					width: 15px;
					height: 15px;
					transform: rotate(-270deg);
					transition: transform 0.2s ease;
				}

				.sign-in.open > .arrow {
					transform: rotate(-90deg);
				}

				.sign-in > .dropdown {
					display: none;
					position: absolute;
					top: 90px;
					width: 200px;
					right: calc(5% - 16px);
					border-radius: 16px;
				}

				.sign-in.open > .dropdown {
					display: block;
				}

				.sign-in > .dropdown > div {
					padding: 12px 16px;
					opacity: 0.66;
					display: flex;
					align-items: center;
					justify-content: space-between;
				}

				.sign-in > .dropdown > div:hover {
					opacity: 1;
				}

				.sign-in > .dropdown > div > img {
					width: 20px;
					height: 20px;
				}
			`}</style>

			<div>
				<L href="/">Elysium</L>
				<L href="/repo">Repo</L>
				<L href="/resources">Resources</L>
				<L href="/support">Support</L>
			</div>

			<div className={`sign-in ${isDropdownOpen ? 'open' : ''}`} onClick={() => setIsDropdownOpen((s) => !s)}>
				<img className="profile" src="/assets/icons/account.png" alt="Profile icon" />
				<span>{userInfo || 'Sign In'}</span>
				<img className="arrow" src="/assets/icons/right-arrow.svg" alt="Arrow" />

				<div className="dropdown default-vibrant-background">
					{userInfo ? (
						<div
							onClick={() => {
								setUserInfo()
								axios.post('/api/logout')
							}}
						>
							<div>Log out</div>
						</div>
					) : (
						<>
							<div onClick={() => setIsModalOpen(ModalState.SIGN_IN)}>
								<div>Sign In</div>
								<img alt="Arrow" src="/assets/icons/right-arrow.png" />
							</div>
							<div onClick={() => setIsModalOpen(ModalState.REGISTER)}>
								<div>Create an Account</div>
								<img alt="Plus" src="/assets/icons/plus.png" />
							</div>
						</>
					)}
				</div>
			</div>

			<LoginModal
				visible={Boolean(isModalOpen)}
				login={isModalOpen !== ModalState.REGISTER}
				onRequestClose={() => setIsModalOpen(false)}
				onSubmit={async (email, password) => {
					if (isModalOpen === ModalState.SIGN_IN) {
						await axios.post('/api/login', { email, password })
						setUserInfo(parseCookies().userInfo)
						setIsModalOpen(false)
					} else {
						await axios.post('/api/register', { email, password })
						await axios.post('/api/login', { email, password })
						setUserInfo(parseCookies().userInfo)
						setIsModalOpen(false)
					}
				}}
			/>
		</nav>
	)
}
