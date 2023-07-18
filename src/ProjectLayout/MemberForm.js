import { useState } from "react";

export default function MemberForm({ members, setMembers }) {
	const [member, setMember] = useState("");

	function handleSubmit(e) {
		e.preventDefault();
		setMembers([
			{
				id: members.length + 1,
				name: member,
			},
			...members,
		]);
		e.target.reset();
	}

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<input
					type="text"
					name="memberName"
					id="memberName"
					placeholder="Add team Member(s)"
					onChange={(e) => setMember(e.target.value)}
				/>
				<button type="submit" id="add-member-btn">
					Add
				</button>
			</form>
			<div className="chips-container">
				{members?.map((myMember) => (
					<div className="chips" key={myMember.id}>
						<p>{myMember.name}</p>
					</div>
				))}
			</div>
		</div>
	);
}
