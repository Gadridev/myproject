import './Card_n.css'

function Card_n(props){
    return(
    <section className="text">
                <div className="container">
                    <div className="card">
                        <p id="title">{props.title}</p>
                        <p>{props.para}</p>
                    </div>
                  </div>
    </section>
    )

}
export default Card_n