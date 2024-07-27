import React, { useState } from 'react';
import './AddShg.scss'; // Import the stylesheet

const AddShg = () => {
  const [groupNo, setGroupNo] = useState('');
  const [location, setLocation] = useState('');
  const [trainer, setTrainer] = useState('');
  const [members, setMembers] = useState([{ name: '' }]);

  const handleAddMember = () => {
    setMembers([...members, { name: '' }]);
  };

  const handleMemberChange = (index, event) => {
    const newMembers = members.slice();
    newMembers[index].name = event.target.value;
    setMembers(newMembers);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newShg = {
      id: Date.now(), // Unique ID
      groupNo,
      location,
      trainer,
      numPeople: members.length,
      members,
    };
    // Replace with actual API call to save the new SHG
    console.log(newShg);
  };

  return (
    <div className="add-shg">
      <h2>Add New SHG</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Group Name:</label>
          <input type="text" value={groupNo} onChange={(e) => setGroupNo(e.target.value)} required />
        </div>
        <div>
          <label>Location:</label>
          <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} />
        </div>
        <div>
          <label>Trainer:</label>
          <input type="text" value={trainer} onChange={(e) => setTrainer(e.target.value)} />
        </div>
        <div className="members">
          <label>Members:</label>
          {members.map((member, index) => (
            <div key={index}>
              <input type="text" value={member.name} onChange={(e) => handleMemberChange(index, e)} required />
            </div>
          ))}
          <button type="button" onClick={handleAddMember}>+ Add Member</button>
        </div>
        <button type="submit">Save SHG</button>
      </form>
    </div>
  );
};

export default AddShg;
