export default function StaffCard({
	name = 'name',
	title = 'title',
	bio = 'bio',
	handle = 'handle',
	pfp = 'account.png',
}) {
	const Name = name
	const Title = title
	const Bio = bio
	const src = '/assets/pfps/' + pfp
	const href = 'https://twitter.com/' + handle
	return (
		<>
			<a href={href} target="blank" className="staff-card grey-blur">
				<div className="sc-header">
					<img src={src}></img>
					<div className="sc-profile">
						<div className="sc-name">{Name}</div>
						<div className="sc-title">{Title}</div>
					</div>
				</div>
				<div className="sc-bio">{Bio}</div>
			</a>
			<style>{`
                .staff-card{
                    padding: 1em;
                    border-radius: 1em;
                    transition: background-color .2s ease;
                    color: white;
                }
                .staff-card:hover{
                    background-color: #00000020;
                }
                .sc-header{
                    display: flex;
                }
                img{
                    width: 60px;
                    height: 60px;
                    border-radius: 50%;
                }
                .sc-profile{
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                    margin-left: 1em;
                }
                .sc-name{
                    font-size: 1.9em;

                }
                .sc-title{
                    font-size: 1.2em;
                    opacity: 50%;
                }
                .sc-bio{
                    margin-top: 1em;
                }
            `}</style>
		</>
	)
}
