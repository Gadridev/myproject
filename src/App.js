import './App.css';
import Header from './Conponents/Section/Headers/Header';
import Acceuil from './Conponents/Section/Acceuil/Acceuil';
import Content from './Conponents/Section/Content/Content';
import CardShow from './Conponents/Section/Content_2/CardSho';
import CategoryShow from './Conponents/Section/CategoryShow/CategoryShow';
import ListP from './Conponents/Section/ListP/ListP';
import Formf from './Conponents/Section/formatteur/FormF';
import IconShow from './Conponents/Section/IconSh/icoSh';
import img_1 from '../src/Assets/instructor-mobile-v3.jpg'
import img_2 from '../src/Assets/ub-2x-v3.jpg'
import img_3 from '../src/Assets/transform-2x-v3.jpg'
import ShowF from './Conponents/Section/showFooter/ShowF';
import Swipperslide from './Conponents/Section/SwipperCard/Swipper';
import { useEffect, useState } from 'react';
import Login from './Conponents/form/Login';

function App() {


  return (
    <div>
    
    <Header />
    <Acceuil />
    <Content />
    <CardShow />
    <CategoryShow />
    <ListP />
    <Formf  img={img_1} text_1="Devenir formateur" text_2="Nos formateurs du monde entier donnent des cours à des millions de participants sur Udemy. Nous vous offrons les outils et les compétences nécessaires pour enseigner ce que vous aimez." />
    <IconShow  />
    <Formf  img={img_2} text_1="Devenir formateur" text_2="Nos formateurs du monde entier donnent des cours à des millions de participants sur Udemy. Nous vous offrons les outils et les compétences nécessaires pour enseigner ce que vous aimez." />
    <Formf  img={img_3} text_1="Transformez votre vie grâce à l'apprentissage" text_2="Nos formateurs du monde entier donnent des cours à des millions de participants sur Udemy. Nous vous offrons les outils et les compétences nécessaires pour enseigner ce que vous aimez." />
    <ShowF /> 
    </div>
  )
  }
export default App;
