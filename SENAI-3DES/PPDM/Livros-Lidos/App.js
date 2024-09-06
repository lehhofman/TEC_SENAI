import React, { useState, useEffect } from "react";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  FlatList,
  Image,
  TouchableOpacity,
  Alert,
  ScrollView,
  Picker,
  Modal
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { db } from "./firebaseconfig";
import {
  collection,
  addDoc,
  getDocs,
  doc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";
import { launchImageLibrary } from "react-native-image-picker";

const storage = getStorage();

export default function App() {
  const [nomeLivro, setNomeLivro] = useState("");
  const [autorLivro, setAutorLivro] = useState("");
  const [editoraLivro, setEditoraLivro] = useState("");
  const [anoLivro, setAnoLivro] = useState("");
  const [imagemLivro, setImagemLivro] = useState(null);
  const [flagLivro, setFlagLivro] = useState("Pendente");
  const [livros, setLivros] = useState([]);
  const [loading, setLoading] = useState(false);
  const [editingLivroId, setEditingLivroId] = useState(null);

  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    fetchLivros();
  }, []);

  const adicionarLivro = async () => {
    try {
      setLoading(true);
      let imageUrl = imagemLivro;

      if (imagemLivro && !imagemLivro.startsWith('http')) {
        const storageRef = ref(
          storage,
          `livros/${Date.now()}-${nomeLivro}.jpg`
        );
        const response = await fetch(imagemLivro);
        if (!response.ok) {
          throw new Error('Failed to fetch image');
        }
        const blob = await response.blob();
        await uploadBytes(storageRef, blob);
        imageUrl = await getDownloadURL(storageRef);
      }

      if (editingLivroId) {
        const livroDoc = doc(db, "livros", editingLivroId);
        await updateDoc(livroDoc, {
          nome: nomeLivro,
          autor: autorLivro,
          editora: editoraLivro,
          ano: anoLivro,
          imagem: imageUrl,
          flag: flagLivro,
        });

        Alert.alert("Livro atualizado com sucesso!");
      } else {
        await addDoc(collection(db, "livros"), {
          nome: nomeLivro,
          autor: autorLivro,
          editora: editoraLivro,
          ano: anoLivro,
          imagem: imageUrl,
          flag: flagLivro,
        });
        Alert.alert("Livro adicionado com sucesso!");
      }
      resetForm();
      fetchLivros();
    } catch (e) {
      console.error("Erro ao adicionar/atualizar livro", e);
      Alert.alert("Erro", "Ocorreu um erro ao adicionar ou atualizar o livro.");
    } finally {
      setLoading(false);
    }
  };

  const fetchLivros = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "livros"));
      const livrosList = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setLivros(livrosList);
    } catch (e) {
      console.error("Erro ao buscar livros", e);
    }
  };

  const escolherImagem = () => {
    const options = {
      mediaType: "photo",
      quality: 1,
    };

    launchImageLibrary(options, (response) => {
      if (response.didCancel) {
        console.log("Seleção de imagem cancelada");
      } else if (response.error) {
        console.log("Erro ao selecionar imagem: ", response.error);
      } else {
        const source = response.assets[0].uri;
        setImagemLivro(source);
      }
    });
  };

  const editarLivro = (livro) => {
    setNomeLivro(livro.nome);
    setAutorLivro(livro.autor);
    setEditoraLivro(livro.editora);
    setAnoLivro(livro.ano);
    setImagemLivro(livro.imagem);
    setFlagLivro(livro.flag);
    setEditingLivroId(livro.id);
    setModalVisible(true);
  };

  const excluirLivro = async (livroId) => {
    try {
      const livroDoc = doc(db, "livros", livroId);
      await deleteDoc(livroDoc);
      Alert.alert("Livro excluído com sucesso!");
      fetchLivros();
    } catch (e) {
      console.error("Erro ao excluir livro", e);
    }
  };

  const resetForm = () => {
    setNomeLivro("");
    setAutorLivro("");
    setEditoraLivro("");
    setAnoLivro("");
    setImagemLivro(null);
    setFlagLivro("Pendente");
    setEditingLivroId(null);
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "Concluído":
        return "#6f42c1";
      case "Pendente":
        return "#d63384"; 
      case "Em Progresso":
        return "#e83e8c"; 
      default:
        return "#6c757d";
    }
  };

  const handleUpdate = async () => {
    setModalVisible(false);
    await adicionarLivro();
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.innerContainer}>
        <Text style={styles.title}>Livros Lidos</Text>
        <Text style={styles.label}>Livro:</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite o nome do livro"
          placeholderTextColor="#aaa"
          value={nomeLivro}
          onChangeText={setNomeLivro}
        />
        <Text style={styles.label}>Autor:</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite o nome do autor"
          placeholderTextColor="#aaa"
          value={autorLivro}
          onChangeText={setAutorLivro}
        />
        <Text style={styles.label}>Editora:</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite o nome da editora"
          placeholderTextColor="#aaa"
          value={editoraLivro}
          onChangeText={setEditoraLivro}
        />
        <Text style={styles.label}>Ano de Publicação:</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite o ano de publicação"
          placeholderTextColor="#aaa"
          value={anoLivro}
          onChangeText={(text) => setAnoLivro(text.replace(/[^0-9]/g, ""))}
          keyboardType="numeric"
        />
        <Text style={styles.label}>Status:</Text>
        <Picker
          selectedValue={flagLivro}
          style={styles.picker}
          onValueChange={(itemValue) => setFlagLivro(itemValue)}
        >
          <Picker.Item label="Pendente" value="Pendente" />
          <Picker.Item label="Em Progresso" value="Em Progresso" />
          <Picker.Item label="Concluído" value="Concluído" />
        </Picker>

        <TouchableOpacity onPress={escolherImagem} style={styles.imagePicker}>
          <Text style={styles.imagePickerText}>
            {imagemLivro ? "Imagem Selecionada" : "Selecionar Imagem do Livro"}
          </Text>
        </TouchableOpacity>
        {imagemLivro && (
          <Image
            source={{ uri: imagemLivro }}
            style={styles.bookImagePreview}
          />
        )}
        <TouchableOpacity
          onPress={adicionarLivro}
          style={styles.addButton}
          disabled={loading}
        >
          <Text style={styles.addButtonText}>
            {loading
              ? "Salvando..."
              : editingLivroId
              ? "Atualizar Livro"
              : "Adicionar Livro"}
          </Text>
        </TouchableOpacity>

        <FlatList
          data={livros}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={[styles.bookItem, { borderColor: getStatusColor(item.flag) }]}>
              <Image
                source={{
                  uri: item.imagem || "https://via.placeholder.com/100",
                }}
                style={styles.bookImage}
              />
              <View style={styles.bookInfo}>
                <Text style={styles.bookName}>{item.nome}</Text>
                <Text style={styles.bookAuthor}>{item.autor}</Text>
                <Text style={styles.bookPublisher}>{item.editora}</Text>
                <Text style={styles.bookYear}>Ano: {item.ano}</Text>
                <Text style={[styles.bookFlag, { color: getStatusColor(item.flag) }]}>
                  Status: {item.flag}
                </Text>
              </View>
              <View style={styles.bookActions}>
                <TouchableOpacity
                  onPress={() => editarLivro(item)}
                  style={styles.editButton}
                >
                  <Icon name="pencil" size={20} color="#ffffff" />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => excluirLivro(item.id)}
                  style={styles.deleteButton}
                >
                  <Icon name="trash" size={20} color="#ffffff" />
                </TouchableOpacity>
              </View>
            </View>
          )}
        />
      </View>

      <Modal
        visible={modalVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Editar Livro</Text>
            <TextInput
              style={styles.modalInput}
              placeholder="Nome do Livro"
              placeholderTextColor="#aaa"
              value={nomeLivro}
              onChangeText={setNomeLivro}
            />
            <TextInput
              style={styles.modalInput}
              placeholder="Autor"
              placeholderTextColor="#aaa"
              value={autorLivro}
              onChangeText={setAutorLivro}
            />
            <TextInput
              style={styles.modalInput}
              placeholder="Editora"
              placeholderTextColor="#aaa"
              value={editoraLivro}
              onChangeText={setEditoraLivro}
            />
            <TextInput
              style={styles.modalInput}
              placeholder="Ano de Publicação"
              placeholderTextColor="#aaa"
              value={anoLivro}
              onChangeText={(text) => setAnoLivro(text.replace(/[^0-9]/g, ""))}
              keyboardType="numeric"
            />
            <Picker
              selectedValue={flagLivro}
              style={styles.modalPicker}
              onValueChange={(itemValue) => setFlagLivro(itemValue)}
            >
              <Picker.Item label="Pendente" value="Pendente" />
              <Picker.Item label="Em Progresso" value="Em Progresso" />
              <Picker.Item label="Concluído" value="Concluído" />
            </Picker>
            <TouchableOpacity onPress={escolherImagem} style={styles.modalImagePicker}>
              <Text style={styles.modalImagePickerText}>
                {imagemLivro ? "Imagem Selecionada" : "Selecionar Imagem do Livro"}
              </Text>
            </TouchableOpacity>
            {imagemLivro && (
              <Image
                source={{ uri: imagemLivro }}
                style={styles.modalBookImagePreview}
              />
            )}
            <TouchableOpacity
              onPress={handleUpdate}
              style={styles.modalUpdateButton}
              disabled={loading}
            >
              <Text style={styles.modalUpdateButtonText}>
                {loading ? "Atualizando..." : "Atualizar"}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setModalVisible(false)}
              style={styles.modalCloseButton}
            >
              <Text style={styles.modalCloseButtonText}>Fechar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#f0f0f5",  
  },
  innerContainer: {
    flex: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 16,
    color: "#6f42c1", 
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 8,
    color: "#6f42c1", 
  },
  input: {
    height: 40,
    borderColor: "#6f42c1", 
    borderWidth: 1,
    borderRadius: 4,
    paddingHorizontal: 8,
    marginBottom: 16,
    backgroundColor: "#ffffff",
  },
  picker: {
    height: 40,
    borderColor: "#6f42c1",
    borderWidth: 1,
    borderRadius: 4,
    marginBottom: 16,
    backgroundColor: "#ffffff",
  },
  imagePicker: {
    backgroundColor: "#6f42c1", 
    borderRadius: 4,
    padding: 10,
    alignItems: "center",
    marginBottom: 16,
  },
  imagePickerText: {
    color: "#ffffff",
    fontSize: 16,
  },
  bookImagePreview: {
    width: 100,
    height: 150,
    borderRadius: 8,
    marginBottom: 16,
    alignSelf: "center",
  },
  addButton: {
    backgroundColor: "#6f42c1", 
    borderRadius: 4,
    padding: 10,
    alignItems: "center",
    marginBottom: 16,
  },
  addButtonText: {
    color: "#ffffff",
    fontSize: 16,
  },
  bookItem: {
    flexDirection: "row",
    borderWidth: 2,
    borderRadius: 8,
    padding: 10,
    marginBottom: 16,
    backgroundColor: "#ffffff",
    alignItems: "center",
  },
  bookImage: {
    width: 100,
    height: 150,
    borderRadius: 8,
    marginRight: 16,
  },
  bookInfo: {
    flex: 1,
  },
  bookName: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 4,
  },
  bookAuthor: {
    fontSize: 16,
    marginBottom: 4,
  },
  bookPublisher: {
    fontSize: 16,
    marginBottom: 4,
  },
  bookYear: {
    fontSize: 16,
    marginBottom: 4,
  },
  bookFlag: {
    fontSize: 16,
    fontWeight: "bold",
  },
  bookActions: {
    flexDirection: "row",
  },
  editButton: {
    backgroundColor: "#6f42c1", 
    borderRadius: 4,
    padding: 8,
    marginRight: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  deleteButton: {
    backgroundColor: "#d63384", 
    borderRadius: 4,
    padding: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  modalOverlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    width: "80%",
    padding: 20,
    backgroundColor: "#ffffff",
    borderRadius: 8,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 16,
    textAlign: "center",
    color: "#6f42c1", 
  },
  modalInput: {
    height: 40,
    borderColor: "#6f42c1", 
    borderWidth: 1,
    borderRadius: 4,
    paddingHorizontal: 8,
    marginBottom: 16,
  },
  modalPicker: {
    height: 40,
    borderColor: "#6f42c1", 
    borderWidth: 1,
    borderRadius: 4,
    marginBottom: 16,
  },
  modalImagePicker: {
    backgroundColor: "#6f42c1",
    borderRadius: 4,
    padding: 10,
    alignItems: "center",
    marginBottom: 16,
  },
  modalImagePickerText: {
    color: "#ffffff",
    fontSize: 16,
  },
  modalBookImagePreview: {
    width: 100,
    height: 150,
    borderRadius: 8,
    marginBottom: 16,
    alignSelf: "center",
  },
  modalUpdateButton: {
    backgroundColor: "#6f42c1",
    borderRadius: 4,
    padding: 10,
    alignItems: "center",
    marginBottom: 16,
  },
  modalUpdateButtonText: {
    color: "#ffffff",
    fontSize: 16,
  },
  modalCloseButton: {
    alignItems: "center",
  },
  modalCloseButtonText: {
    color: "#6f42c1",
    fontSize: 16,
    fontWeight: "bold",
  },
});
