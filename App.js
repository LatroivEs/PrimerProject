import * as React from 'react';
import { Button, FlatList, SafeAreaView,Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const bbdd = {Antonio: {apellido:"Muñoz", edad:23}, Pepa: {apellido:"Muñoz", edad:23},Pepe: {apellido:"Muñoz", edad:23}}
const lista = [
  {nombre:'Ana', surname:'Jimenez', phone:'78689698', id:1, icon:'rocket', edad:23 },
  {nombre:'Pedro', surname:'Moreno', phone:'78689693', id:2, icon:'github', edad:21 },        
  {nombre:'Juan', surname:'Hergueta', phone:'78689692', id:3, icon:'apple', edad:22 }]


const Stack = createNativeStackNavigator();

const toList = ({item}) =>(
  <View >
      <Button title={item.nombre} onClick={navigation.navigate("Screen2",{nombre:item.nombre,apellidos:item.surname,edad:item.edad})}/>
  </View>);

function HomeScreen() {
  return (<>
    <Stack.Navigator >
      <Stack.Screen name="pag1" component={Screen1}/>
      <Stack.Screen name="pag2" component={Screen2} initialParams={{nombre:""}}/>
    </Stack.Navigator>
    </>
  );
}

function Screen1({navigation, route}){
  
  const toList = ({item}) =>(
    <View >
        <Button title={item.nombre} onClick={navigation.navigate("Screen2",{nombre:item.nombre,apellidos:item.surname,edad:item.edad})}/> 
    </View>);

  return( <SafeAreaView>
            <FlatList data={lista} renderItem={toList} keyExtractor={item=>item.id}/>
          </SafeAreaView>)
};

function Screen2({route}){
  const {nombre, apellidos,edad}=route.params;
  return( <SafeAreaView >
    <Text>Nombre: {nombre} Apellidos:{apellidos} Edad: {edad}</Text>
</SafeAreaView>)
};



function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}

function PersonalScreen(name){
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}


function HomeStack(){
  return(<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Tab.Screen name="Second" component={SecondScreen}/>
    </View>);
}


const Tab = createBottomTabNavigator();

export default function App() {
  return (

    <NavigationContainer>

      <Tab.Navigator
       screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused
                ? 'ios-information-circle'
                : 'ios-information-circle-outline';
            } else if (route.name === 'Settings') {
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