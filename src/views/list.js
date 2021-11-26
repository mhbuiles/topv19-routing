import { Link } from "react-router-dom"

export const fruits = [
  {
    id: "1",
    name: "Apple",
    expDate: "11/12/2021"
  },
  {
    id: "2",
    name: "Pear",
    expDate: "11/12/2021"
  },
  {
    id: "3",
    name: "Pineapple",
    expDate: "11/12/2021"
  },
  {
    id: "4",
    name: "Watermelon",
    expDate: "11/12/2021"
  },
]

export const List = () => {
  return (
    <div>
      {fruits.map(fruit => (
        <div key={fruit.id} style={{display: "flex", flexDirection: "row", alignItems: "center"}}>
          <Link to={`/fruit/${fruit.id}`}>
            <h1>{fruit.name}</h1>
          </Link>
          <p>{fruit.expDate}</p>
        </div>
      ))}
    </div>
  )
}