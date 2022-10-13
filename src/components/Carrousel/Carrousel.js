
import Carousel from 'react-bootstrap/Carousel';
import React from 'react';

const Carrousel = ({urlPropImg} ) =>{


  // se pasa por prop o context el array de fotos

  
  return(<>
  <div>

    {/*  se cambia el numero de antes del id y hay mas fotos 
     "https://assets.easybroker.com/property_images/979769/14711126/EB-CS9769.jpg?version=1552076728"
  "https://assets.easybroker.com/property_images/979769/14711127/EB-CS9769.jpg?version=1552076728"
  "https://assets.easybroker.com/property_images/979769/14711128/EB-CS9769.jpg?version=1552076728" */}

  <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="true">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={urlPropImg} className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={urlPropImg} className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={urlPropImg} className="d-block w-100" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>









  </div>
    
    
    
    
    
    
    </>)
}

export default Carrousel
