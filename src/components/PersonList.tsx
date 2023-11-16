import { Name } from "./Person.types"

type PersonListProps ={
    name:Name[]
}

const PersonList = (props:PersonListProps) => {
  return (
    <div>
        {props.name.map(name=> {
            return(
                <div>
                    <h2>{name.first} {name.last}</h2>
                </div>
            )
})}
    </div>
  )
}

export default PersonList