import { useState } from "react"


const Textarea = () => {

const [text, setText] = useState("")

  return (
    <textarea 
    value={text}
    onChange={(e)=> {
      const newText = e.target.value;
      setText(newText)
    }} 
    className="textarea"
    placeholder="Enter your text"
    spellCheck="false">
    
    </textarea>
  )
}

export default Textarea
