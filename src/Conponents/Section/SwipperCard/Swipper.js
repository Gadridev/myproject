import React from 'react'
import image_1 from '../../../Assets/image2.jpg'
import image_2 from '../../../Assets/image3.jpg'
import image_3 from '../../../Assets/image4.jpg'
import image_4 from '../../../Assets/image5.jpg'
import image_5 from '../../../Assets/image2.jpg'
import image_6 from '../../../Assets/image3.jpg'
import image_7 from '../../../Assets/image5.jpg'
import image_8 from '../../../Assets/image6.jpg'

import { Pagination ,Navigation,Scrollbar,A11y } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Cardsh from './Card_f';
import { click } from '@testing-library/user-event/dist/click'


function Swipperslide() {
//   return (
//     <>
     
 
    return(
        <div className="content">
          <div className="text-1">
              <div className="title-1"><h1>Une large sélection de cours</h1></div>
              <div className="para-1"><p>Choisissez parmi 204 000 vidéos de cours en ligne. De nouveaux cours sont ajoutés tous les mois</p></div>
          </div>
          <div className="cards-1">
              <div className="text-gen">
                  <div className="text-2"><h3>Développez vos opportunités de carrière avec Python</h3></div>
                  <div className="para-2"><p>Que vous travailliez dans le machine learning ou dans la finance, dans le développement Web ou dans la science des données, le langage Python est l'une des compétences les plus importantes à acquérir. La syntaxe simple de Python convient particulièrement aux applications bureautiques, Web et commerciales..</p>
                    <a href="#" id="btn-lien">Decouvrez Python</a>
                  </div>
              </div>
              <br />
              <div className="card-1" id="1" >
              <Swiper
        
       modules={[Navigation, Pagination, Scrollbar, A11y]}
       spaceBetween={-100}
       slidesPerView={5}
       navigation
       pagination={{clickable : true}}
       onSwiper={(swiper) => console.log(swiper)}
       onSlideChange={() => console.log('slide change')}
     >
       <SwiperSlide><Cardsh image ={image_1} txt1=" Python avancé : aller plus loin" txt2="Thibault holdon|Formateur python|Docs..." rt="4,5" price="4,5" /></SwiperSlide>
       <SwiperSlide><Cardsh image ={image_2} txt1=" Python avancé : aller plus loin" txt2="Thibault holdon|Formateur python|Docs..." rt="4,5" price="4,5" /></SwiperSlide>
       <SwiperSlide><Cardsh image ={image_3} txt1=" Python avancé : aller plus loin" txt2="Thibault holdon|Formateur python|Docs..." rt="4,5" price="4,5" /></SwiperSlide>
       <SwiperSlide><Cardsh image ={image_4} txt1=" Python avancé : aller plus loin" txt2="Thibault holdon|Formateur python|Docs..." rt="4,5" price="4,5" /></SwiperSlide>
       <SwiperSlide><Cardsh image ={image_5} txt1=" Python avancé : aller plus loin" txt2="Thibault holdon|Formateur python|Docs..." rt="4,5" price="4,5" /></SwiperSlide>
       <SwiperSlide><Cardsh image ={image_6} txt1=" Python avancé : aller plus loin" txt2="Thibault holdon|Formateur python|Docs..." rt="4,5" price="4,5" /></SwiperSlide>
       <SwiperSlide><Cardsh image ={image_7} txt1=" Python avancé : aller plus loin" txt2="Thibault holdon|Formateur python|Docs..." rt="4,5" price="4,5" /></SwiperSlide>
       <SwiperSlide><Cardsh image ={image_8} txt1=" Python avancé : aller plus loin" txt2="Thibault holdon|Formateur python|Docs..." rt="4,5" price="4,5" /></SwiperSlide>
       ...
     </Swiper>

            
  
               </div>
          </div>
        </div>
      )
  
}

export default Swipperslide
