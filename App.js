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
 import ImagenEjemplo from './components/ImagenEjemplo'
 import Formulario1 from './components/Formulario1'
 import FlatListIcons from './components/FlatListIcons';
 import NavExample2Views from './components/NavExample2Views';
 
 
 function App(){
 
      return(
       <>
         <NavExample2Views /> 
       </>
     );
 }
 
 export default App;
 