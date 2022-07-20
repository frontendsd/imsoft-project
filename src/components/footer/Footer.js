import React from 'react'
import './Footer.css'
import telegram from '../../assets/telegram.svg'
import instagram from '../../assets/instagram.svg'
import facebook from '../../assets/facebook.svg'
import { Link } from 'react-router-dom'

function Footer() {
  return (
      <div className='footer'>
          <div className="container">
              <div className="footer__container">
                  <ul className="social__list">
                      <li className="social__item">
                          <Link to="/">
                            <h2 className="social__item-logo">Onlayn <span>savdo</span></h2>
                          </Link>
                          <p className="social__item-info">onlayn do’koni</p>
                      </li>
                      <li className="social__item">
                          <p className="social__item-text">Savollar bo’yicha murojat uchun:</p>
                          <a href="#" className="social__item-email">info@imsoft.uz</a>
                      </li>
                      <li className="social__item">
                          <img src={facebook} alt={facebook} className="social__item-icon" />
                          <img src={instagram} alt={instagram} className="social__item-icon" />
                          <img src={telegram} alt={telegram} className="social__item-icon" />
                      </li>
                  </ul>

                  <ul className="news__list">
                      <li className="news__item">
                          <h3 className="news__item-text">Kompaniya</h3>
                      </li>
                      <li className="news__item">
                          <Link to="/" className='news__item-link'>
                              Yangiliklar
                          </Link>
                      </li>
                      <li className="news__item">
                         <Link to="/KompaniyaHaqida" className='news__item-link'>
                              Kompaniya haqida
                         </Link>
                      </li>
                      <li className="news__item">
                          <Link to="/BizningOfislar" className='news__item-link'>
                          Bizning ofislar
                          </Link>
                      </li>
                      <li className="news__item">
                          <Link to="/BiznesUchun" className='news__item-link'>
                              Biznes uchun
                          </Link>
                      </li>
                  </ul>

                  <ul className="news__list">
                      <li className="news__item">
                          <h3 className="news__item-text">Ma’lumotlar</h3>
                      </li>
                      <li className="news__item">
                          <Link to="/Tolov" className='news__item-link'>
                              To'lov rejasi (Рассрочка)
                          </Link>
                      </li>
                      <li className="news__item">
                          <Link to="/YetkazibBerish" className='news__item-link'>
                              Yetkazib berish
                          </Link>
                      </li>
                      <li className="news__item">
                         <Link to="/Aloqa" className='news__item-link'>
                              Aloqa
                         </Link>
                      </li>
                  </ul>

                  <ul className="news__list">
                      <li className="news__item">
                          <h3 className="news__item-text">Biz bilan bog’lanish</h3>
                      </li>
                      <li className="news__item">
                          Manzil: <span>100096, Toshkent, Muqumiy, 13</span>
                      </li>
                      <li className="news__item">
                          Qisqa raqam: <span>1216</span>
                      </li>
                      <li className="news__item">
                          Faks: <span>+998 71 150 53 95</span>
                      </li>
                      <li className="news__item">
                          E-mail: <span className='news__item-email'>company@imsoft.uz</span>
                      </li>
                  </ul>
              </div>
              <p className="footer__title">2021 © Barcha huquqlar himoyalangan va litsenziyalangan</p>
          </div>
    </div>
  )
}

export default Footer