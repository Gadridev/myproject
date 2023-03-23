import './list.css'

function List(props){
    return(
        <>
          
        <div className="item-2">
            <div className="text-content">
              <h4>{props.Category}</h4>
              </div>
              <div className="para-1">
                <a href="#" id="lien-1">{props.lien}</a>
                <p id="t-1">{props.text}</p>
             </div>
        </div>
            
        </>
    )
}
export default List