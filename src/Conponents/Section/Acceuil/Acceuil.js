import React from 'react';
import { ReactDOM } from 'react';
import Card_n from '../Card-nav/Card_n';
import Carousel from 'react-bootstrap/Carousel';
import nav from '../../../Assets/img-1.png'
import nav_2 from '../../../Assets/img-2.png'
import nav_3 from '../../../Assets/nav-3.jpg'
import './Acceuil.css';
function Acceuil(){
    return(
        <>
        <Carousel className='carousel'>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={nav}
          alt="First slide"
        />
        <Card_n  title="Vente flash de 24 heures" para="Apprenez auprès de formateurs confirmés. Connectez-vous pour profiter d'offres spéciales. La promotion se termine ce soir !"  />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={nav_2}
          alt="Second slide"
        />
        <Card_n  title="Vente flash de 24 heures" para="Apprenez auprès de formateurs confirmés. Connectez-vous pour profiter d'offres spéciales. La promotion se termine ce soir !"  />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={nav_3}
          alt="Third slide"
        />
        <Card_n  title="Vente flash de 24 heures" para="Apprenez auprès de formateurs confirmés. Connectez-vous pour profiter d'offres spéciales. La promotion se termine ce soir !"  />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </>
    )


}

export default Acceuil