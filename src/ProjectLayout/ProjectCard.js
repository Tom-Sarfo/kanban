export default function ProjectCard({ project }) {
	return (
		<article className="ProjectCard">
			<div className="SideColor"></div>
			<div className="ProjectInfo">
				<h3>{project?.projectName}</h3>
				<div className="TeamMembers">
					{project.members.length <= 3 ? (
						project.members?.map((member) => {
							return (
								<p key={member.id}>
									<span>{member.name} • </span>
								</p>
							);
						})
					) : (
						<>
							<p>
								<span>
									{project.members[0].name} •{project.members[1].name} •
									{project.members[2].name}
								</span>
							</p>
							<div className="PlusMembers">+{project.members.length - 3}</div>
						</>
					)}
				</div>
			</div>
		</article>
	);
}
