import { useState, createContext } from 'react'
//^ export to the Components
export const AppContext = createContext()
//^ export to index.js
export function AppProvider(props) {
  let [burger, setBurger] = useState([])
  let [isHide, setHide] = useState(false)
  let [fromTopOrBottom, setFromTopOrBottom] = useState(false)
  const handleHide = () => setHide(!isHide)
  const handleRemove = (idx) => {
    let newBurger = burger.filter((b, i) => i !== idx)
    setBurger(newBurger)
  }
  const addFromBottom = (ingredient) => setBurger([...burger, ingredient])
  const addFromTop = (ingredient) => setBurger([ingredient, ...burger])
  const fromTop = () => setFromTopOrBottom(!fromTopOrBottom)
  const carbinator = () =>
    !fromTopOrBottom
      ? setBurger([...burger, 'bun', 'bun', 'bun', 'bun'])
      : setBurger(['bun', 'bun', 'bun', 'bun', ...burger])
  let showToporBottom = fromTopOrBottom ? 'add from bottom' : 'add from top'

  // so this is where we do all our workings so we can set a global to be used all components
  // top level state
  // all the functions for updating state goes in here

  let values = {
    burger,
    isHide,
    fromTopOrBottom,
    handleHide,
    handleRemove,
    addFromBottom,
    addFromTop,
    fromTop,
    carbinator,
    setBurger,
    showToporBottom,
  }

  return <AppContext.Provider value={values}>{props.children}</AppContext.Provider>
}
