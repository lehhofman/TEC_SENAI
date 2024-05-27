import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';

export default function AgeScreen() {
    
  const [dataNascimento, setDataNascimento] = useState('');
  const [dataAtual, setDataAtual] = useState('');
  const [idade, setIdade] = useState(null);

  const calcularIdade = () => {
    const dataNascimentoArray = dataNascimento.split('/').map(Number);
    const dataAtualArray = dataAtual.split('/').map(Number); 

    const anoNascimento = dataNascimentoArray[2];
    const mesNascimento = dataNascimentoArray[1] - 1; 
    const diaNascimento = dataNascimentoArray[0];

    const anoAtual = dataAtualArray[2];
    const mesAtual = dataAtualArray[1] - 1; 
    const diaAtual = dataAtualArray[0];

    const dataNascimentoObj = new Date(anoNascimento, mesNascimento, diaNascimento);
    const dataAtualObj = new Date(anoAtual, mesAtual, diaAtual);

    const idadeEmMilissegundos = dataAtualObj - dataNascimentoObj;
    const milissegundosEmAno = 1000 * 60 * 60 * 24 * 365.25; 
    const idadeCalculada = Math.floor(idadeEmMilissegundos / milissegundosEmAno);

    setIdade(idadeCalculada);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.infoText}>Informe os dados abaixo:</Text>
      <TextInput
        style={styles.input}
        placeholder="Data de Nascimento (DD/MM/AAAA)"
        value={dataNascimento}
        onChangeText={text => setDataNascimento(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Data Atual (DD/MM/AAAA)"
        value={dataAtual}
        onChangeText={text => setDataAtual(text)}
      />
      <TouchableOpacity style={styles.button} onPress={calcularIdade}>
        <Text style={styles.buttonText}>Calcular Idade</Text>
      </TouchableOpacity>
      {idade !== null && (
        <Text style={styles.ageText}>Sua idade é: {idade} anos</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ddcbff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  infoText: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#50599e',
  },
  input: {
    width: '20%', 
    height: 50,
    borderColor: '#50599e',
    borderRadius: 10,
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: '#50599e',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: '#1f294f',
    marginTop: 10,
    marginHorizontal: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
  ageText: {
    marginTop: 20,
    fontSize: 20,
  },
});