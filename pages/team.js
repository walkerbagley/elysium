import Head from 'next/head'
import Hero from '../components/Hero'
import StaffCard from '../components/StaffCard'

export default function Home() {
	return (
		<>
			<Head>
				<title>Meet the Team - Elysium</title>
			</Head>
			<Hero backgroundImage="team-hero">
				<h1>Meet the Team</h1>
				<h2>Our staff is dedicated to providing you with the best experience possible.</h2>
			</Hero>
			<div className="section meet-the-team">
				<h2>Our Team</h2>
				<div className="staff-grid">
					<StaffCard
						name="TheLazyITGuy"
						title="Owner"
						bio="I am currently 24 years old & I am a systems administrator that is dabbling in Objective-C! I’ve been in the technology field for as long as I can remember! Some of my biggest hobbies are fishing and looking at cars that I can never afford. I’m excited to bring you guys the best repo in the game!"
						handle="wackyyaf"
						pfp="lazy.jpeg"
					/>
					<StaffCard
						name="Walker Bagley"
						title="Lead Frontend Developer, Designer"
						bio="I am a 17 year old iOS Designer and Front End Developer and I enjoy graphic design and photography in my free time. I am excited to be on the Elysium team because I get to interact with some great people and work on an extraordinary project."
						handle="BagleyWalker"
						pfp="walker.jpg"
					/>
					<StaffCard
						name="Dimitar Nestorov"
						title="Lead Backend Developer, Database Management"
						bio="I've been working as software engineer for the past 5 years. My hobbies include developing simple jailbreak tweaks and watching a lot of TV shows. I'm excited to deliver my best work to create the best repo!"
						handle="dimitarnestorov"
						pfp="dimitar.jpg"
					/>
					<StaffCard
						name="Kodey Thomas"
						title="Backend Developer"
						bio="Hi, I'm Kodey. I am a 16 year old Backend Developer from the UK. I can code in Python, C, Objective-C and JS and have been programming for 5 years. I'm really excited along with the rest of the team to bring this to you!"
						handle="ThomasKodey"
						pfp="kodey.jpg"
					/>
					<StaffCard
						name="iCraze"
						title="Tweak Developer, Customer Service"
						bio="Hi, I’m iCraze. I’m a 13 year old (mainly) backend developer from England. I mainly code in Objective-C, JS and Python, however I do create websites every now and then. I’ve been programming for 4 years, and have been making tweaks for a year and a half."
						handle="iCrazeiOS"
						pfp="icraze.png"
					/>
					<StaffCard
						name="Galactic Dev"
						title="Package Management, Customer Service"
						bio="I'm a 14 year old iOS tweak developer who enjoys anything to do with iOS and technology in general. I'm super excited to be working with this great group of people, and hope to learn some things along the way."
						handle="dev_galactic"
						pfp="galacticdev.jpeg"
					/>
					<StaffCard
						name="Greg Rabago"
						title="System Administrator"
						bio="Hi, I am Greg from Spain. Part-time biochemist part-time bad developer. I wasted my time learning python, objective c, bash and matlab, but I would do it again I guess."
						handle="Greg_0109"
						pfp="greg.jpeg"
					/>
					<StaffCard
						name="Simalary (Chris™)"
						title="Designer"
						bio="Hi, I’m Chris. I’m 19 years old and currently a student at Grand Valley State University. I develop iOS jailbreak tweaks and create graphic design projects in my free time. I can’t wait for what we have in store for you guys."
						handle="simalary_ch"
						pfp="chris.jpg"
					/>
					<StaffCard
						name="Thomas Davies"
						title="Backend Developer"
						bio="Hi, I'm Tom. I am a bad backend developer from the UK. I can code in Python, Cpp, Objective-C and redstone and have been programming for 4 years."
						handle="TomEDavies"
						pfp="account.png"
					/>
				</div>
			</div>
			<style>{`
                .meet-the-team{
                    background-image: url("assets/backgrounds/team.png");
                    background-size: cover;
                    color: white;
                }
                .meet-the-team h2{
                    padding-top: .5em;
                }
                .staff-grid{
                    display: grid;
                    grid-template-columns: repeat(2, 1fr);
                    gap: 1em;
                    padding-bottom: 2.5em
				}
				@media screen and (max-width: 800px){
					.staff-grid{
						grid-template-columns: repeat(1, 1fr);
					}
				}
            `}</style>
		</>
	)
}
