import Upload from '../upload-image/Upload'
import './Tolov.css'

function Tolov() {
  return (
      <div className='container'>
          <div className="tolov">
              <div className="tolov__info">
                  <h1 className="tolov__info-title">To'lov rejasi (Рассрочка)</h1>
                  <p className="tolov__info-text">Onlayn-savdodan maxsus to'lov rejasi! <br /> Orzularingizni ertangi kunga qoldirmang! <br /> Hozir xarid qiling, keyinroq katta chegirmalar bilan to‘lang!</p>
                  <h3 className="tolov__info-buy">Bo'lib bo'lib sotib oling</h3>
                  <ul className="tolov__list">
                      <li className="tolov__item">3 oy</li>
                      <li className="tolov__item">6 oy</li>
                      <li className="tolov__item">9 oy</li>
                      <li className="tolov__item">12 oy</li>
                  </ul>
                  <p className="tolov__info-end">Faqat dastlabki to’lov va pasport talab qilinadi.</p>
              </div>
              <form className="tolov__form">
                  <input type="text" className="tolov__input tolov_1" placeholder='F.I.SH'/>
                  <input type="text" className="tolov__input" placeholder='Telefon raqam'/>
                  <select name="" id="" className='tolov__select'>
                      <option value="region">Region</option>
                      <option value="Andijon">Andijon</option>
                      <option value="Fargona">Farg'ona</option>
                      <option value="Namangan">Namangan</option>
                  </select>
                  <div className="upload__image">
                      <Upload/>
                  </div>
                  <input type="text" className="tolov__input" placeholder='Matn'/>
                  <button className="tolov__btn">Yuborish</button>
              </form>
          </div>
    </div>
  )
}

export default Tolov