import React from 'react';

const PrintableMember = ({ member }) => {
  return (
    <div className="p-4 border m-4">
      <h2 className="text-xl font-semibold">{member.name}</h2>
      <p>Baptism Date: {member.baptism_date}</p>
      <p>First Holy Communion Date: {member.first_holy_communion_date}</p>
      <p>Confirmation Date: {member.confirmation_date}</p>
      <p>Holy Matrimony Date: {member.holy_matrimony_date}</p>
      <p>Death Date: {member.death_date}</p>
      <p>Outstation: {member.outstation}</p>
    </div>
  );
};

export default PrintableMember;
