import { useContext } from "react"
import { AppContext } from "./AppContext"

let countMessage = {
  1: '',
  2: 'double cheese',
  3: 'triple cheese',
  4: 'quadruple cheese',
  5: 'quintuple cheese',
  6: 'maximum cheese',
}
export default function CheesyLabel() {

  let { burger } = useContext(AppContext)
  let cheeseCount = burger.filter(cheese => cheese === 'cheese').length
  
  
  return cheeseCount > 6 ? 'No more cheese!' : countMessage[ cheeseCount ]
}