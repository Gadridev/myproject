import './CardShow.css'
import Cards from "../Cards/Cards";
import Card_Data from '../../../Data/Cards_data';

function CardShow(){
    const Card=Card_Data.map(card=>{
        return <Cards key={card.id} image={card.image} text_1={card.text_1} text_2={card.text_2} prix={card.prix} />
        
    })
    return(
        <>
        <div className="title-t"><h1>Les participants consultent</h1></div>
        <div className="card-1" id="1" >
              {Card}
             </div>
        </>
    )
}
export default CardShow;