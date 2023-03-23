import './Category.css'

function Category(props){
    return(
        <>
          <a href="#" id="decoration">
            <div className="images"><img src={props.images} id="img-fle"  alt="" /></div>
            <div className="categories"><span id="titre">{props.titre}</span></div>
          </a>
        </>
    )
}
export default Category