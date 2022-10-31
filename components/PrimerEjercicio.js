import useContador from "./useContador";

const PrimerEjercicio = () => {

    const [texto, setTexto] = useState("NADA");
    const [count, up, up10, down, reset] = useContador();
    const [count2, up2, up102, down2, reset2] = useContador();
  
    const Human = (props) =>{
      return <View>
        <Text> Soy {props.name}, {props.apellido} y tengo {props.edad}</Text>
      </View>
    }
  
    const val = (firstName, secondName)=> {
      return (firstName + " " + secondName)
    }
  
    const text = () =>{
      return("Aqui pone "+texto)
    }
  
    const Igualdad = () => {if(count ===20){
        return console.log("Es Igual a 20")
      }
      else{
        return <Text>No es Igual a 20</Text>
      }
    }

  return(
    <>
      <Text style={{color:"red"}}> Hola {val("Samuelle", "trolazo")} </Text>
      <Human
        name="Fernando"
        apellido ="Trol"
        edad = "23 ANOS"
      ></Human>
      <View style={{backgroundColor:"grey", display:"flex", padding:5} }>
        <Button color='red' onPress={up}
         title ={"PULSA¡¡¡"} />
         <View style={{height:5}}></View>
        <Button onPress={up10}
          title ={"PULSA PARA 10¡¡¡"} />
        <Text>Hola {count}</Text>
      </View>
      <View style={{backgroundColor:"grey"}}>
        <Button onPress={up2}
          title ={"PULSA¡¡¡"} />
          <Button onPress={up102}
          title ={"PULSA PARA 10¡¡¡"} />
        <Button onPress={()=>{reset();reset2()}} 
          title ={"RESETEO¡¡¡"} /> 
        <Text>Hola {count2}</Text>
      </View>
      <View>
        <TextInput onChangeText={setTexto}
          value={texto}/>
        <Text>{text()}</Text>
        {Igualdad()}
        {Igualdad2()}
      </View>
    </>
  )
}

export default PrimerEjercicio;
