import { Footer_Data } from '../../../Data/Cards_data'
import Footer from '../footer/Footer'
import './ShowF.css'
function ShowF(){
    const Get_footer =Footer_Data.map(item=>{
        return <Footer key={item.key}  text_1={item.name_1} text_2={item.name_2} text_3={item.name_3} text_4={item.name_4} text_5={item.name_5} />
 })
 return(
 <section className="fle-1">
    <div className="fle-2"> 
    {Get_footer}
    <div className="fle-4">
        <a href="#" id="btn-te">Francais</a>
       </div>
    </div>
    <div className="flex-gr">
      <div className="item-f">
      </div>
      <div className="item-f">
        <p>® 2022 By GADRI</p>
      </div>
    </div>
  </section>
      )
}
export default ShowF