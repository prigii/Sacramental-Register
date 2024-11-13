const MemberList = ({ members }) => (
    <ul>
      {members.map((member) => (
        <li key={member.id} className="border-b p-2">
          {member.name} - {member.outstation}
        </li>
      ))}
    </ul>
  );
  
  export default MemberList;
  