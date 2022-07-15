import './App.css';
import { Greetings } from './components/greetings';
import { LoginForm } from './components/login'; 
import { LoginTest } from './components/state/login'
import { Person } from './components/person';
import { PersonList } from './components/personList'
import { Status } from './components/status'
import { Heading } from './components/heading'
import { Oscar } from './components/oscar'
import { Button } from './components/button'
import { Input } from './components/input'
import { Container } from './components/cssProps'
import { ThemeContextProvider } from './components/context/themeContext'
import { Box } from './components/context/box'
import { UserContextProvider } from './components/context/userContextProvider'
import { UserContextUser } from './components/context/userContext'
import { ClassCounter } from './components/class/counter'
import { Private } from './components/componentProp/private'
import { Profile } from './components/componentProp/profile';
import { List } from './components/generic/list'
import { RandomNumber } from './components/restriction/randomNumber'
import { ElementPosition } from './components/templateLiteral/position'
import { CustomButton } from './components/wrappingHTML/customButton'
import { Text } from './components/polymorphic/text'


function App() {
  return (
    <div className="App">
      <header>
        <LoginForm />
        <Oscar>
          <Heading>Hello</Heading> 
        </Oscar>
      </header>
      <main>
        <Greetings 
          name={"jake"} messageCount={50} />
        <Person 
          name={"jake"} age={27} nation='South Korea' />
        <PersonList />

        <Status status='loading'/>

        <Greetings 
          name={"Brian"} messageCount={50} gender='male' />
        <Button handleClick={(event)=>{console.log("button clicked", event)}}></Button>

        <Input placeholder='Enter anything' handleChange={(event)=> console.log(event.target.value)} />
      </main>
      
      <section>
        <Container styles={{"backgroundColor" : "lightblue"}}/>
      </section>

      <section>
        <LoginTest />
      </section>

      <section>
        <ThemeContextProvider>
          <Box />
        </ThemeContextProvider>
      </section>

      <section>
        <UserContextProvider >
          <UserContextUser />
        </UserContextProvider>
      </section>

      <section>
        < ClassCounter message='hello'/>
      </section>

      <section>
        <Private isLoggedIn={true} component={Profile} />
      </section>

      <section>
        {/* string array */}
        <List items={["jake", "elly", "brian"]} onClick={(item)=>console.log(item)}/>

        {/* number array */}
        <List items={[1, 2, 3]} onClick={(item)=>console.log(item)}/>

        {/* object array : note that React won't render below even if typescript compile is completed since 
        the list item is not primitive type. Refer object property or use JSON.stringify to render the item*/}
        {/* <List items={[{ name : "jake", id: 5 }, { name : "elly ", id: 4}, { name : "brian", id: 9}]} onClick={(item)=>console.log(item)}/> */}
      </section>

      <section>
        <RandomNumber value={50} isPositive />
      </section>

      <section>
        <ElementPosition position='left-top'/>
      </section>

      <section>
        <CustomButton variant='primary'>button wow
        hellllo
        </CustomButton>
      </section>

      <section>
        <Text as='h2' size='sm' color='primary'>Heading2</Text>
        <Text as='p' size='sm' color='primary'>Paragraph</Text>
        <Text as='label' htmlFor='label' size='sm' color='primary'>Label</Text>
        <Text size='lg' color='secondary'>Div</Text>
        <Text as='button' size='lg' color='secondary'>button</Text>
      </section>
    </div>
  );
}

export default App;
