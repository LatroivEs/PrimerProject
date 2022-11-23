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
  FlatList
} from 'react-native';
import img from '../img/OGK.jpg'
import Icons from 'react-native-vector-icons/FontAwesome';

const FlatListIcons = () =>{

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

    const lista = [
        {nombre:'Ana', surname:'Jimenez', phone:'78689698', id:1, icon:'rocket' },
        {nombre:'Pedro', surname:'Moreno', phone:'78689693', id:2, icon:'github' },        
        {nombre:'Juan', surname:'Hergueta', phone:'78689692', id:3, icon:'apple' },
        {nombre:'Sam', surname:'Valentin', phone:'78689492', id:4, icon:'whatsapp' },
        {nombre:'Juan', surname:'Perez', phone:'78633692', id:5, icon:'paypal' },
        {nombre:'Ana', surname:'Jimenez', phone:'78689698', id:1, icon:'rocket' },
        {nombre:'Pedro', surname:'Moreno', phone:'78689693', id:2, icon:'github' },        
        {nombre:'Juan', surname:'Hergueta', phone:'78689692', id:3, icon:'apple' },
        {nombre:'Sam', surname:'Valentin', phone:'78689492', id:4, icon:'whatsapp' },
        {nombre:'Juan', surname:'Perez', phone:'78633692', id:5, icon:'paypal' },
    ];


    const toList = ({item}) =>(
            <View style={styles.item}>
                <Text style={styles.title}>{item.nombre}, {item.surname}</Text> 
                <Text style={styles.title}>{item.phone}   <Icons name={item.icon} size={30} color="#900"/></Text>
                
            </View>);
    return(<>
    <SafeAreaView style={styles.container}>
        <FlatList data={lista} renderItem={toList} keyExtractor={item=>item.id}/>
    </SafeAreaView>
    </>)
}

export default FlatListIcons;