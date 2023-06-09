import './Cards.css'
import { RiStarSFill } from 'react-icons/ri'
function Cards(props){
   return(
    <div className="item-1">
        s
    <img id="img-1" src={props.image} alt="error" />
    <div className="text-cont">
        <h4 className="text-3"> {props.text_1}</h4>
        <p id="t-1">{props.text_2}</p>
        <p id="t-2">4,5 
        <span style={{"color":"orange"}}><RiStarSFill  /><RiStarSFill /><RiStarSFill /><RiStarSFill /><RiStarSFill /></span>
            (450)
            <br />
            <p id="text-pai">{props.prix}</p>
        </p>
    </div>
  </div>
   )

}
export default Cards