import React, { useState, useRef } from 'react';
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
  Image,
  Switch,
} from 'react-native';
import img from '../img/OGK.jpg'


const ImagenEjemplo = (style, onChange, led, tru) => {

  const [enable, setEnable] =useState(true);

const change =()=>{
  //setEnable(previusState => !previusState)
  //setEnable(previusState => !previusState)
  setEnable(!enable)
  setEnable(!enable)
}

  let element=[]
  if(enable){
    element.push(<Image source ={img} style={{width:250, height:250}}/>)
    element.push(<Image source={{uri:'https://www.adslzone.net/app/uploads-adslzone.net/2019/04/borrar-fondo-imagen.jpg'}} style={{width:250, height:250}}/>)
  }


  return(
    <>
      <Switch style={{width:250}} trackColor={{false:'green', true:'blue'}} thumbColor={enable?'blue':'red'}
      onValueChange={()=>change()}
      value={enable}/>
      {element}
    </>
  )
}

export default ImagenEjemplo;