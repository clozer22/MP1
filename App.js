import { Text, SafeAreaView, StyleSheet, Button, Image, Switch } from 'react-native';
import React, { useState } from 'react';
import imag1 from './lightsoff3.png'
import imag2 from './lightson3.png'
// You can import supported modules from npm
import { Card } from 'react-native-paper';

// or any files within the Snack
import AssetExample from './components/AssetExample';



export default function App() {
  const [isOn, setIsOn] = useState(true)

  handleOpenLight = () => {
    if(isOn){
      setIsOn(false)
    }else{
      setIsOn(true)
    }
  }
  
  return (
    <SafeAreaView style={{flex: 1, justifyContent: 'center', backgroundColor: isOn ? 'yellow' : 'black'}}>
        <Text style={{fontSize: 50, fontWeight: 'bold', color: isOn ? 'black' : 'white', marginBottom: 20, textAlign: 'center'}}>{isOn ? 'ON' : 'OFF'}</Text>
        <Card style={styles.card1}>
         {isOn ? <Image style={styles.image} source={imag2} /> : <Image source={imag1} />}
        </Card>
        <Switch
         style={{ height: 100, width: 122 , margin: 'auto', transform: [{ scaleX: 3 }, {scaleY: 3}]}}
        trackColor={{ false: '#767577', true: '#81b0ff' }}
        thumbColor={isOn ? '#f4f3f4' : '#f4f3f4'}
        ios_backgroundColor="white"
        onValueChange={handleOpenLight}
        value={isOn}
      />      

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

  image: {
    height: 300,
    width:120,

  },
  card1: {
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
  },
 
  

});
