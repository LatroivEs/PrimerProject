/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  useColorScheme,
  View,
  Button,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import useContador from './components/useContador';

function App(){
  const [texto, setTexto] = useState("NADA");
  const [cont, useCont] = useState();
  const [count, up, down, reset] = useContador();
  const [count2, up2, down2, reset2] = useContador();

  const Human = (props) =>{
    return <View>
      <Text> Soy {props.name}, {props.apellido} y tengo {props.edad}</Text>
    </View>
  }

  const val = (firstName, secondName)=> {
    return (firstName + " " + secondName)
  }

  const text = () =>{
    return("Aqui pone "+texto)
  }


    return(
      <>
        <Text> Hola {val("Samuelle", "trolazo")} </Text>
        <Human
        name="Fernando"
        apellido ="Trol"
        edad = "23 ANOS"
        ></Human>
        <Button onPress={up}
        title ={"PULSA¡¡¡"} />
        <Text>Hola {count}</Text>
        <Button onPress={up2}
        title ={"PULSA¡¡¡"} />
        <Text>Hola {count2}</Text>
        <TextInput onChangeText={setTexto}
        value={texto}/>
        <Text>{text()}</Text>
      </>
    );
}

export default App;
