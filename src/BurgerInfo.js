import { useContext } from "react"
import { AppContext } from "./AppContext"
import CheesyLabel from "./cheesyLabel"

export default function BurgerInfo() {

  let { burger, handleHide,isHide } = useContext(AppContext)
  // let { burger, handleHide, isHide } = props
  let show = isHide ? 'show menu' : 'hide menu'
  //^ this helps getting the variable from useContext

  return (
    <section>
      <div>
        <button onClick={handleHide}>{show}</button>
      </div>
      <div className="show-menu">
        <span><CheesyLabel/></span>
      </div>
      <span>{burger.length === 0 ? '' : burger.length === 1 ? `${burger.length} layer in burger` : `${burger.length} layers in burger`} </span>
    </section>
  )
}