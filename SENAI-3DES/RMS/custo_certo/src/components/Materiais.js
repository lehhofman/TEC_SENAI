import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Modal from 'react-modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBox, faTools, faList, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: linear-gradient(to top right, #e6f2ff, #99ccff);
  color: #333;
  padding: 20px;
  height: 90vh;
  position: relative;
`;

const Title = styled.h1`
  color: #0033a0;
  margin-bottom: 20px;
`;

const AddButton = styled.button`
  background: #007bff;
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
    background: #0056b3;
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

const Select = styled.select`
  margin: 10px 0;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const ModalTitle = styled.h2`
  color: #0033a0;
  margin-bottom: 20px;
`;

const Button = styled.button`
  background: #007bff;
  color: #fff;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  margin-top: 20px;
  transition: background 0.3s;
  
  &:hover {
    background: #0056b3;
  }
`;

const Menu = styled.div`
  display: flex;
  justify-content: space-around;
  background: #007bff;
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
    background: #0056b3;
  }
`;

const MaterialList = styled.ul`
  list-style: none;
  padding: 0;
  width: 100%;
  max-width: 600px;
  margin-top: 20px;
`;

const MaterialItem = styled.li`
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 15px;
  margin: 10px 0;
  display: flex;
  flex-direction: column;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  position: relative;
`;

const MaterialName = styled.h3`
  font-size: 20px;
  color: #0033a0;
  margin: 0;
  font-family: 'Roboto';
`;

const MaterialDetails = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
`;

const DetailItem = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const DetailLabel = styled.span`
  color: #0033a0;
`;

const DetailValue = styled.span`
  margin-top: 5px;
`;

const ActionButton = styled.button`
  background: #e60000;
  color: #fff;
  padding: 5px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 14px;
  position: absolute;
  top: 10px;
  right: 10px;
  transition: background 0.3s;
  
  &:hover {
    background: #c60000;
  }
`;

const EditButton = styled(ActionButton)`
  background: #007bff;
  right: 60px;
  
  &:hover {
    background: #0056b3;
  }
`;

const Materials = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [materials, setMaterials] = useState([]);
  const [materialName, setMaterialName] = useState('');
  const [materialPrice, setMaterialPrice] = useState('');
  const [materialContent, setMaterialContent] = useState('');
  const [materialUnit, setMaterialUnit] = useState('unidades');
  const [editIndex, setEditIndex] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const savedMaterials = JSON.parse(localStorage.getItem('materials')) || [];
    setMaterials(savedMaterials);
  }, []);

  useEffect(() => {
    localStorage.setItem('materials', JSON.stringify(materials));
  }, [materials]);

  const openModal = (index = null) => {
    setEditIndex(index);
    setModalIsOpen(true);
    if (index !== null) {
      const material = materials[index];
      setMaterialName(material.name);
      setMaterialPrice(material.price);
      setMaterialContent(material.content);
      setMaterialUnit(material.unit);
    } else {
      setMaterialName('');
      setMaterialPrice('');
      setMaterialContent('');
      setMaterialUnit('unidades');
    }
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setEditIndex(null);
  };

  const handleAddOrUpdateMaterial = () => {
    if (materialName && materialPrice && materialContent) {
      const newMaterial = {
        name: materialName,
        price: materialPrice,
        content: materialContent,
        unit: materialUnit,
      };

      if (editIndex !== null) {
        const updatedMaterials = materials.map((material, index) =>
          index === editIndex ? newMaterial : material
        );
        setMaterials(updatedMaterials);
      } else {
        setMaterials([...materials, newMaterial]);
      }

      closeModal();
    }
  };

  const handleDeleteMaterial = (index) => {
    const updatedMaterials = materials.filter((_, i) => i !== index);
    setMaterials(updatedMaterials);
  };

  const handleEditMaterial = (index) => {
    openModal(index);
  };

  return (
    <Container>
      <Title>Materiais</Title>
      <AddButton onClick={() => openModal()}>+</AddButton>
      <MaterialList>
        {materials.map((material, index) => (
          <MaterialItem key={index}>
            <MaterialName>{material.name}</MaterialName>
            <MaterialDetails>
              <DetailItem>
                <DetailLabel>Preço:</DetailLabel>
                <DetailValue>{material.price} R$</DetailValue>
              </DetailItem>
              <DetailItem>
                <DetailLabel>Conteúdo:</DetailLabel>
                <DetailValue>{material.content}</DetailValue>
              </DetailItem>
              <DetailItem>
                <DetailLabel>Unidade:</DetailLabel>
                <DetailValue>{material.unit}</DetailValue>
              </DetailItem>
            </MaterialDetails>
            <EditButton onClick={() => handleEditMaterial(index)}>
              <FontAwesomeIcon icon={faEdit} /> Editar
            </EditButton>
            <ActionButton onClick={() => handleDeleteMaterial(index)}>
              <FontAwesomeIcon icon={faTrash} /> Excluir
            </ActionButton>
          </MaterialItem>
        ))}
      </MaterialList>

      <Modal isOpen={modalIsOpen} onRequestClose={closeModal} contentLabel="Material Modal">
        <ModalContent>
          <ModalTitle>{editIndex !== null ? 'Editar Material' : 'Novo Material'}</ModalTitle>
          <Label htmlFor="name">Nome:</Label>
          <Input
            id="name"
            type="text"
            value={materialName}
            onChange={(e) => setMaterialName(e.target.value)}
          />
          <Label htmlFor="price">Preço:</Label>
          <Input
            id="price"
            type="text"
            value={materialPrice}
            onChange={(e) => setMaterialPrice(e.target.value)}
          />
          <Label htmlFor="content">Conteúdo:</Label>
          <Input
            id="content"
            type="text"
            value={materialContent}
            onChange={(e) => setMaterialContent(e.target.value)}
          />
          <Label htmlFor="unit">Unidade:</Label>
          <Select
            id="unit"
            value={materialUnit}
            onChange={(e) => setMaterialUnit(e.target.value)}
          >
            <option value="unidades">Unidades</option>
            <option value="kg">Kg</option>
            <option value="g">g</option>
            <option value="mg">mg</option>
            <option value="l">L</option>
            <option value="dl">dL</option>
            <option value="ml">mL</option>
          </Select>
          <Button onClick={handleAddOrUpdateMaterial}>
            {editIndex !== null ? 'Atualizar' : 'Adicionar'}
          </Button>
        </ModalContent>
      </Modal>

      <Menu>
        <MenuItem onClick={() => navigate('/')}>
          <FontAwesomeIcon icon={faBox} /> Home
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

export default Materials;
