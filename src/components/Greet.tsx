type GreetProps={
  name:string
  messageCount?:number //optional prop
  isLoggedIn:boolean
}

const Greet = (props:GreetProps) => {
  return (
    <div>
      <h2>
        {props.isLoggedIn ?`Greetings to ${props.name} ! You have ${props.messageCount} new messages`:
                        'Welcome Guest'}
        </h2>
      </div>
  )
}

export default Greet