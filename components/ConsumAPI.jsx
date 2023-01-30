import { useEffect,useState, useCallback } from "react";

import { FlatList, StatusBar, SafeAreaView, View, StyleSheet,Text,ScrollView, RefreshControl} from "react-native";

const ConsumAPI =  () => {

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

const onRefresh = useCallback(() => {
      setRefreshing(true);
      wait(2000).then(() => setRefreshing(false));
}, []);


const wait = (timeout) => {
  return new Promise(resolve => {
    setTimeout(resolve, timeout);
  });
}

console.log(fruits);

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
});

const toList = ({item}) =>(
  <View style={styles.item}>
      <Text style={styles.title}>{item.id} - FR: {item.name}</Text> 
      <Text style={styles.title}>PRECIO: {item.price}</Text>    
  </View>);

return (
<>
  <Text style={{fontWeight:'800', alignContent:"center"}}>FRUTAS</Text>
  <ScrollView refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh}/>}>
    <FlatList data={fruits} renderItem={toList} keyExtractor={item=>item.id}/>
  </ScrollView>
</>
)

}

export default ConsumAPI;
