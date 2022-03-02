import React, { useState } from 'react';
import { StyleSheet, Text, View, StatusBar, Button } from 'react-native';
import CountContextProvider from './countcont';
import { useCountContext } from './countcont';

export default function Mainscreen() {
    const CountContext= useCountContext();
    console.log(CountContext);

  return (
    
    
    <View>
      
      <View style={styles.bg}>
        
        
      <Text>{CountContext.count}</Text>
      
      <Button title='Tap Here' onPress={()=> CountContext.setCount(CountContext.count+1)}></Button>
      <Text >{CountContext.count2}</Text>
      <Button title='Tap Here' onPress={()=> CountContext.setCount2(CountContext.count+1)}></Button>
      <Text >{CountContext.count3}</Text>
      <Button title='Tap Here' onPress={()=> CountContext.setCount3(CountContext.count+1)}></Button>
      <StatusBar style="auto" />
    
    </View>
    
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop:10,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  welcome: {

        
    backgroundColor:"orange"

  },
  bg: {
    marginTop:10,
    backgroundColor: '#FFA500',
    padding:10

  }
});