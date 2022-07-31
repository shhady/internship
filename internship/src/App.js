import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import "./crypto.css";
import ReactCardFlip from "react-card-flip";
const App = () => {
  const [cryptosData, setCryptosData] = useState(null);
  const [isFlipped, setIsFlipped] = useState(false);

  const url =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=9&page=1&sparkline=false";
  useEffect(() => {
    const search = async () => {
      const response = await axios.get(url);
      setCryptosData(response.data);
    };
    search();
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setIsFlipped(!isFlipped);
    }, 3000);
  });

  // console.log(cryptosData);
  if (!cryptosData) return null;
  const CryptoTicksCardsFirst = () => {
    return cryptosData.slice(0, 3).map((crypto) => {
      return (
        <div className="crypto1" key={crypto.name}>
          <img src={crypto.image} alt="" className="cryptoImg" />

          <h5>{crypto.name}</h5>
          <p>${crypto.current_price.toLocaleString()}</p>

          {crypto.price_change_percentage_24h < 0 ? (
            <span className="red">
              %{crypto.price_change_percentage_24h.toFixed(2)}
            </span>
          ) : (
            <span className="green">
              %{crypto.price_change_percentage_24h.toFixed(2)}
            </span>
          )}
        </div>
      );
    });
  };
  // const CryptoTicksCardsSecond = () => {
  //   return cryptosData.slice(4, 5).map((crypto) => {
  //     return (
  //       <div className="crypto" key={crypto.name}>
  //         <img src={crypto.image} alt="" className="cryptoImg" />

  //         <h5>{crypto.name}</h5>
  //         <p>${crypto.current_price.toLocaleString()}</p>

  //         {crypto.price_change_percentage_24h < 0 ? (
  //           <span className="red">
  //             %{crypto.price_change_percentage_24h.toFixed(2)}
  //           </span>
  //         ) : (
  //           <span className="green">
  //             %{crypto.price_change_percentage_24h.toFixed(2)}
  //           </span>
  //         )}
  //       </div>
  //     );
  //   });
  // };

  const CryptoTicksCardsThird = () => {
    return cryptosData.slice(6, 9).map((crypto) => {
      return (
        <div className="crypto2" key={crypto.name}>
          <img src={crypto.image} alt="" className="cryptoImg" />

          <h5>{crypto.name}</h5>
          <p>${crypto.current_price.toLocaleString()}</p>

          {crypto.price_change_percentage_24h < 0 ? (
            <span className="red">
              %{crypto.price_change_percentage_24h.toFixed(2)}
            </span>
          ) : (
            <span className="green">
              %{crypto.price_change_percentage_24h.toFixed(2)}
            </span>
          )}
        </div>
      );
    });
  };

  return (
    <div className="top">
      {/* <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical"> */}
      <div className="main">
        {CryptoTicksCardsFirst()}
        {CryptoTicksCardsThird()}
        {/* {CryptoTicksCardsSecond()} */}
      </div>
      {/* </ReactCardFlip> */}
    </div>
  );
};
export default App;
