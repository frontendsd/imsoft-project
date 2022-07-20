
import Carusel from '../carusel/Carusel'
import './Batafsil.css'

import eyes from '../../assets/eye.svg'
import { Link, NavLink } from 'react-router-dom'
import Main from '../main/Main'
function Batafsil() {

  return (
      <div className='container'>
          <div className="carusel__info">
            <div className="carusel__left">
              <Carusel />
            </div>
            <div className="carusel__right">
                  <div className="carusel__right-title">
                    <h1 className="carusel__right-head">FONDMETAL Makhai (new)</h1>
                    <span><img src={eyes} alt={eyes} /> 0</span> 
                  </div>    
                <p className="carusel__right-info">Диск FONDMETAL Makhai 9 x 21 5*112 Et: 25 Dia: 66,5 Black Glossy Machined</p>
                <h5 className="carusel__right-color-title">Ранги</h5>  
                  <div className="carusel__right-color">
                      <div className="carusel__black">
                          <div className="black"></div>
                          <h5 className="black__title">Черная</h5>
                      </div>
                      <div className="carusel__white">
                          <div className="white"></div>
                          <h5 className="white__title">Стальная</h5>
                      </div>
                  </div>
                  {/* <div className='plus'>
                    <span className="inc">-</span>
                      1
                    <span className="dec">+</span>  
                  </div>   */}
          <table className='table'>
            <tr className='table__row'>
              <td className='incr'>-</td>
              <td className='table__number'>1</td>
              <td className='decr'>+</td>
            </tr>
          </table>
                <span className="price">
                  7 450 000 so’m
                  <p className="price-aksiya">8 000 000 so’m</p>
                </span>
          {/* <Link to="/AddCart"> */}
            <button className="korzinka__btn">
               Korzinaga qo’shish
            </button>
          {/* </Link> */}
        </div>
        
      </div>
      <div className="batafsil-tavsif">
        <p className="tavsif">Tavsif</p>
        <p className="batafsil">Batafsil</p>
      </div>

      <h3 className="table__head">Batafsil</h3>
      <table>
        <tr>
          <td className='td'>Ishlab chiqaruvchi</td>
          <td>FONDMETAL</td>
        </tr>
        <tr>
          <td className='td'>Turi:</td>
          <td>Alloy, литой</td>
        </tr>
        <tr>
          <td className='td'>Status</td>
          <td>под заказ 3-4 дняte</td>
        </tr>
      </table>
      <button className="batafsil__btn">
        <NavLink to='/' className='batafsil__link'>
          Asosiy sahifa
        </NavLink>
      </button>

      <Main />
    </div>
  )
}

export default Batafsil