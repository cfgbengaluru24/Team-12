import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import SHGWidget from '../shg_widget/SHGWidget';
import './ShgListing.scss'; // Import the stylesheet

const SHGListing = () => {
  const [shgs, setShgs] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch SHG data from an API or use mock data
    const fetchShgList = async () => {
      // Replace with actual API call
      const mockShgs = [
        { id: 1, groupNo: 'Group 1', numPeople: 20, location: 'Location A', trainer: 'Trainer X' },
        { id: 2, groupNo: 'Group 2', numPeople: 15, location: 'Location B', trainer: 'Trainer Y' },
        { id: 3, groupNo: 'Group 3', numPeople: 25, location: 'Location C', trainer: 'Trainer Z' },
        // Add more SHGs as needed
      ];
      setShgs(mockShgs);
    };

    fetchShgList();
  }, []);

  return (
    <div className="shg-listing">
      <div className="header">
        <h2>SHG List</h2>
        <button className="add-shg-button" onClick={() => navigate('/add-shg')}>Add SHG</button>
      </div>
      <div className="shg-widgets">
        {shgs.map(shg => (
          <SHGWidget key={shg.id} shg={shg} />
        ))}
      </div>
    </div>
  );
};

export default SHGListing;
