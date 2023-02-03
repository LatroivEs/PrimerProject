import { useEffect,useState, useCallback } from "react";

import { FlatList, StatusBar, TextInput, Button, View, StyleSheet,Text,ScrollView, RefreshControl, Alert, Image} from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ImgFrutas from "./ImgFrutas";
import { useRef } from "react/cjs/react.production.min";

const Frutas =  () => {

const [fruits,setFruits]=useState(null);
const [refreshing, setRefreshing] = useState(false);

useEffect(() =>{

fetch("http://192.168.0.32:4000/api/Frutas")
.then(response=>response.json())
.then((responseJson)=>{
    console.log("trayendo datos", responseJson);
    setFruits(responseJson);
})
.catch(error => console.log(error));

},[])

const onRefresh = useCallback(() => {
      setRefreshing(true);
      fetch("http://192.168.0.32:4000/api/Frutas")
      .then(response=>response.json())
      .then((responseJson)=>{
        console.log("trayendo datos", responseJson);
         setFruits(responseJson);
      })
      .catch(error => console.log(error));
      wait(2000).then(() => setRefreshing(false));
}, []);


const wait = (timeout) => {
  return new Promise(resolve => {
    setTimeout(resolve, timeout);
  });
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
  imagen:{
    width:60,
    height:60,
    marginTop:10
  }
});


const toList = ({item}) =>(
  <View style={styles.item} flexDirection="row">
    <View>
      <Image style={styles.imagen} source={ImgFrutas[item.Nombre]!=null? ImgFrutas[item.Nombre] : ImgFrutas["Frutas"] } resizeMode="stretch"></Image>
    </View>
    <View style={{marginLeft:20}} >
      <Text style={styles.title}>Fruta: {item.Nombre}</Text> 
      <Text style={styles.title}>Precio: {item.Precio}</Text>    
    </View>  
  </View>);

return (
<>
  <ScrollView refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh}/>}>
    <FlatList data={fruits} renderItem={toList} keyExtractor={item=>item.Fruta_id}/>
  </ScrollView>
</>
)
}

const AddFruta = () =>{
  const [Nombre, setNombre] = useState();
  const [Precio, setPrecio] = useState();
  const [sended, setSended] = useState();

  const requestOptions = {
    method: 'POST',
    headers: {  Accept: 'application/json','Content-Type': 'application/json' },
    body: JSON.stringify({Nombre, Precio})
  };

const postFruta = async () => {
  
  console.log(requestOptions);
    
  try {
    const response = await fetch('http://192.168.0.32:4000/api/addFruta', requestOptions);
    response.json().then(data => {
      console.log(data)
      Alert.alert(data.affectedRows===1?"Fruta Añadida al Listado":"Error Insertando Fruta");
    });
  } catch (error) {
    console.error(error);
  } finally {
  }
}

  const sendFruta = async() =>{
    if(Nombre !== "" && Precio !== ""){
     
      await postFruta();
      setNombre("");
      setPrecio("");
    }else{
      Alert.alert("Falta Campo Nombre y/o Precio");
    }
  }

  const styles = StyleSheet.create({
    inputBox:{
        borderColor:'black',
        width:150, height:45, 
        borderWidth: 2,
        borderRadius:10,
        marginLeft:20,
        backgroundColor:'#ffffff'
    },
    box:{
        flexDirection:'row',
        alignContent:'center', 
        padding:15, 
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#f9c2ff',
        marginLeft:10,
        marginRight:10
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

  return(
    <>
    <View style={[styles.box,{marginTop:50}]}>
        <Text style={styles.text} >Nombre</Text>
        <View style={styles.inputBox}>
            <TextInput value={Nombre} onChangeText={(value)=>setNombre(value)} style={{ flex:1}}/>
        </View>
    </View>
    <View style={styles.box}>
        <Text style={styles.text}>Precio</Text>
        <View style={styles.inputBox}>
            <TextInput value={Precio} onChangeText={(value)=>setPrecio(value)} keyboardType='numeric' style={{ flex:1}}/>
        </View>
    </View>
    <View style={{marginTop:50, marginLeft:135,width:100, flexDirection: 'row',
          justifyContent: 'center'}}>
          <Button   color='#f9c2ff' title="  Enviar  " onPress={() => {sendFruta()}}></Button>
    </View>
    </>
    );
}


const Tab = createBottomTabNavigator();

const ConsumAPI =()=>{
  return (

    <NavigationContainer initialRouteName="Fruteria">

      <Tab.Navigator
       screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Añadir Frutas') {
              iconName = focused
                ? 'ios-nutrition'
                : 'ios-nutrition-outline';
            } else if (route.name === 'Frutas Disponibles') {
              iconName = focused ? 'ios-list' : 'ios-list-outline';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        })}> 
        <Tab.Screen name="Frutas Disponibles" component={Frutas} />
        <Tab.Screen name="Añadir Frutas" component={AddFruta} />
      </Tab.Navigator>
    </NavigationContainer>)
}


export default ConsumAPI;
