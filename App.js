import { React } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
        <View style={styles.bloco}>
          <Text style={styles.titulo}>Previsão do Tempo</Text>
        </View>
        <View style={styles.bloco}>
          <Text style={styles.label}>Cidade: </Text>
          <TextInput 
            placeholder='digite aqui a cidade ...'
            style={styles.input}
          />
        </View>
        <View style={styles.bloco}>
            <TouchableOpacity style={styles.botao}>
                <Text style={styles.textoBotao}>Buscar</Text>
            </TouchableOpacity>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:30
  },
});
