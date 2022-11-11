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

const Formulario1 = () =>{
    const [sexo, setSexo]=useState(true);
    const [cambio, setCambio]=useState(true);

    const nombre = useRef(null);
    const apellidos = useRef(null);
    const edad = useRef(null);
    const correoElectronico = useRef(null);
    
    let elements =[];

    const regex = new RegExp("^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$");

    const styles = StyleSheet.create({
        inputBox:{
            borderColor:'black',
             width:150, height:45, 
             borderWidth: 2,
             borderRadius:10,
             marginLeft:20,
        },
        box:{
            flexDirection:'row',
            alignContent:'center', 
            padding:15, 
            justifyContent:'center',
            alignItems:'center'
        },
        text:{
            fontWeight:'900',
            width: 120,
            textAlign:'left'
        }
    
    });
    if(correoElectronico.value == null ){

    }
    else if(!regex.test(correoElectronico.value)){
        elements.push(<Text>Correo Incorrecto</Text>)

    }
    else if(edad<1){
        elements.push(<Text>Edad Incorrecta</Text>)
    }else{
    elements.push(<Text>Mi nombre es {nombre.value},{apellidos.value} con edad {edad.value} mi correo es {correoElectronico.value} y soy {sexo? "Hombre": "Mujer"}</Text>)
    elements.push(<Image source ={img} style={{width:50, height:50}}/>)
    }
console.log(correoElectronico)

return(
<>
<View style={[styles.box,{marginTop:50}]}>
    <Text style={styles.text} >Nombre</Text>
    <View style={styles.inputBox}>
        <TextInput ref={nombre} style={{ flex:1}}/>
    </View>
</View>
<View style={styles.box}>
    <Text style={styles.text}>Apellidos</Text>
    <View style={styles.inputBox}>
        <TextInput ref={apellidos} style={{ flex:1}}/>
    </View>
</View>
<View style={styles.box}>
    <Text style={styles.text}>Edad</Text>
    <View style={styles.inputBox}>
        <TextInput ref={edad} keyboardType='numeric' style={{ flex:1}}/>
    </View>
</View>
<View style={styles.box}>
    <Text style={styles.text}>Correo Electronico</Text>
    <View style={styles.inputBox}>
        <TextInput ref={correoElectronico} style={{ flex:1}}/>
    </View>
</View>
<View style={styles.box}>
    <Text style={styles.text}>Genero</Text>
    <Switch trackColor={{false:'pink', true:'green'}} thumbColor={sexo?'green':'pink'}
      onValueChange={()=>setSexo(curr => !curr)}
      value={sexo}/>
    <Text style={{width:100,marginLeft:23}}>{sexo?"Hombre":"Mujer"}</Text>
</View>
<View  style={{ alignItems:'center'}}>
<View style={{width:100,borderRadius:15, borderWidth:1, flexDirection: 'row',
          justifyContent: 'center', backgroundColor:"blue"}}>
          <Button  color="blue" title="  Enviar  " onPress={() => {setCambio(current=> !current)}}></Button>
</View>
</View>
{elements}

</>
);

}

export default Formulario1