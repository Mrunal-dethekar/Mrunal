import { categories } from "../data"
import CategoriesItem from "./CategoriesItem"

const Categories = () => {

  const container = {
    display: 'flex',
    padding: '20px',
    justifyContent: 'space-between',
  }

  return (
    <div style={container}>
      {
        categories.map((item)=>(
          <CategoriesItem item={item} key={item.id}/>
        ))
      }
    </div>
  )
}

export default Categories