import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

import search from '../../assets/search.svg'
import settings from '../../assets/settings.svg'
import ring from '../../assets/ring.svg'
import korzinka from '../../assets/korzinka.svg'
import accaunt from '../../assets/akkaunt.svg'

function Navbar() {
    return (
        <nav className="navbar">
            <div className="container">
                <div className="navbar__container">
                    <div className="logo">
                        <Link to="/" className='logo__link'>
                            Onlayn <span>savdo</span>
                        </Link>
                    </div>
                    <div className="search">
                        <form className='form__control'>
                            <input type="text" className="input" placeholder='Qidiruv'/>
                            <img src={search} alt={search} />
                        </form>
                        <div className="search__settings">
                            <img src={settings} alt={settings} className="settings" />
                        </div>
                    </div>
                    <ul className="accaunt__list">
                        <li className="accaunt__item">
                            <p className="language">UZ</p>
                        </li>
                        <li className="accaunt__item">
                            <img src={ring} alt={ring} className="ring" />
                        </li>
                        <li className="accaunt__item">
                            <Link to='/AddCart'>
                                <img src={korzinka} alt={korzinka}  />
                            </Link>
                        </li>
                        <li className="accaunt__item">
                            <img src={accaunt} alt={accaunt} className="accaunt" />
                        </li>
                    </ul>
                </div>
            </div>
      </nav>
  )
}

export default Navbar