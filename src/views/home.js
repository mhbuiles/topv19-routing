import { Link } from "react-router-dom"

export const Home = () => {
  return (
    <div>
      <h1>Hola</h1>
      <Link to="/list">Go to list</Link>
    </div>
  )
}