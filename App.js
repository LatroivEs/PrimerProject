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
import PrimerEjercicio from './components/PrimerEjercicio';


function App(){
  const [iedad, isetEdad]= useState(null);
  const [edad, setEdad]= useState(null);

  const Resp = () =>{
    const regex = new RegExp("^[0-9]+$");
    console.log(regex.test(edad))

    if(edad == "" || !regex.test(edad)){
      return ;
    }

    if (edad<18) {
      return <Text style={{color:"green"}}> Que Joven Eres</Text>;
    } else if (edad > 19 ){
      return <Text style={{color:"blue", fontWeight:"200"}}>Pedazo de edad</Text>;
    }
    return <Text style={{color:"red"}}>Que Buena Edad</Text>;
    }

     return(
      <>
       <View style={{marginLeft:"15%", marginTop:"15%"}}>
        <Text>Hola Mi Nombre es <Text style={{color:"cyan"}}>Antonio J. Moreno</Text></Text>
       </View>
       <View style={{marginLeft:"15%", marginTop:"10%"}}>
         <Text style={{marginBottom:"5%"}}>Escriba aqui su edad</Text>
          <View style={{display:"flex"}}>
            <Text>
              Edad 
            </Text>
            <TextInput onChangeText={isetEdad}
              value={iedad}/>
          </View>
          {Resp()}
        </View>
        <View style={{ margin:"15%",borderRadius:15, borderWidth:1, flexDirection: 'row',
          justifyContent: 'center', backgroundColor:"blue"}}>
          <Button color="blue" title="Finalizar" onPress={() => setEdad(iedad)}></Button>
        </View>
       
      </>
    );
}

export default App;
