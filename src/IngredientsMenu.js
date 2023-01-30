import { useContext } from 'react'
import { AppContext } from './AppContext'

export default function IngredientsMenu() {
  let { burger, fromTopOrBottom, addFromTop, addFromBottom, setBurger } = useContext(AppContext)
  let onAdd = fromTopOrBottom ? addFromTop : addFromBottom
  let cheeseCount = burger.filter((cheese) => cheese === 'cheese').length

  return (
    <section className='selection'>
      <button onClick={() => onAdd('top-bun')}>top bun</button>
      <button onClick={() => onAdd('bun')}>bun</button>
      <button onClick={() => onAdd('tomato')}>tomato</button>
      <button onClick={() => onAdd('lettuce')}>lettuce</button>
      <button onClick={() => onAdd('onion')}>onion</button>
      <button disabled={cheeseCount > 6} onClick={() => onAdd('cheese')}>
        cheese
      </button>
      <button onClick={() => onAdd('beef')}>beef</button>
      <button onClick={() => onAdd('bottom-bun')}>bottom bun</button>
      <button onClick={() => setBurger([])}>reset</button>
    </section>
  )
}
