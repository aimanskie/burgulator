import { useContext } from 'react'
import { AppContext } from './AppContext'

function Ingredient(props) {
  let { name, onRemove, id } = props
  return (
    <div className={name} onClick={() => onRemove(id)}>
    </div>
  )
}
export default function Burger() {

  let { burger,handleRemove } = useContext(AppContext)
  
  return (
    <section className="plate">
      <div className="burger">
        {burger.map((ingredient, idx) =>
          <Ingredient key={idx}
            name={ingredient}
            onRemove={handleRemove} id={idx} />
        )}
      </div>
    </section >
  )
}