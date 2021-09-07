import Link from 'next/link'
import Head from 'next/head'
import Hero from '../components/Hero'

const privacy = () => {
	return (
		<>
			<Head>
				<title>Elysium | Privacy Policy</title>
			</Head>
			<Hero backgroundImage="legal-hero">
				<h1>Privacy Policy</h1>
				<h2>We are dedicated to keeping your data safe.</h2>
			</Hero>
			<div className="section">
				<div className="privacy-policy grey-blur">
					<div className="privacy-header">
						<h3>Privacy Notice</h3>
						<p className="privacy-date">Last updated July 22, 2020</p>
					</div>
					<p className="privacy-text">
						Thank you for choosing to be part of our community at <span>Elysium</span> (“Company”, “we”,
						“us”, or “our”). We are committed to protecting your personal information and your right to
						privacy
					</p>
					<p className="privacy-text">
						If you have any questions or concerns about this privacy notice, or our practices with regards
						to your personal information, please contact us at legal@elysiumrepo.com
					</p>
					<p className="privacy-text">
						When you visit our repo https://elysiumrepo.com (the "Repository"), and more generally, use any
						of our services (the "Services", which include the Website and the Repository), we appreciate
						that you are trusting us with your personal information
					</p>
					<p className="privacy-text">
						<u>We take your privacy very seriously</u>. In this privacy notice, we seek to explain to you in
						the clearest way possible what information we collect, how we use it and what rights you have in
						relation to it.
					</p>
					<p className="privacy-text">
						We hope you take some time to read through it carefully, as it is important. If there are any
						terms in this privacy notice that you do not agree with, please discontinue use of our Services{' '}
						<span>immediately</span>.
					</p>
					<p className="privacy-text">
						This privacy notice applies to all information collected through our Services (which, as
						described above, includes our Website), as well as any related services, sales, marketing or
						events.
					</p>
					<br />
					<p className="privacy-important-text">
						<span>
							<u>
								Please read this privacy notice carefully as it will help you understand what we do with
								the information that we collect.
							</u>
						</span>
					</p>
					<br />
					<p className="privacy-text-left">1. WHAT INFORMATION DO WE STORE?</p>
					<p className="privacy-summed-up">
						<span>Personal Information Provided by You.</span>
					</p>
					<p className="privacy-text">
						This infomation that we store is in the form of, Email Addresses; Usernames; Passwords; Contact
						or Authentication Data; Device UUID's and Phone Numbers (for the explicit function of (2FA)
						Two-Factor-Authentication
					</p>
					<p className="privacy-text">
						We may provide you with the option to register with us using your existing social media account
						details. For example your GitHub or Google Accounts. If you choose to register in this way, We
						will store information described in the section called{' '}
						<span>"HOW DO WE HANDLE YOUR SOCIAL LOGINS"</span> below.
					</p>
					<br />
					<p className="privacy-text-left">2. HOW DO WE USE YOUR INFORMATION?</p>
					<p className="privacy-summed-up">
						We use your infomation, to faciliate necessary operations to provide our customers a good
						experience.
					</p>
					<p className="privacy-text">
						We use your infomation which we collect or receive to, <span>Handle Login Requests</span> or{' '}
						<span>Issue A 'Tweak' to your account</span> or to fufil any other `necessary` operation which
						requires your data.
					</p>
					<br />
					<p className="privacy-text-left">3. WILL YOUR INFOMATION BE SHARED WITH ANYONE?</p>
					<p className="privacy-text">
						We will only disclose your infomation to a third party <span>if</span> one of the following
						conditions is met.
					</p>
					<p className="privacy-text">
						<span>
							A) We are required by law by a 'country' that it internationally recognised by any current
							member on the UN Security Council.
						</span>
					</p>
					<p className="privacy-text">
						<span>
							B) Where we have entered into a contract with you and we need to fufil out terms of the
							deal.
						</span>
					</p>
					<p className="privacy-text">
						<span>
							C) Where any asset owned by us is being sold AND/OR transfered to a new provider and
							exchange of data is vital to the successful completetion of the handover.
						</span>
					</p>
					<br />
					<p className="privacy-text-left">4. HOW DO WE HANDLE YOUR SOCIAL LOGINS?</p>
					<p className="privacy-summed-up">
						If you choose to register or log in to our services using a social media account, we may have
						access to certain information about you.
					</p>
					<p className="privacy-text">
						The amount of infomation that we receive depends on which social media account you sign up with
						so we are unable to give you a tangable amount of 'data' that we store about you.
					</p>
					<p className="privacy-text">
						However the amount of data we do store is the minimal amount to carry out our necessary
						operations
					</p>
					<br />
					<p className="privacy-text-left">5. HOW LONG DO WE KEEP YOUR INFORMATION?</p>
					<p className="privacy-text">
						We will store your infomation for the duration of time you hold an account with us. You can
						request account deletion at any time. Legally we are obliged by GDPR laws to respond within 30
						days to any GDPR requests; these include account deletion
					</p>
					<br />
					<p className="privacy-text-left">6. HOW DO WE KEEP YOUR INFOMATION SECURE</p>
					<p className="privacy-summed-up">
						We have implemented as many necessary security measures as possible to ensure <span>Your</span>{' '}
						data remains safe.
					</p>
					<p className="privacy-text">
						However, despite our safeguards and efforts to secure your information, no electronic
						transmission over the Internet or information storage technology can be guaranteed to be 100%
						secure.
					</p>
					<p className="privacy-text">
						If a breech of data has occured we will report it to you within 48 hours, of the infomation
						being disclosed to us.
					</p>
					<p className="privacy-text">
						To ensure that your data is safe and secure, we have implemented a series of internal documents
						laying out the foundations for good security practice. These are available upon demand
					</p>
					<br />
					<p className="privacy-text-left">7. DO WE MAKE UPDATES TO THIS NOTICE?</p>
					<p className="privacy-summed-up">
						<span>YES</span>
					</p>
					<p className="privacy-text">
						We reserve the right to update this notice at any time, you will be notified via email and have
						the ability to opt-out of the new `privacy policy`
					</p>
					<br />
					<p className="privacy-text-left">8. WHAT HAPPENS WHEN I OPT-OUT</p>
					<p className="privacy-summed-up">
						Opting-Out of an updated `Privacy Policy` automatically terminates your contract with us and
						your account details we be deleted in accordance to GDPR regulations.
					</p>
					<br />
					<p className="privacy-text-left">
						9. HOW CAN I TERMINATE MY CONTRACT / DELETE MY ACCOUNT / OPT OUT?
					</p>
					<p className="privacy-summed-up">
						You can send us an email, privacy@elysiumrepo.com to delete your account or Opt-out of a new
						`Privacy Policy`
					</p>
				</div>
			</div>
			<style jsx>{`
				.section {
					background-image: url('/assets/backgrounds/legal.png');
					background-size: cover;
					background-position: center;
					padding: 3em 5vw;
				}
				.privacy-policy {
					padding: 1em 2em;
					border-radius: 1em;
				}
				.privacy-header {
					display: flex;
					align-items: baseline;
					justify-content: space-between;
					margin-bottom: 1.5em;
				}
				h3 {
					font-size: 2em;
					margin: 0;
				}
				.privacy-text {
					font-size: 18px;
					opacity: 50%;
				}
				.privacy-important-text {
					text-align: center;
					font-size: 22px;
				}
				.privacy-text-left {
					font-size: 22px;
				}
				@media screen and (max-width: 550px) {
					.privacy-header {
						flex-direction: column;
					}
				}
			`}</style>
		</>
	)
}

export default privacy
