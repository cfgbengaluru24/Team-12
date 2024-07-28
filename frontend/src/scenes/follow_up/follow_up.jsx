import React, { useState } from 'react'
import '../trainees/Trainees.scss';
// import { FaBeer } from "react-icons/fa";
import { FaPlay } from 'react-icons/fa';

export default function QueriesList() {
    const [data,setdata]= useState([
        {
          "name": "John Doe",
          "phone_number": "+1-555-123-4567",
          "query": "What are the initial steps for setting up a business?"
        },
        {
          "name": "Jane Smith",
          "phone_number": "+1-555-987-6543",
          "query": "Do I need a business license to start a small business?"
        },
        {
          "name": "Emily Johnson",
          "phone_number": "+1-555-555-5555",
          "query": "What are the tax requirements for a new business?"
        },
        {
          "name": "Michael Brown",
          "phone_number": "+1-555-111-2222",
          "query": "How do I register a business name?"
        },
        {
          "name": "Sarah Davis",
          "phone_number": "+1-555-333-4444",
          "query": "What are the legal structures available for a startup?"
        },
        {
          "name": "David Wilson",
          "phone_number": "+1-555-555-6666",
          "query": "How do I create a business plan?"
        },
        {
          "name": "Laura Moore",
          "phone_number": "+1-555-777-8888",
          "query": "What are the funding options for new businesses?"
        },
        {
          "name": "Chris Taylor",
          "phone_number": "+1-555-999-0000",
          "query": "What are the requirements for hiring employees?"
        },
        {
          "name": "Ashley Anderson",
          "phone_number": "+1-555-222-3333",
          "query": "How do I choose a business location?"
        },
        {
          "name": "James Thomas",
          "phone_number": "+1-555-444-5555",
          "query": "What insurance do I need for my business?"
        }
      ]
      );

  const handleCardClick = (card) => {
    setdata(card);
    console.log(card);

  };

  const cards = data.map(card => ({
    ...card,
  }));

//   const selectedData = cards.find((card) => card.id === selectedCard)?.data || [];

  return (
    <div className="App" style={{backgroundColor:"black"}}>
      <header className="header">
        <h1> Business Queries</h1>
      </header>
      <div className="cards-container" >
        {cards.map((card) => (
          <div style={{backgroundColor:"#cfcccf"}}
            key={card.id}
            className="card"
            onClick={() => handleCardClick(card)}
          >
        
            <div className="card-content">
              <h3>{card["phone_number"]}</h3>
              <hr />
              <h3>{card["name"]}</h3>
              <hr />
              <p>Query: {card["query"]}</p>
              <hr />
              <FaPlay style={{width:"2vh"}} />
            </div>
           </div>
        ))}
      </div>
      </div>
  );
}
