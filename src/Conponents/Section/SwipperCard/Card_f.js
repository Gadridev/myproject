import React from 'react';
import imag1 from '../../../Assets/image2.jpg'

const Cardsh = (props) => {
  return (
    <div class="item-1">
    <a href="nextSec.html">
    <img id="img-1" src={props.image} alt="" />
  </a>
    <div class="text-cont">
        <h4 class="text-3">{props.txt1}</h4>
        <p id="t-1">{props.txt2}</p>
        <p id="t-2">{props.rt} <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star"></span>
            <span class="fa fa-star"></span>
            (450)
            <br />
            <p id="text-pai">{props.price}</p>
        </p>
      
    </div>
  </div>
  )
};

export default Cardsh;
