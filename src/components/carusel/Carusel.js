import './Carusel.css'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from 'react-responsive-carousel'
import shina1 from '../../assets/shina1.svg'
import shina2 from '../../assets/shina2.svg'
import shina3 from '../../assets/shina3.svg'
import shina4 from '../../assets/shina4.svg'


function Carusel() {
  return (
      <div>
          <Carousel>
              <div className="image">
                  <img src={shina1} alt="" />
              </div>
              <div className="image">
                  <img src={shina2} alt="" />
              </div>
              <div className="image">
                  <img src={shina3} alt="" />
              </div>
              <div className="image">
                  <img src={shina4} alt="" />
              </div>
          </Carousel>

    </div>
  )
}

export default Carusel