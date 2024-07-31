import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Modal from 'react-modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faBox, faTools, faList } from '@fortawesome/free-solid-svg-icons';

// Estilos
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: linear-gradient(to top right, #e6f2ff, #99ccff); /* Gradiente azul claro */
  color: #333;
  padding: 20px;
  height: 90vh;
  position: relative;
`;

const Title = styled.h1`
  color: #0033a0; /* Azul escuro */
  margin-bottom: 20px;
`;

const AddButton = styled.button`
  background: #007bff; /* Azul */
  color: #fff;
  padding: 15px;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  font-size: 24px;
  position: fixed;
  bottom: 120px;
  right: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.3s;
  
  &:hover {
    background: #0056b3; /* Azul mais escuro */
  }
`;

const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  width: 90%;
  max-width: 400px;
  margin: auto;
  border-radius: 8px;
  background: #fff;
`;

const Input = styled.input`
  margin: 10px 0;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Label = styled.label`
  margin: 5px 0;
`;

const ModalTitle = styled.h2`
  color: #0033a0; /* Azul escuro */
  margin-bottom: 20px;
`;

const Button = styled.button`
  background: #007bff; /* Azul */
  color: #fff;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  margin-top: 20px;
  transition: background 0.3s;
  
  &:hover {
    background: #0056b3; /* Azul mais escuro */
  }
`;

const Menu = styled.div`
  display: flex;
  justify-content: space-around;
  background: #007bff; /* Azul */
  padding: 10px 0;
  width: 100%;
  position: fixed;
  bottom: 0;
`;

const MenuItem = styled.div`
  color: #fff;
  cursor: pointer;
  padding: 10px 20px;
  display: flex;
  align-items: center;
  gap: 8px;
  &:hover {
    background: #0056b3; /* Azul mais escuro */
  }
`;

// Componente Produtos
const Products = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const navigate = useNavigate();

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <Container>
      <Title>Produtos</Title>
      <AddButton onClick={openModal}>
        <FontAwesomeIcon icon={faPlus} />
      </AddButton>

      <Modal isOpen={modalIsOpen} onRequestClose={closeModal} ariaHideApp={false}>
        <ModalContent>
          <ModalTitle>Adicionar Novo Produto</ModalTitle>
          <Label>Nome</Label>
          <Input type="text" placeholder="Nome do Produto" />
          <Label>Quantidade</Label>
          <Input type="number" placeholder="Quantidade" />
          <Label>Rendimento (Unidades)</Label>
          <Input type="number" placeholder="Rende quantas unidades" />
          <Label>% sobre Custos Adicionais</Label>
          <Input type="number" placeholder="% sobre custos adicionais" />
          <Label>Lucro Esperado</Label>
          <Input type="number" placeholder="Lucro esperado" />
          <Label>Anotações</Label>
          <Input type="text" placeholder="Anotações" />
          <Button onClick={closeModal}>Adicionar</Button>
        </ModalContent>
      </Modal>
      
      <Menu>
        <MenuItem onClick={() => navigate('/products')}>
          <FontAwesomeIcon icon={faBox} /> Produtos
        </MenuItem>
        <MenuItem onClick={() => navigate('/materials')}>
          <FontAwesomeIcon icon={faTools} /> Materiais
        </MenuItem>
        <MenuItem onClick={() => navigate('/lists')}>
          <FontAwesomeIcon icon={faList} /> Listas
        </MenuItem>
      </Menu>
    </Container>
  );
};

export default Products;
