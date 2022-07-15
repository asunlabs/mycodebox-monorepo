import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {
  const [name, setName] = React.useState("Jake")
  const handleClick = () => { 
    name === "Jake" ? setName("not Jake") : setName("Jake")
  }

  const [inputName, setInputName] = React.useState("");
  const [inputAge, setInputAge] = React.useState(1);

  return (
    // View component is similar to div in HTML
    <View style={styles.container}>

      {/* Text should be rendered in Text component */}
      <Text style={{color : 'lightblue'}}>Hello first react native app</Text>

      <View style={styles.header}>
        <Text style={styles.boldText}>Hello World</Text>
      </View>

      <View style={styles.body}>
        <Text style={{color : 'lightblue'}}> {name} </Text>
      </View>

      <View style={styles.buttonContainer}>
        <Button title='Change name' onPress={()=>handleClick()} />
      </View>

      <View>
        <Text style={{color : 'lightblue'}}>Enter your name</Text>
        <TextInput 
          multiline
          // In React Native, tracking user input is simpler than React(web)
          onChangeText={(val)=>setInputName(val)}
          style={styles.input} 
          placeholder='e.g Jake Sung'/>
        <Text style={{color : 'lightblue'}}>Name typed : {inputName}</Text>

        <Text style={{color : 'lightblue'}}>Enter your age</Text>
        <TextInput
          style={styles.input} 
          onChangeText={(val)=>setInputAge(val)}
          keyboardType='numeric'/>
        <Text style={{color : 'lightblue'}}>Age : {inputAge}</Text>
      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header : {
    backgroundColor : 'skyblue',
    padding : 20, 
    borderColor : 'white'
  }, 
  boldText : {
    fontWeight : 'bold', 
    color : 'white'
  }, 
  body : {
    backgroundColor : 'green', 
    padding : 20, 
  }, 
  buttonContainer : { 
    marginTop : 20
  }, 
  input : {
    color : 'white', 
    backgroundColor : 'grey',
    borderWidth : 1, 
    borderColor : 'white', 
    padding : 10
  }
});
