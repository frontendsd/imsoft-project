import './Aloqa.css'

function Aloqa() {
  return (
      <div className='container'>
          <div className="aloqa">
              <div className="aloqa__info">
                  <h1 className="aloqa__info-title">Aloqa</h1>
                  <p className="aloqa__info-text">Bizga sharhlaringizni yuborish yoki veb-saytimizda ma'lumot qidirishda duch kelgan muammolar haqida xabar berish uchun quyidagi shakldan foydalaning. Biz barcha sharhlarni diqqat bilan o'qib chiqamiz, lekin siz yuborgan sharhlarga javob bera olmasligimizni unutmang.</p>
                  <h3 className="aloqa__info-address">Biz bilan aloqa</h3>
                  <ul className="aloqa__list">
                      <li className="aloqa__item">+998xx xxx-xx-xx</li>
                      <li className="aloqa__item">mail@domain.uz</li>
                      <li className="aloqa__item">Toshkent, Yakkasaroy, Alisher.N,12</li>
                      <li className="aloqa__item">Toshkent, Yakkasaroy, Alisher.N,12</li>
                      <li className="aloqa__item">Toshkent, Yakkasaroy, Alisher.N,12</li>
                      <li className="aloqa__item">Toshkent, Yakkasaroy, Alisher.N,12</li>
                  </ul>
              </div>
              <form className="aloqa__form">
                  <input type="text" className="aloqa__input input_1" placeholder='F.I.SH'/>
                  <input type="text" className="aloqa__input" placeholder='Telefon raqam'/>
                  <input type="text" className="aloqa__input" placeholder='Matn'/>
                  <button className="aloqa__btn">Yuborish</button>
              </form>
          </div>
    </div>
  )
}

export default Aloqa