import Carousel from 'react-bootstrap/Carousel';
import './Sliders.css'


function UncontrolledExample() {
  return (
    <Carousel variant='dark'>
      <Carousel.Item>
        <div className='img'>
          <img src="img/slider/slider1.jpg" alt="" /> 
        </div>
    
        <Carousel.Caption>
        <h3>Winter Season</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <div className='img'>
          <img src="img/slider/slider2.jpg" alt="" /> 
        </div>
        <Carousel.Caption>
        <h3>Winter Season</h3>
    
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <div className='img'>
          <img src="img/slider/slider3.jpg" alt="" /> 
        </div>
        <Carousel.Caption>
          <h3>Winter Season</h3>
          
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledExample;