import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, TextInput, FlatList, TouchableOpacity, Image } from 'react-native';
import { db, storage } from './firebaseconfig';
import { collection, addDoc, getDocs, updateDoc, deleteDoc, doc } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import Icon from 'react-native-vector-icons/FontAwesome';
import { launchImageLibrary } from 'react-native-image-picker';

export default function App() {
  const [nomeLivro, setNomeLivro] = useState('');
  const [autor, setAutor] = useState('');
  const [editora, setEditora] = useState('');
  const [ano, setAno] = useState('');
  const [imageUri, setImageUri] = useState(null);
  const [flagConcluido, setFlagConcluido] = useState('em processo'); // 'concluído' ou 'em processo'
  const [livros, setLivros] = useState([]);
  const [loading, setLoading] = useState(false);
  const [editingLivroId, setEditingLivroId] = useState(null);

  const selecionarImagem = () => {
    launchImageLibrary({ mediaType: 'photo' }, (response) => {
      if (response.didCancel) {
        console.log('Usuário cancelou o seletor de imagem');
      } else if (response.error) {
        console.error('Erro no ImagePicker: ', response.error);
      } else {
        setImageUri(response.assets[0].uri);
      }
    });
  };

  const uploadImage = async () => {
    if (!imageUri) return null;

    const response = await fetch(imageUri);
    const blob = await response.blob();
    const filename = imageUri.substring(imageUri.lastIndexOf('/') + 1);
    const storageRef = ref(storage, `livros/${filename}`);
    
    await uploadBytes(storageRef, blob);
    return await getDownloadURL(storageRef);
  };

  const adicionarOuAtualizarLivro = async () => {
    try {
      setLoading(true);
      const imageUrl = await uploadImage();

      if (editingLivroId) {
        const livroRef = doc(db, 'livros', editingLivroId);
        await updateDoc(livroRef, {
          nome: nomeLivro,
          autor: autor,
          editora: editora,
          ano: ano,
          imageUrl: imageUrl || null,
          flagConcluido: flagConcluido
        });
        alert('Livro atualizado com sucesso!');
        setEditingLivroId(null);
      } else {
        await addDoc(collection(db, 'livros'), {
          nome: nomeLivro,
          autor: autor,
          editora: editora,
          ano: ano,
          imageUrl: imageUrl || null,
          flagConcluido: flagConcluido
        });
        alert('Livro adicionado com sucesso!');
      }

      setNomeLivro('');
      setAutor('');
      setEditora('');
      setAno('');
      setImageUri(null);
      setFlagConcluido('em processo');
      fetchLivros();
    } catch (e) {
      console.error("Erro ao salvar livro: ", e);
    } finally {
      setLoading(false);
    }
  };

  const fetchLivros = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, 'livros'));
      const livrosList = querySnapshot.docs.map(doc => ({
        ...doc.data(),
        id: doc.id
      }));
      setLivros(livrosList);
    } catch (e) {
      console.error("Erro ao buscar livros: ", e);
    }
  };

  const editarLivro = (livro) => {
    setNomeLivro(livro.nome);
    setAutor(livro.autor);
    setEditora(livro.editora);
    setAno(livro.ano);
    setImageUri(livro.imageUrl);
    setFlagConcluido(livro.flagConcluido);
    setEditingLivroId(livro.id);
  };

  const excluirLivro = async (livroId) => {
    try {
      await deleteDoc(doc(db, 'livros', livroId));
      alert('Livro excluído com sucesso!');
      fetchLivros();
    } catch (e) {
      console.error("Erro ao excluir livro: ", e);
    }
  };

  useEffect(() => {
    fetchLivros();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Livros Lidos</Text>
      
      <Text style={styles.label}>Nome do Livro</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite o nome do livro"
        value={nomeLivro}
        onChangeText={setNomeLivro}
      />
      
      <Text style={styles.label}>Autor</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite o autor do livro"
        value={autor}
        onChangeText={setAutor}
      />
      
      <Text style={styles.label}>Editora</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite a editora do livro"
        value={editora}
        onChangeText={setEditora}
      />
      
      <Text style={styles.label}>Ano</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite o ano de publicação"
        value={ano}
        onChangeText={setAno}
        keyboardType="numeric"
      />

      <Text style={styles.label}>Status</Text>
      <View style={styles.statusContainer}>
        <TouchableOpacity 
          style={[styles.statusButton, flagConcluido === 'concluído' && styles.statusButtonSelected]} 
          onPress={() => setFlagConcluido('concluído')}>
          <Text style={styles.statusText}>Concluído</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={[styles.statusButton, flagConcluido === 'em processo' && styles.statusButtonSelected]} 
          onPress={() => setFlagConcluido('em processo')}>
          <Text style={styles.statusText}>Em Processo</Text>
        </TouchableOpacity>
      </View>

      <Button 
        title="Selecionar Imagem" 
        onPress={selecionarImagem} 
        color="#4682b4"
      />

      {imageUri && (
        <Image source={{ uri: imageUri }} style={styles.imagePreview} />
      )}

      <Button 
        title={loading ? "Salvando..." : editingLivroId ? "Atualizar Livro" : "Adicionar Livro"} 
        onPress={adicionarOuAtualizarLivro} 
        color="#6b8e23"
      />

      <Text style={styles.sectionTitle}>Lista de Livros</Text>
      <FlatList
        data={livros}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.livroItem}>
            {item.imageUrl ? (
              <Image source={{ uri: item.imageUrl }} style={styles.livroImage} />
            ) : (
              <Icon name="book" size={50} color="#4682b4" style={styles.livroIcon} />
            )}
            <View style={styles.livroDetails}>
              <Text style={styles.livroName}>{item.nome}</Text>
              <Text style={styles.livroAutor}>Autor: {item.autor}</Text>
              <Text style={styles.livroEditora}>Editora: {item.editora}</Text>
              <Text style={styles.livroAno}>Ano: {item.ano}</Text>
              <Text style={styles.livroStatus}>Status: {item.flagConcluido}</Text>
            </View>
            <View style={styles.actionButtons}>
              <TouchableOpacity onPress={() => editarLivro(item)} style={styles.actionButton}>
                <Icon name="edit" size={25} color="#4682b4" />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => excluirLivro(item.id)} style={styles.actionButton}>
                <Icon name="trash" size={25} color="#ff6347" />
              </TouchableOpacity>
            </View>
          </View>
        )}
        style={styles.livroList}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f8ff',
    padding: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#4682b4',
    textAlign: 'center',
    marginBottom: 20,
  },
  label: {
    fontSize: 18,
    marginBottom: 5,
    color: '#333',
  },
  input: {
    width: '100%',
    padding: 10,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    backgroundColor: '#fff',
  },
  statusContainer: {
    flexDirection: 'row',
    marginBottom: 15,
  },
  statusButton: {
    flex: 1,
    padding: 10,
    marginRight: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  statusButtonSelected: {
    borderColor: '#4682b4',
    backgroundColor: '#e6f0ff',
  },
  statusText: {
    fontSize: 16,
    color: '#333',
  },
  imagePreview: {
    width: '100%',
    height: 200,
    marginBottom: 15,
    borderRadius: 10,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#4682b4',
    marginTop: 20,
    marginBottom: 10,
  },
  livroList: {
    marginTop: 10,
  },
  livroItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 3,
  },
  livroIcon: {
    marginRight: 15,
  },
  livroImage: {
    width: 50,
    height: 50,
    borderRadius: 5,
    marginRight: 15,
  },
  livroDetails: {
    flex: 1,
  },
  livroName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  livroAutor: {
    fontSize: 16,
    color: '#555',
  },
  livroEditora: {
    fontSize: 16,
    color: '#555',
  },
  livroAno: {
    fontSize: 16,
    color: '#555',
  },
  livroStatus: {
    fontSize: 16,
    color: '#555',
    marginBottom: 5,
  },
  actionButtons: {
    flexDirection: 'row',
  },
  actionButton: {
    marginLeft: 10,
  },
});
