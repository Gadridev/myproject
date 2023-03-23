import { list_Data } from '../../../Data/Cards_data'
import List from '../lists/list'
import './listP.css'

function ListP(){
    const GetList =list_Data.map((item)=>{
        return <List key={item.id} Category={item.Category} lien={item.lien} text={item.text} />
    })
    return(
        <>
    <div className="list-1"> 
      <section className="new-content">
        <div className="h2">
            <h2 id="h2">Sujets recommandés par catégorie</h2>
          </div>
        <div className="content-flex">
                {GetList}
        </div>
        <br />
      <a href="#" id="lien-2">Decouvrire davantage de sujets</a>
      <br />
      <br />
        </section>
        </div>
        </>
    )

}
export default ListP