import React, { useState } from 'react'
import './Main.css'
import img1 from '../../assets/img1.png'
import img2 from '../../assets/img2.png'
import img3 from '../../assets/img3.png'
import img4 from '../../assets/img4.png'
import img5 from '../../assets/img5.png'
import img6 from '../../assets/img6.png'
import img7 from '../../assets/img7.png'
import img8 from '../../assets/img8.png'
import img9 from '../../assets/img9.png'
import img10 from '../../assets/img10.png'
import img11 from '../../assets/img11.png'
import img12 from '../../assets/img12.png'
import img13 from '../../assets/img13.png'
import img14 from '../../assets/img14.png'
import img15 from '../../assets/img15.png'
import starActive from '../../assets/star-active.svg'
import starPassiv from '../../assets/star-passiv.svg'


function Main() {
    const [more, setMore] = useState(false)

    const handleSubmit = ()=> {
        setMore(!more)
    }
  return (
      <div className='main__container'>
          <div className="container">
              <h1 className="main__container-head">Mashhur <span>maxsulotlar</span></h1>
              <ul className="main__container-list">
                  <li className="main__container-item">
                      <img src={img1} alt={img1} className="main__container-item-img"/>
                      <div className="main__container-item-left">
                        <h3 className="main__container-title">Advan RT whel R18</h3>
                        <p className="main__container-name">G’ildiraklar bo’limi</p>
                        <h3 className="main__container-price">47 450 000 cўм</h3>
                        <div className="star">
                            <img src={starActive} alt={starActive} />
                            <img src={starActive} alt={starActive} />
                            <img src={starActive} alt={starActive} />
                            <img src={starActive} alt={starActive} />
                            <img src={starPassiv} alt={starPassiv} />
                        </div>
                      </div>
                      <button className="main__container-btn">Batafsil</button>
                  </li>

                  <li className="main__container-item">
                      <img src={img2} alt={img2}  className="main__container-item-img"/>
                      <div className="main__container-item-left">
                        <h3 className="main__container-title">LIQUI MOLY</h3>
                        <p className="main__container-name">Moylar bo’limi</p>
                        <h3 className="main__container-price">47 450 000 cўм</h3>
                        <div className="star">
                            <img src={starActive} alt="" />
                            <img src={starActive} alt="" />
                            <img src={starActive} alt="" />
                            <img src={starActive} alt="" />
                            <img src={starPassiv} alt="" />
                        </div>
                      </div>
                      <button className="main__container-btn">Batafsil</button>
                  </li>

                  <li className="main__container-item">
                      <img src={img3} alt={img3}  className="main__container-item-img"/>
                      <div className="main__container-item-left">
                        <h3 className="main__container-title">PZERO</h3>
                        <p className="main__container-name">Shinalar bo’limi</p>
                        <h3 className="main__container-price">47 450 000 cўм</h3>
                        <div className="star">
                            <img src={starActive} alt="" />
                            <img src={starActive} alt="" />
                            <img src={starActive} alt="" />
                            <img src={starActive} alt="" />
                            <img src={starPassiv} alt="" />
                        </div>
                      </div>
                      <button className="main__container-btn">Batafsil</button>
                  </li>

                  <li className="main__container-item">
                      <img src={img4} alt={img4}  className="main__container-item-img"/>
                      <div className="main__container-item-left">
                        <h3 className="main__container-title">Advan RT whel R18</h3>
                        <p className="main__container-name">G’ildiraklar bo’limi</p>
                        <h3 className="main__container-price">47 450 000 cўм</h3>
                        <div className="star">
                            <img src={starActive} alt="" />
                            <img src={starActive} alt="" />
                            <img src={starActive} alt="" />
                            <img src={starActive} alt="" />
                            <img src={starPassiv} alt="" />
                        </div>
                      </div>
                      <button className="main__container-btn">Batafsil</button>
                  </li>

                  <li className="main__container-item">
                      <img src={img5} alt={img5}  className="main__container-item-img"/>
                      <div className="main__container-item-left">
                        <h3 className="main__container-title">Light lines</h3>
                        <p className="main__container-name">Elektronika</p>
                        <h3 className="main__container-price">47 450 000 cўм</h3>
                        <div className="star">
                            <img src={starActive} alt="" />
                            <img src={starActive} alt="" />
                            <img src={starActive} alt="" />
                            <img src={starActive} alt="" />
                            <img src={starPassiv} alt="" />
                        </div>
                      </div>
                      <button className="main__container-btn">Batafsil</button>
                  </li>

                  <li className="main__container-item">
                      <img src={img6} alt={img6}  className="main__container-item-img"/>
                      <div className="main__container-item-left">
                        <h3 className="main__container-title">Light lines</h3>
                        <p className="main__container-name">Elektronika</p>
                        <h3 className="main__container-price">47 450 000 cўм</h3>
                        <div className="star">
                            <img src={starActive} alt="" />
                            <img src={starActive} alt="" />
                            <img src={starActive} alt="" />
                            <img src={starActive} alt="" />
                            <img src={starPassiv} alt="" />
                        </div>
                      </div>
                      <button className="main__container-btn">Batafsil</button>
                  </li>

                  <li className="main__container-item">
                      <img src={img7} alt={img7}  className="main__container-item-img"/>
                      <div className="main__container-item-left">
                        <h3 className="main__container-title">Light lines</h3>
                        <p className="main__container-name">Elektronika</p>
                        <h3 className="main__container-price">47 450 000 cўм</h3>
                        <div className="star">
                            <img src={starActive} alt="" />
                            <img src={starActive} alt="" />
                            <img src={starActive} alt="" />
                            <img src={starActive} alt="" />
                            <img src={starPassiv} alt="" />
                        </div>
                      </div>
                      <button className="main__container-btn">Batafsil</button>
                  </li>

                  <li className="main__container-item">
                      <img src={img8} alt={img8}  className="main__container-item-img"/>
                      <div className="main__container-item-left">
                        <h3 className="main__container-title">Light lines</h3>
                        <p className="main__container-name">Elektronika</p>
                        <h3 className="main__container-price">47 450 000 cўм</h3>
                        <div className="star">
                            <img src={starActive} alt="" />
                            <img src={starActive} alt="" />
                            <img src={starActive} alt="" />
                            <img src={starActive} alt="" />
                            <img src={starPassiv} alt="" />
                        </div>
                      </div>
                      <button className="main__container-btn">Batafsil</button>
                  </li>

                  <li className="main__container-item">
                      <img src={img9} alt={img9}  className="main__container-item-img"/>
                      <div className="main__container-item-left">
                        <h3 className="main__container-title">Light lines</h3>
                        <p className="main__container-name">Elektronika</p>
                        <h3 className="main__container-price">47 450 000 cўм</h3>
                        <div className="star">
                            <img src={starActive} alt="" />
                            <img src={starActive} alt="" />
                            <img src={starActive} alt="" />
                            <img src={starActive} alt="" />
                            <img src={starPassiv} alt="" />
                        </div>
                      </div>
                      <button className="main__container-btn">Batafsil</button>
                  </li>

                  <li className="main__container-item">
                      <img src={img10} alt={img10} className="main__container-item-img" />
                      <div className="main__container-item-left">
                        <h3 className="main__container-title">Light lines</h3>
                        <p className="main__container-name">Elektronika</p>
                        <h3 className="main__container-price">47 450 000 cўм</h3>
                        <div className="star">
                            <img src={starActive} alt="" />
                            <img src={starActive} alt="" />
                            <img src={starActive} alt="" />
                            <img src={starActive} alt="" />
                            <img src={starPassiv} alt="" />
                        </div>
                      </div>
                      <button className="main__container-btn">Batafsil</button>
                  </li>

                  <li className="main__container-item">
                      <img src={img11} alt={img11}  className="main__container-item-img"/>
                      <div className="main__container-item-left">
                        <h3 className="main__container-title">Light lines</h3>
                        <p className="main__container-name">Elektronika</p>
                        <h3 className="main__container-price">47 450 000 cўм</h3>
                        <div className="star">
                            <img src={starActive} alt="" />
                            <img src={starActive} alt="" />
                            <img src={starActive} alt="" />
                            <img src={starActive} alt="" />
                            <img src={starPassiv} alt="" />
                        </div>
                      </div>
                      <button className="main__container-btn">Batafsil</button>
                  </li>

                  <li className="main__container-item">
                      <img src={img12} alt={img12}  className="main__container-item-img"/>
                      <div className="main__container-item-left">
                        <h3 className="main__container-title">Light lines</h3>
                        <p className="main__container-name">Elektronika</p>
                        <h3 className="main__container-price">47 450 000 cўм</h3>
                        <div className="star">
                            <img src={starActive} alt="" />
                            <img src={starActive} alt="" />
                            <img src={starActive} alt="" />
                            <img src={starActive} alt="" />
                            <img src={starPassiv} alt="" />
                        </div>
                      </div>
                      <button className="main__container-btn">Batafsil</button>
                  </li>

                  <li className="main__container-item">
                      <img src={img13} alt={img13}  className="main__container-item-img"/>
                      <div className="main__container-item-left">
                        <h3 className="main__container-title">Light lines</h3>
                        <p className="main__container-name">Elektronika</p>
                        <h3 className="main__container-price">47 450 000 cўм</h3>
                        <div className="star">
                            <img src={starActive} alt="" />
                            <img src={starActive} alt="" />
                            <img src={starActive} alt="" />
                            <img src={starActive} alt="" />
                            <img src={starPassiv} alt="" />
                        </div>
                      </div>
                      <button className="main__container-btn">Batafsil</button>
                  </li>

                  <li className="main__container-item">
                      <img src={img14} alt={img14}  className="main__container-item-img"/>
                      <div className="main__container-item-left">
                        <h3 className="main__container-title">Light lines</h3>
                        <p className="main__container-name">Elektronika</p>
                        <h3 className="main__container-price">47 450 000 cўм</h3>
                        <div className="star">
                            <img src={starActive} alt="" />
                            <img src={starActive} alt="" />
                            <img src={starActive} alt="" />
                            <img src={starActive} alt="" />
                            <img src={starPassiv} alt="" />
                        </div>
                      </div>
                      <button className="main__container-btn">Batafsil</button>
                  </li>

                  <li className="main__container-item">
                      <img src={img15} alt={img15}  className="main__container-item-img"/>
                      <div className="main__container-item-left">
                        <h3 className="main__container-title">Light lines</h3>
                        <p className="main__container-name">Elektronika</p>
                        <h3 className="main__container-price">47 450 000 cўм</h3>
                        <div className="star">
                            <img src={starActive} alt="" />
                            <img src={starActive} alt="" />
                            <img src={starActive} alt="" />
                            <img src={starActive} alt="" />
                            <img src={starPassiv} alt="" />
                        </div>
                      </div>
                      <button className="main__container-btn">Batafsil</button>
                  </li>
              </ul>

              {!more && 
                <button className="all-product-btn" onClick={handleSubmit}>Ko’proq ko’rish</button>
              }

              {more && 
                <ul className="main__container-list main__container-list-bottom">
                <li className="main__container-item">
                    <img src={img1} alt={img1} className="main__container-item-img"/>
                    <div className="main__container-item-left">
                      <h3 className="main__container-title">Advan RT whel R18</h3>
                      <p className="main__container-name">G’ildiraklar bo’limi</p>
                      <h3 className="main__container-price">47 450 000 cўм</h3>
                      <div className="star">
                          <img src={starActive} alt={starActive} />
                          <img src={starActive} alt={starActive} />
                          <img src={starActive} alt={starActive} />
                          <img src={starActive} alt={starActive} />
                          <img src={starPassiv} alt={starPassiv} />
                      </div>
                    </div>
                    <button className="main__container-btn">Batafsil</button>
                </li>

                <li className="main__container-item">
                    <img src={img2} alt={img2}  className="main__container-item-img"/>
                    <div className="main__container-item-left">
                      <h3 className="main__container-title">LIQUI MOLY</h3>
                      <p className="main__container-name">Moylar bo’limi</p>
                      <h3 className="main__container-price">47 450 000 cўм</h3>
                      <div className="star">
                          <img src={starActive} alt="" />
                          <img src={starActive} alt="" />
                          <img src={starActive} alt="" />
                          <img src={starActive} alt="" />
                          <img src={starPassiv} alt="" />
                      </div>
                    </div>
                    <button className="main__container-btn">Batafsil</button>
                </li>

                <li className="main__container-item">
                    <img src={img3} alt={img3}  className="main__container-item-img"/>
                    <div className="main__container-item-left">
                      <h3 className="main__container-title">PZERO</h3>
                      <p className="main__container-name">Shinalar bo’limi</p>
                      <h3 className="main__container-price">47 450 000 cўм</h3>
                      <div className="star">
                          <img src={starActive} alt="" />
                          <img src={starActive} alt="" />
                          <img src={starActive} alt="" />
                          <img src={starActive} alt="" />
                          <img src={starPassiv} alt="" />
                      </div>
                    </div>
                    <button className="main__container-btn">Batafsil</button>
                </li>

                <li className="main__container-item">
                    <img src={img4} alt={img4}  className="main__container-item-img"/>
                    <div className="main__container-item-left">
                      <h3 className="main__container-title">Advan RT whel R18</h3>
                      <p className="main__container-name">G’ildiraklar bo’limi</p>
                      <h3 className="main__container-price">47 450 000 cўм</h3>
                      <div className="star">
                          <img src={starActive} alt="" />
                          <img src={starActive} alt="" />
                          <img src={starActive} alt="" />
                          <img src={starActive} alt="" />
                          <img src={starPassiv} alt="" />
                      </div>
                    </div>
                    <button className="main__container-btn">Batafsil</button>
                </li>

                <li className="main__container-item">
                    <img src={img5} alt={img5}  className="main__container-item-img"/>
                    <div className="main__container-item-left">
                      <h3 className="main__container-title">Light lines</h3>
                      <p className="main__container-name">Elektronika</p>
                      <h3 className="main__container-price">47 450 000 cўм</h3>
                      <div className="star">
                          <img src={starActive} alt="" />
                          <img src={starActive} alt="" />
                          <img src={starActive} alt="" />
                          <img src={starActive} alt="" />
                          <img src={starPassiv} alt="" />
                      </div>
                    </div>
                    <button className="main__container-btn">Batafsil</button>
                </li>

                <li className="main__container-item">
                    <img src={img6} alt={img6}  className="main__container-item-img"/>
                    <div className="main__container-item-left">
                      <h3 className="main__container-title">Light lines</h3>
                      <p className="main__container-name">Elektronika</p>
                      <h3 className="main__container-price">47 450 000 cўм</h3>
                      <div className="star">
                          <img src={starActive} alt="" />
                          <img src={starActive} alt="" />
                          <img src={starActive} alt="" />
                          <img src={starActive} alt="" />
                          <img src={starPassiv} alt="" />
                      </div>
                    </div>
                    <button className="main__container-btn">Batafsil</button>
                </li>

                <li className="main__container-item">
                    <img src={img7} alt={img7}  className="main__container-item-img"/>
                    <div className="main__container-item-left">
                      <h3 className="main__container-title">Light lines</h3>
                      <p className="main__container-name">Elektronika</p>
                      <h3 className="main__container-price">47 450 000 cўм</h3>
                      <div className="star">
                          <img src={starActive} alt="" />
                          <img src={starActive} alt="" />
                          <img src={starActive} alt="" />
                          <img src={starActive} alt="" />
                          <img src={starPassiv} alt="" />
                      </div>
                    </div>
                    <button className="main__container-btn">Batafsil</button>
                </li>

                <li className="main__container-item">
                    <img src={img8} alt={img8}  className="main__container-item-img"/>
                    <div className="main__container-item-left">
                      <h3 className="main__container-title">Light lines</h3>
                      <p className="main__container-name">Elektronika</p>
                      <h3 className="main__container-price">47 450 000 cўм</h3>
                      <div className="star">
                          <img src={starActive} alt="" />
                          <img src={starActive} alt="" />
                          <img src={starActive} alt="" />
                          <img src={starActive} alt="" />
                          <img src={starPassiv} alt="" />
                      </div>
                    </div>
                    <button className="main__container-btn">Batafsil</button>
                </li>

                <li className="main__container-item">
                    <img src={img9} alt={img9}  className="main__container-item-img"/>
                    <div className="main__container-item-left">
                      <h3 className="main__container-title">Light lines</h3>
                      <p className="main__container-name">Elektronika</p>
                      <h3 className="main__container-price">47 450 000 cўм</h3>
                      <div className="star">
                          <img src={starActive} alt="" />
                          <img src={starActive} alt="" />
                          <img src={starActive} alt="" />
                          <img src={starActive} alt="" />
                          <img src={starPassiv} alt="" />
                      </div>
                    </div>
                    <button className="main__container-btn">Batafsil</button>
                </li>

                <li className="main__container-item">
                    <img src={img10} alt={img10} className="main__container-item-img" />
                    <div className="main__container-item-left">
                      <h3 className="main__container-title">Light lines</h3>
                      <p className="main__container-name">Elektronika</p>
                      <h3 className="main__container-price">47 450 000 cўм</h3>
                      <div className="star">
                          <img src={starActive} alt="" />
                          <img src={starActive} alt="" />
                          <img src={starActive} alt="" />
                          <img src={starActive} alt="" />
                          <img src={starPassiv} alt="" />
                      </div>
                    </div>
                    <button className="main__container-btn">Batafsil</button>
                </li>

                <li className="main__container-item">
                    <img src={img11} alt={img11}  className="main__container-item-img"/>
                    <div className="main__container-item-left">
                      <h3 className="main__container-title">Light lines</h3>
                      <p className="main__container-name">Elektronika</p>
                      <h3 className="main__container-price">47 450 000 cўм</h3>
                      <div className="star">
                          <img src={starActive} alt="" />
                          <img src={starActive} alt="" />
                          <img src={starActive} alt="" />
                          <img src={starActive} alt="" />
                          <img src={starPassiv} alt="" />
                      </div>
                    </div>
                    <button className="main__container-btn">Batafsil</button>
                </li>

                <li className="main__container-item">
                    <img src={img12} alt={img12}  className="main__container-item-img"/>
                    <div className="main__container-item-left">
                      <h3 className="main__container-title">Light lines</h3>
                      <p className="main__container-name">Elektronika</p>
                      <h3 className="main__container-price">47 450 000 cўм</h3>
                      <div className="star">
                          <img src={starActive} alt="" />
                          <img src={starActive} alt="" />
                          <img src={starActive} alt="" />
                          <img src={starActive} alt="" />
                          <img src={starPassiv} alt="" />
                      </div>
                    </div>
                    <button className="main__container-btn">Batafsil</button>
                </li>

                <li className="main__container-item">
                    <img src={img13} alt={img13}  className="main__container-item-img"/>
                    <div className="main__container-item-left">
                      <h3 className="main__container-title">Light lines</h3>
                      <p className="main__container-name">Elektronika</p>
                      <h3 className="main__container-price">47 450 000 cўм</h3>
                      <div className="star">
                          <img src={starActive} alt="" />
                          <img src={starActive} alt="" />
                          <img src={starActive} alt="" />
                          <img src={starActive} alt="" />
                          <img src={starPassiv} alt="" />
                      </div>
                    </div>
                    <button className="main__container-btn">Batafsil</button>
                </li>

                <li className="main__container-item">
                    <img src={img14} alt={img14}  className="main__container-item-img"/>
                    <div className="main__container-item-left">
                      <h3 className="main__container-title">Light lines</h3>
                      <p className="main__container-name">Elektronika</p>
                      <h3 className="main__container-price">47 450 000 cўм</h3>
                      <div className="star">
                          <img src={starActive} alt="" />
                          <img src={starActive} alt="" />
                          <img src={starActive} alt="" />
                          <img src={starActive} alt="" />
                          <img src={starPassiv} alt="" />
                      </div>
                    </div>
                    <button className="main__container-btn">Batafsil</button>
                </li>

                <li className="main__container-item">
                    <img src={img15} alt={img15}  className="main__container-item-img"/>
                    <div className="main__container-item-left">
                      <h3 className="main__container-title">Light lines</h3>
                      <p className="main__container-name">Elektronika</p>
                      <h3 className="main__container-price">47 450 000 cўм</h3>
                      <div className="star">
                          <img src={starActive} alt="" />
                          <img src={starActive} alt="" />
                          <img src={starActive} alt="" />
                          <img src={starActive} alt="" />
                          <img src={starPassiv} alt="" />
                      </div>
                    </div>
                    <button className="main__container-btn">Batafsil</button>
                </li>
            </ul>
              }

                {more && 
                    <button className="all-product-btn" onClick={handleSubmit}>Ortga qaytish</button>
                }
          </div>
    </div>
  )
}

export default Main