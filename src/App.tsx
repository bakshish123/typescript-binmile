
import './App.css';
import Greet from './components/Greet';
import Heading from './components/Heading';
import Oscars from './components/Oscars';
import Person from './components/Person';
import PersonList from './components/PersonList';
import Status from './components/Status';
import Button from './components/Button';
import Input from './components/Input';
import Container from './components/Container';
import LoggedIn from './components/state/LoggedIn';
import User from './components/state/User';
import Counter from './components/state/Counter1';
import Counter1 from './components/state/Counter1';
import Counter2 from './components/state/Counter2';
import ThemeContextProvider from './components/context/ThemeContextProvider';
import Box from './components/context/Box';
import UserContext, { UserContextProvider } from './components/context/UserContext';
import DomRef from './components/ref/DomRef';
import MutableRef from './components/ref/MutableRef';
import Private from './components/auth/Private';
import Profile from './components/auth/Profile';

function App() {
  const personName ={
    first:'Bakshish',
    last:'Singh'
  }
  const nameList=[
    {
      first:'Bakshish',
      last:'Singh'
    },
    {
      first:'Bakshish',
      last:'Singh' 
    },
    {
      first:'Bakshish',
      last:'Singh'
    }
  ]
  return (
    <div className="App">
      <Greet name='Bakshish' messageCount={20} isLoggedIn={false}/>
      <Person name={personName}/>
      <PersonList name={nameList}/>
      <Status status='loading'/>
      <Heading>Hello World</Heading>
      <Oscars><Heading>hello from react component</Heading></Oscars>
      <Greet name='Bakshish' isLoggedIn={false}/> {/*conditional prop*/}
      <Button handleClick={(event ,id)=>{
        console.log('button clicked',event,id)
      }}/>
      <Input value='hey' handleChange={
        event=>console.log(event)
        }/>
        <Container styles={{border:'1px solid black'}}/>
        <LoggedIn />
        <User />
        <Counter1 />
        <Counter2 />
        <ThemeContextProvider>
          <Box />
        </ThemeContextProvider>
        <UserContext>
          <User />
        </UserContext>
        <DomRef></DomRef>
        <MutableRef />
        <Private isLoggedIn={true} Component={Profile}/>
    </div>
  );
}

export default App;
