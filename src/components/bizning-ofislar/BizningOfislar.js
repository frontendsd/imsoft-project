import './BizningOfislar.css'
import diagramma from '../../assets/diagramma.svg'
import location from '../../assets/location.svg'
import clock from '../../assets/clock.svg'

function BizningOfislar() {
  return (
      <div className='container'>
        <div className="office">
          <h1 className="office__title">Bizning <span>ofislarimiz</span></h1>
          <table className='office__table'>
              <tr className='office__tr'>
                  <td className='office__td'>
                      <img src={diagramma} alt="" />
                      <span>Filiallar</span>
                  </td>
                  <td className='office__td'>
                     <img src={location} alt="" />
                      <span>Lokatsiya</span>
                  </td>
                  <td className='office__td'>
                    <img src={clock} alt="" />
                      <span>Ish vaqti</span>
                  </td>
              </tr>
              <tr className='table__row'>
                  <td>Filial nomi:</td>
                  <td>Locatsiya</td>
                  <td>Ish vaqti</td>
              </tr>
              <tr className='table__row'>
                  <td>Filial nomi:</td>
                  <td>Locatsiya</td>
                  <td>Ish vaqti</td>
              </tr>
              <tr className='table__row'>
                  <td>Filial nomi:</td>
                  <td>Locatsiya</td>
                  <td>Ish vaqti</td>
              </tr>
          </table>
        </div>
    </div>
  )
}

export default BizningOfislar