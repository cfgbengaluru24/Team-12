import React from 'react';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './ShgDetail.scss'; // Import the stylesheet

const SHGDetail = () => {
  const { id } = useParams();
  const [shg, setShg] = useState(null);

  useEffect(() => {
    // Fetch SHG details by ID from an API or use mock data
    const fetchShgDetails = async () => {
      // Replace with actual API call
      const mockShgDetail = {
        id: 1,
        groupNo: 'Group 1',
        numPeople: 20,
        location: 'Location A',
        trainer: 'Trainer X',
        details: 'Detailed information about this SHG...',
      };
      setShg(mockShgDetail);
    };

    fetchShgDetails();
  }, [id]);

  if (!shg) {
    return <div>Loading...</div>;
  }

  return (
    <div className="shg-detail">
      <h2>{shg.groupNo}</h2>
      <p>Number of People: {shg.numPeople}</p>
      <p>Location: {shg.location}</p>
      <p>Trainer: {shg.trainer}</p>
      <p>{shg.details}</p>
    </div>
  );
};

export default SHGDetail;
