import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router"
import { fruits } from "./list"

export const About = () => {
  const { id } = useParams()
  const navigate = useNavigate()

  const [fruit, setFruit] = useState(null)

  useEffect(() => {
    const fruitToRender = fruits.filter(fruit => fruit.id === id)
    setFruit(fruitToRender[0])
  }, [id])

  const goBack = event => {
    event.preventDefault()
    navigate("home")
  }
  
  return (
    <div>
      {fruit ? (
        <div>
          <h1>{fruit.name}</h1>
          <p>{fruit.expDate}</p>
          <button onClick={goBack}>Go back</button>
        </div>
      ) : null}
    </div> 
  )
}