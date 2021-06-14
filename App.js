import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function App() {

  const onPressLearnMore = () => {
    console.log("Button Pressed!!!")
  }

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <TouchableOpacity
        onPress={onPressLearnMore}
        style={styles.btn}
      >
        <Text style={styles.btnText}>Click Me</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    borderWidth: 1,
    borderColor:"red"
  },
  btn: {
    width:200,
    borderWidth: 1,
    borderColor: "blue",
    display: "flex",
    alignItems: "center",
    padding: 5,
    borderRadius: 5,
    backgroundColor: "blue"
  },
  btnText: {
    color: "#fff",
    padding: 5,
    fontSize: 20,
    
  }
});
