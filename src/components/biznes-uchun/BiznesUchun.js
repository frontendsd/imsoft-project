import './BiznesUchun.css'

function BiznesUchun() {
  return (
      <div className='container'>
          <div className="biznes">
              <h1 className="biznes__title">Biznes uchun <span>qo’ng’iroq</span></h1>
              <form className='form__controls'>
                  <input type="text" placeholder='F.I.SH'/>
                  <input type="text" placeholder='Telefon raqam'/>
                  <select name="" id="">
                      <option value="region">Region</option>
                      <option value="andijon">Andijon</option>
                      <option value="namangan">Namangan</option>
                      <option value="fargona">Farg'ona</option>
                  </select>
                  <input type="text" placeholder='Matn'/>
                  <button className="send">Yuborish</button>
              </form>
          </div>
    </div>
  )
}

export default BiznesUchun