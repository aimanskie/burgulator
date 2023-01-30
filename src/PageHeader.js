import { useContext } from "react"
import { AppContext } from "./AppContext"

export default function PageHeader() {
  let {carbinator, fromTop, showToporBottom} = useContext(AppContext)

  return (
    <header>
      <h1>Burgulator</h1>
      <p>the original burger maker</p>
      <button onClick={carbinator}>carbinator</button>
      <button onClick={fromTop}>{showToporBottom}</button>
    </header>
  )
}