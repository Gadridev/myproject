import './CategoryShow.css'
import { Card_Data_1 } from '../../../Data/Cards_data'
import Category from '../Category/Category'

function CategoryShow(){
    const lien =Card_Data_1.map(item=>{
        return <Category key={item.id} images={item.image1} titre={item.titre} />
    })
    return(
        <section className="options">
            <h2>Meilleures Categories</h2>
            <div className="flexbox">
            {lien}
            </div>
        </section>
    )
}
export default CategoryShow