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

    const [nombre,setNombre] = useState();
    const [apellidos, setApellidos] =useState();
    const [edad,setEdad] = useState();
    const [email, setEmail] = useState();
    const [feedback, setFeedback] = useState([]);
    
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
        },
        feedBox:{
            justifyContent:'center',
            alignItems:'center',
            marginTop:30,
        },
        feed:{
            marginLeft:50,
            marginRight:50,
        },
        feedImagen:{
            width:50, 
            height:50,
        },
        red:{
           color:"red" 
        }
    
    });

    if(email == null ){

    }
    else if(!regex.test(email)){
        elements.push(<Text  style={styles.feed, styles.red} >Correo Incorrecto</Text>)

    }
    else if(isNaN(+edad)){
        elements.push(<Text  style={styles.feed, styles.red}>Edad Incorrecta</Text>)
    }else{
    elements.push(<Text  style={styles.feed}>Mi nombre es {nombre} {apellidos} con edad {edad}. Mi correo es {email} y soy {sexo? "Hombre": "Mujer"}</Text>)
    elements.push(<Image style={styles.feedImagen} source ={img} style={{}}/>)
    }

return(
<>
<View style={[styles.box,{marginTop:50}]}>
    <Text style={styles.text} >Nombre</Text>
    <View style={styles.inputBox}>
        <TextInput onChangeText={(value)=>setNombre(value)} style={{ flex:1}}/>
    </View>
</View>
<View style={styles.box}>
    <Text style={styles.text}>Apellidos</Text>
    <View style={styles.inputBox}>
        <TextInput onChangeText={(value)=>setApellidos(value)} style={{ flex:1}}/>
    </View>
</View>
<View style={styles.box}>
    <Text style={styles.text}>Edad</Text>
    <View style={styles.inputBox}>
        <TextInput  onChangeText={(value)=>setEdad(value)} keyboardType='numeric' style={{ flex:1}}/>
    </View>
</View>
<View style={styles.box}>
    <Text style={styles.text}>Correo Electronico</Text>
    <View style={styles.inputBox}>
        <TextInput  onChangeText={(value)=>setEmail(value)} keyboardType='email-address' style={{ flex:1}}/>
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
          <Button  color="blue" title="  Enviar  " onPress={() => {setFeedback(elements)}}></Button>
</View>
</View>
<View style={styles.feedBox}>
{feedback}
</View>
</>
);

}

export default Formulario1