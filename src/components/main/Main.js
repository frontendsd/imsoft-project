import React, { useEffect, useState } from "react";
import "./Main.css";
import { Link } from "react-router-dom";
import Loading from "../loading/Loading";
import starActive from "../../assets/star-active.svg";
import starPassiv from "../../assets/star-passiv.svg";

const url = 'http://localhost:3000/market'

function Main() {
  const [loading, setLoading] = useState(true)
  const [market, setMarket] = useState([])
  const [more, setMore] = useState(false);

  const fetchData = async () => {
    setLoading(true)
    try {
      const responce = await fetch(url)
      const market = await responce.json()
      setLoading(false)
      setMarket(market)
    } catch (error) {
      setLoading(false) 
      // console.log(error);
    }
  }

  useEffect(() => {
    fetchData()
  }, [])



  const handleSubmit = () => {
    setMore(!more);
  };

  return (
    <div className="main__container">
      <div className="container">
        <h1 className="main__container-head">
          Mashhur <span>maxsulotlar</span>
        </h1>

        {loading && <div><Loading/></div>}

       {!loading && <ul className="main__container-list">
          {market.map((item) => {
            return (
             <li className="main__container-item" key={item.id}>
                <img src={item.img} alt={item.img} className="main__container-item-img" />
                <div className="main__container-item-left">
                  <h3 className="main__container-title">{ item.name }</h3>
                  <p className="main__container-name">{ item.bolim }</p>
                  <h3 className="main__container-price">{ item.price}</h3>
                  <div className="star">
                      <img src={starActive} alt={starActive} />
                      <img src={starActive} alt={starActive} />
                      <img src={starActive} alt={starActive} />
                      <img src={starActive} alt={starActive} />
                      <img src={starPassiv} alt={starPassiv} />
                  </div>
                </div>
                <Link to="/Batafsil" item={item}>
                  <button className="main__container-btn">Batafsil</button>
                </Link>
              </li> 
            )
          })}
        </ul>}

        {!more && (
          <button className="all-product-btn" onClick={handleSubmit}>
            Ko’proq ko’rish
          </button>
        )}

        {more && (
          <ul className="main__container-list">
          {market.map((item) => {
            return (
             <li className="main__container-item" key={item.id}>
                <img src={item.img} alt={item.img} className="main__container-item-img" />
                <div className="main__container-item-left">
                  <h3 className="main__container-title">{ item.name }</h3>
                  <p className="main__container-name">{ item.bolim }</p>
                  <h3 className="main__container-price">{ item.price}</h3>
                  <div className="star">
                      <img src={starActive} alt={starActive} />
                      <img src={starActive} alt={starActive} />
                      <img src={starActive} alt={starActive} />
                      <img src={starActive} alt={starActive} />
                      <img src={starPassiv} alt={starPassiv} />
                  </div>
                </div>
                <Link to="/Batafsil">
                  <button className="main__container-btn">Batafsil</button>
                </Link>
              </li> 
            )
          })}
        </ul>
        )}

        {more && (
          <button className="all-product-btn" onClick={handleSubmit}>
            Ortga qaytish
          </button>
        )}
      </div>
    </div>
  );
}

export default Main;
