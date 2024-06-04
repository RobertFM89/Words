import { useState } from "react"
import Stats from "./Stats.jsx"
import Textarea from "./Textarea.jsx"


const MainContainer = () => {
  const [text, setText] = useState("")
  const stats = {
    numberOfWords: text.split(/\s/).filter((word) => word !== "").length,
    numberOfCharacters: text.length
  }
  return (
    <main className="container">
      <Textarea text={text} setText={setText}/>
      <Stats stats={stats} />
    </main>
  )
}

export default MainContainer
