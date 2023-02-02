import * as React from 'react';
import { Button, FlatList, SafeAreaView,Text, View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

function HomeScreen() {

  return (<>
    <Stack.Navigator initialRouteName='Lista' >
      <Stack.Screen name="Lista" component={Lista}/>
      <Stack.Screen name="Detalle" component={Detalle}/>
    </Stack.Navigator>
    </>
  );
}

function Lista({navigation, route}){
  const lista = [
    {nombre:'Ana', surname:'Jimenez', phone:'78689698', id:1, icon:'rocket', edad:23 },
    {nombre:'Pedro', surname:'Moreno', phone:'78689693', id:2, icon:'github', edad:21 },        
    {nombre:'Juan', surname:'Hergueta', phone:'78689692', id:3, icon:'apple', edad:22 }]
    
    const [fruits,setFruits]=useState(null);
    const [refreshing, setRefreshing] = useState(false);
    
    useEffect(() =>{
    
    fetch("http://192.168.137.1:8080/fruits")
    //fetch("https://api.disneyapi.dev/characters")
    
    .then(response=>response.json())
    
    .then((responseJson)=>{
    
        console.log("trayendo datos", responseJson);
    
        setFruits(responseJson);
    
    })
    .catch(error => console.log(error));
    
    },[])
    

    const styles = StyleSheet.create({
      item: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
      }
    });
  
  const toList = ({item}) =>(
    <View style={styles.item}>
        <Button title={item.nombre} onPress={()=>{
          navigation.push('Lista')
          navigation.navigate('Detalle',{item})}}/> 
    </View>);
 
  return( <SafeAreaView>
            <FlatList data={lista} renderItem={toList} keyExtractor={item=>item.id}/>
          </SafeAreaView>)
};

function Detalle({route}){
  const {nombre, surname,edad}= route.params.item;

  const styles = StyleSheet.create({
    texto: {fontSize:24, marginTop:16, marginLeft:20, color:"purple"}
  });

  return( <SafeAreaView >
    <Text style={styles.texto}>Nombre: {nombre}, {surname}</Text>
    <Text style={styles.texto}>Edad: {edad}</Text>
</SafeAreaView>)
};

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Aqui No Hay Nada Que Ver</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function Fruteria() {
  return (

    <NavigationContainer initialRouteName="Home">

      <Tab.Navigator
       screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Settings') {
              iconName = focused
                ? 'ios-information-circle'
                : 'ios-information-circle-outline';
            } else if (route.name === 'Home') {
              iconName = focused ? 'ios-list' : 'ios-list-outline';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        })}> 
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>

  )};