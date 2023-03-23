import './iconSho.css'
import image1 from '../../../Assets/nasdaq-dark.svg'
import image2 from '../../../Assets/volkswagen-dark.svg'
import image3 from '../../../Assets/box-dark.svg'
import image4 from '../../../Assets/netapp-dark.svg'
import image5 from '../../../Assets/eventbrite-dark.svg'
import image6 from '../../../Assets/tcs-dark.svg'


function IconShow(){
    return(
        <>
    <div className="icon-1">
      <div className="icon-2">
        <div className="flexb-1">
          <h2>Les meilleures entreprises nous font confiance</h2>
          <p>Les entreprises leaders utilisent les mêmes cours pour aider leurs employés à maintenir leurs compétences à jour.</p>
          <ul className="list-2">
            <li><img src={image1} alt='error' /></li>
            <li><img src={image2} alt='error' /></li>
            <li><img src={image3} alt='error' /></li>
            <li><img src={image4} alt='error' /></li>
            <li><img src={image5} alt='error' /></li>
            <li><img src={image6} alt="error" /></li>
          </ul>
        </div>
      </div>
    </div>
        </>
    )
}
export default IconShow;