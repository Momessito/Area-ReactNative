import React,{useState} from 'react';
import { StyleSheet, Text, TextInput, View , Button} from 'react-native';

export default function App() {

  const [area , setarea] = useState('');
  const [Altura , setAltura] = useState('');
  const [base , setbase] = useState('');
  
  function CalcularArea(){
    if(base > 0 && Altura > 0){
      setarea((parseFloat(base) *  parseFloat(Altura)) /2);
  
    }else{
      setarea('');
    }
  }

  return (
    <View style={styles.container}>
      <Text>Insira os dados abaixo para calcular a area do triangulo.</Text>
      <TextInput 
      placeholder='base'
      style={{height : 40,textAlign : 'center'}}
      keyboardType={'numeric'}
      onChangeText={base => setbase(base)}
      />
      <TextInput 
      placeholder='Altura'
      style={{height : 40,textAlign : 'center'}}
      keyboardType={'numeric'}
      onChangeText={Altura => setAltura(Altura)}
      />
      <Button 
      title='Calcular'
      onPress={CalcularArea}
      />
      <Text>{area ? `Resultado: ${area}` : ''}</Text>
      <Button></Button>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
