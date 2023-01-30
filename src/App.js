import './App.css'
import IngredientsMenu from './IngredientsMenu'
import PageHeader from './PageHeader'
import Burger from './Burger'
import BurgerInfo from './BurgerInfo'
import { useContext } from 'react'
import { AppContext } from './AppContext'
export default function App() {
  let { isHide } = useContext(AppContext)

  return (
    <div className='App'>
      <section style={{ display: isHide ? 'none' : 'block' }}>
        <PageHeader />
        <IngredientsMenu />
      </section>
      <BurgerInfo />
      <Burger />
    </div>
  )
}
