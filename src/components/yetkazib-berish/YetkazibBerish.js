import './YetkazibBerish.css'
import furgon from '../../assets/furgon.svg'
import car from '../../assets/car.svg'

function YetkazibBerish() {
  return (
      <div className='container yetkazish__container'>
          <h1 className="yetkazish__title">Onlayn savdo <span> turli xil yuqori sifatli yetkazib berish xizmatlarini taklif etadi.</span></h1>
          <ul className="yetkazish__list">
              <img src={furgon} alt={furgon} className="yetkazish__img" />
              <li className="yetkazish__item">
                  <h2 className="yetkazish__item-title">Yetkazib berish</h2>
                  <p className="yetkazish__item-info">O'zbekiston bo'ylab yetkazib      berish (1 500 000 so'mdan yuqori xaridlar uchun) - Bepul
                    Aksessuarlarni yetkazib berish (g'iloflar, naushniklar, klaviaturalar, sichqonlar va boshqalar) - 30 000 so'm</p>
              </li>
          </ul>

          <ul className="yetkazish__list">
              <img src={car} alt={car} className="yetkazish__img" />
              <li className="yetkazish__item">
                  <h2 className="yetkazish__item-title">Ekspres yetkazib berish</h2>
                  <p className="yetkazish__item-info">Tezlashtirilgan yetkazib berish buyurtma tasdiqlangan paytdan boshlab 1,5 soat ichida amalga oshiriladi.
                    Toshkent shahri ichida tez yetkazib berish narxi 50 000 so‘m.
                    Batafsil ma'lumotni MacBro do'konining call-markaziga +998 (xx) xxx-xx-xx raqamiga                  qo'ng'iroq qilib olishingiz mumkin.</p>
              </li>
          </ul>
    </div>
  )
}

export default YetkazibBerish