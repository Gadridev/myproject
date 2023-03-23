import './footer.css'
function Footer(props){
    return(
      
   
      <div className="fle-3">
        <ul><li><a href="#">{props.text_1}</a></li></ul>
        <ul><li><a href="#">{props.text_2}</a></li></ul>
        <ul><li><a href="#">{props.text_3}</a></li></ul>
        <ul><li><a href="#">{props.text_4}</a></li></ul>
        <ul><li><a href="#">{props.text_5}</a></li></ul>
      </div>
   
   

    )
}
export default Footer;

