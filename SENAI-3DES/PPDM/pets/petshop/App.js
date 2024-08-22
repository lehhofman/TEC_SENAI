import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, TextInput, FlatList, Image, TouchableOpacity, Alert } from "react-native";
import { db } from "./firebaseconfig";
import { collection, addDoc, getDocs, doc, updateDoc, deleteDoc } from "firebase/firestore";
import { launchImageLibrary } from 'react-native-image-picker';

export default function App() {
  const [nomePet, setNomePet] = useState("");
  const [tipoPet, setTipoPet] = useState("");
  const [petImage, setPetImage] = useState(null);
  const [pets, setPets] = useState([]);
  const [loading, setLoading] = useState(false);
  const [editingPetId, setEditingPetId] = useState(null);

  useEffect(() => {
    fetchPets();
  }, []);

  const adicionarPet = async () => {
    try {
      setLoading(true);
      if (editingPetId) {
        const petDoc = doc(db, "pets", editingPetId);
        await updateDoc(petDoc, {
          nome: nomePet,
          tipo: tipoPet,
          imagem: petImage
        });
        Alert.alert("Pet atualizado com sucesso!");
      } else {
        await addDoc(collection(db, "pets"), {
          nome: nomePet,
          tipo: tipoPet,
          imagem: petImage
        });
        Alert.alert("Pet adicionado com sucesso!");
      }
      resetForm();
      fetchPets();
    } catch (e) {
      console.error("Erro ao adicionar/atualizar pet", e);
    } finally {
      setLoading(false);
    }
  };

  const fetchPets = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "pets"));
      const petsList = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setPets(petsList);
    } catch (e) {
      console.error("Erro ao buscar pets", e);
    }
  };

  const escolherImagem = () => {
    const options = {
      mediaType: 'photo',
      quality: 1,
    };

    launchImageLibrary(options, response => {
      if (response.didCancel) {
        console.log('Seleção de imagem cancelada');
      } else if (response.error) {
        console.log('Erro ao selecionar imagem: ', response.error);
      } else {
        const source = { uri: response.assets[0].uri };
        setPetImage(source.uri);
      }
    });
  };

  const editarPet = (pet) => {
    setNomePet(pet.nome);
    setTipoPet(pet.tipo);
    setPetImage(pet.imagem);
    setEditingPetId(pet.id);
  };

  const excluirPet = async (petId) => {
    try {
      const petDoc = doc(db, "pets", petId);
      await deleteDoc(petDoc);
      Alert.alert("Pet excluído com sucesso!");
      fetchPets();
    } catch (e) {
      console.error("Erro ao excluir pet", e);
    }
  };

  const resetForm = () => {
    setNomePet('');
    setTipoPet('');
    setPetImage(null);
    setEditingPetId(null);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pets SENAI</Text>

      <Text style={styles.label}>Nome do Pet</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite o nome do pet"
        placeholderTextColor="#aaa"
        value={nomePet}
        onChangeText={setNomePet}
      />

      <Text style={styles.label}>Tipo do Pet</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite o tipo do pet"
        placeholderTextColor="#aaa"
        value={tipoPet}
        onChangeText={setTipoPet}
      />

      <TouchableOpacity onPress={escolherImagem} style={styles.imagePicker}>
        <Text style={styles.imagePickerText}>
          {petImage ? 'Imagem Selecionada' : 'Selecionar Imagem do Pet'}
        </Text>
      </TouchableOpacity>

      {petImage && (
        <Image source={{ uri: petImage }} style={styles.petImagePreview} />
      )}

      <TouchableOpacity
        onPress={adicionarPet}
        style={styles.addButton}
        disabled={loading}
      >
        <Text style={styles.addButtonText}>
          {loading ? "Salvando..." : editingPetId ? "Atualizar Pet" : "Adicionar Pet"}
        </Text>
      </TouchableOpacity>

      <Text style={styles.sectionTitle}>Lista de Pets</Text>
      <FlatList
        data={pets}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.petItem}>
            <Image
              source={{ uri: item.imagem || 'https://via.placeholder.com/100' }}
              style={styles.petImage}
            />
            <View style={styles.petInfo}>
              <Text style={styles.petName}>{item.nome}</Text>
              <Text style={styles.petType}>{item.tipo}</Text>
            </View>
            <View style={styles.petActions}>
              <TouchableOpacity onPress={() => editarPet(item)} style={styles.editButton}>
                <Text style={styles.editButtonText}>✎</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => excluirPet(item.id)} style={styles.deleteButton}>
                <Text style={styles.deleteButtonText}>✘</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
        style={styles.petList}
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
    fontSize: 36,
    fontWeight: 'bold',
    color: '#4682b4',
    textAlign: 'center',
    marginBottom: 20,
  },
  label: {
    fontSize: 20,
    marginBottom: 5,
    color: '#333',
  },
  input: {
    width: '100%',
    padding: 12,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#4682b4',
    borderRadius: 10,
    backgroundColor: '#ffffff',
    color: '#000',
  },
  imagePicker: {
    backgroundColor: '#4682b4',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    alignItems: 'center',
  },
  imagePickerText: {
    color: '#ffffff',
    fontSize: 16,
  },
  petImagePreview: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 15,
    alignSelf: 'center',
  },
  addButton: {
    backgroundColor: '#4682b4',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 20,
  },
  addButtonText: {
    color: '#fff',
    fontSize: 18,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#4682b4',
    marginBottom: 10,
  },
  petList: {
    marginTop: 10,
  },
  petItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 5,
  },
  petImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 15,
  },
  petInfo: {
    flex: 1,
  },
  petName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  petType: {
    fontSize: 18,
    color: '#555',
  },
  petActions: {
    flexDirection: 'row',
  },
  editButton: {
    backgroundColor: '#ffa500',
    padding: 10,
    borderRadius: 5,
    marginRight: 10,
  },
  editButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  deleteButton: {
    backgroundColor: '#ff6347',
    padding: 10,
    borderRadius: 5,
  },
  deleteButtonText: {
    color: '#fff',
    fontSize: 16,
  },
});
