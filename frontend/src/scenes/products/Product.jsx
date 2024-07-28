import React, { useState } from 'react'
import '../trainees/Trainees.scss';
import bangles from "../../assets/images/bangles-3111866_1280.jpg"
import jutebag from "../../assets/images/bag-421456_1280.png"
import clothes from "../../assets/images/sweatshirts-428607_1280.jpg"
import merch1 from "../../assets/images/pexels-ron-lach-8386648.jpg"
import merch2 from "../../assets/images/apparel-1850804_1280.jpg"
import merch3 from "../../assets/images/pexels-markus-winkler-1430818-3812433.jpg"



export default function Products() {
    const [data, setdata] = useState([
        { "image": bangles, "name": "Bangles" },
        { "image": jutebag, "name": "Jute Bags" },
        { "image": clothes, "name": "Clothes" }

    ]
    );
    const [data2, setdata2] = useState([
        { "image": merch1},
        { "image": merch2},
        { "image": merch3 }

    ]
    );

    const buttonStyle = {
        backgroundColor: '#2e709a',
        color: 'white',
        border: 'none',
        padding: '10px 20px',
        cursor: 'pointer',
        borderRadius: '5px',
        fontSize: '16px',
        margin: '5px'
    };

    const handleCardClick = (card) => {
        setdata(card);
        console.log(card);

    };

    const cards = data.map(card => ({
        ...card,
    }));
    const cards2 = data2.map(card => ({
        ...card,
    }));

    //   const selectedData = cards.find((card) => card.id === selectedCard)?.data || [];

    return (
        <div className="App" style={{ backgroundColor: "black" }}>
            <header className="header">
                <h1>Beneficiary Products</h1>
            </header>
            <div className="cards-container" >
                {cards.map((card) => (
                    <div style={{ backgroundColor: "#cfcccf" }}
                        key={card.id}
                        className="card"
                        onClick={() => handleCardClick(card)}
                    >
                        <h3 style={{color:"black"}}>{card["name"]}</h3>
                        <div className="card-content">
                            <img src={card["image"]} style={{ width: "100%", height: "15rem", objectFit: "fill" }} />
                            <button style={buttonStyle}>Buy</button>
                            <button style={buttonStyle}>Invest</button>
                        </div>
                    </div>
                ))}
            </div>
            <header className="header">
                <h1>Merchandise</h1>
            </header>
            <div className="cards-container" >
                {cards2.map((card) => (
                    <div style={{ backgroundColor: "#cfcccf" }}
                        key={card.id}
                        className="card"
                        onClick={() => handleCardClick(card)}
                    >
                        <div className="card-content">
                            <img src={card["image"]} style={{ width: "100%", height: "15rem", objectFit: "fill" }} />
                            <button style={buttonStyle}>Buy</button>
                            <button style={buttonStyle}>Invest</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
