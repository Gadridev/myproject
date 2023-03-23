import './formg.css'
import img_1 from '../../../Assets/instructor-mobile-v3.jpg'

function Formf(props){
    return(
        <>
    <section className="sec-1">
      <div className="flex-1">
        <div className="flex-2">
          <img src={props.img} id="title-img" alt="" />
          <div className="flex-3">
            <h3 id="title-dev">{props.text_1}</h3>
            <p id="title-para"> {props.text_2}</p>
            <a href="#" id="title-lien">Commancez a enseigner des aujourdhuit</a>
          </div>
        </div>
      </div>
    </section>
      </>
    )
}
export default Formf