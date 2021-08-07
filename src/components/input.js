import * as React from "react"
import "./input.scss"

// markup
const InputComponent = () => {

  React.useEffect(() => {
    console.log('123')
  }, [])

  return (
    <section className="input-component">
      <div>
        <span></span>
      </div>
      <input />
    </section>
  )
}

export default InputComponent
