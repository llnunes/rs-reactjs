import React, { useState } from 'react';
import { SafeAreaView, TouchableOpacity, AsyncStorage, StyleSheet, Text, TextInput } from 'react-native';

export default function Book({ navigation }) {
  const [date, setDate] = useState('');
  const id = navigation.getParam('id');

  async function handleSubmit() {
    const user_id = await AsyncStorage.getItem('user');
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.label}>Data de Interesse *</Text>
        <TextInput 
          style={styles.input}
          placeholder="Qual data você quer reservar?"
          placeholderTextColor="#999"
          keyboardType="words"
          autoCapitalize="none"
          autoCorrect={false}
          value={date}
          onChangeText={setDate}
        />

        <TouchableOpacity onPress={handleSubmit} style={styles.button}>
          <Text style={styles.buttonText} >Encontrar spots</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleSubmit} style={[styles.button, styles.buttonCancel]}>
          <Text style={styles.buttonText} >Cancelar</Text>
        </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 30,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    paddingHorizontal: 20, 
    fontSize: 16,
    color: '#444',
    height: 44,
    marginBottom: 20,
    borderRadius: 2
  },
  label: {
    fontWeight: 'bold',
    color: '#444',
    marginBottom: 8,
    marginTop: 30,
  }, 
  button: {
    height: 42, 
    backgroundColor: '#f05a5b',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 2,
  },
  buttonCancel: {
    backgroundColor: '#ccc',
    marginTop: 10,
  },
  buttonText: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 15,
  } 

});