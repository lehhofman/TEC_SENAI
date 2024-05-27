import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container, Card, Button, Badge, Modal, ListGroup } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './logo.gif';

function ProductCard({ name, description, addToCart }) {
  return (
    <div className="col-md-3 mb-3">
      <Card>
        <div style={{ height: '250px', overflow: 'hidden', marginBottom: '10px'}}>
          <Card.Img variant="top" src={`/${name.toLowerCase()}.jpg`} style={{ objectFit: 'cover', height: '100%', width: '100%' }} />
        </div>
        <Card.Body className="d-flex flex-column">
          <Card.Title className="text-center">{name}</Card.Title>
          <div style={{fontFamily:'cursive', fontSize:'13px'}}>
            <Card.Text className="text-center">
              {description}
            </Card.Text>
          </div>
          <div style={{ marginTop: '10px'}}>
            <div className="mt-auto">
              <Button variant="primary" onClick={() => addToCart(name)} className="w-100">
                Adicionar ao Carrinho
              </Button>
            </div>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}

function Cart({ cartItems, removeFromCart, show, handleClose, finalizePurchase }) {
  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Carrinho de Compras</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <ListGroup>
          {cartItems.map((item, index) => (
            <ListGroup.Item key={index}>
              {item.name} - R$ {item.price.toFixed(2)}
              <Button variant="danger" size="sm" onClick={() => removeFromCart(index)} className="ms-2">
                Remover
              </Button>
            </ListGroup.Item>
          ))}
        </ListGroup>
        <p className="mt-3">Total: R$ {totalPrice.toFixed(2)}</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Fechar
        </Button>
        <Button variant="primary" onClick={finalizePurchase}>
          Finalizar Compra
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

function App() {
  const [backgroundImage, setBackgroundImage] = useState('');

  useEffect(() => {
    const backgrounds = ['images/image1.jpg', 'images/image2.jpg', 'images/image3.jpg'];
    const randomIndex = Math.floor(Math.random() * backgrounds.length);
    setBackgroundImage(backgrounds[randomIndex]);
  });

  const [cartItems, setCartItems] = useState([]);
  const [showCart, setShowCart] = useState(false);

  const productPrices = {
    "Memória GATCH": 50.00,
    "Mouse Gpro": 35.90,
    "Adaptador USB": 15.99,
    "Fone HAIZ": 20.54,
    "Fone JBL": 57.25,
    "Controle Game": 43.59,
    "Tablet Pro": 150.99,
    "Impressora EPSON": 112.76,
    "Caixa de Som": 80.90,
    "Monitor": 236.98
  };

  const addToCart = (productName) => {
    const productPrice = productPrices[productName];
    const newItem = { name: productName, price: productPrice };
    setCartItems([...cartItems, newItem]);
  };

  const removeFromCart = (index) => {
    const updatedCartItems = [...cartItems];
    updatedCartItems.splice(index, 1);
    setCartItems(updatedCartItems);
  };

  const handleClose = () => setShowCart(false);
  const handleShow = () => setShowCart(true);

  const finalizePurchase = () => {
    // Implemente a lógica para finalizar a compra aqui
    // Por exemplo, limpar o carrinho de compras
    setCartItems([]);
    // Ou exibir uma mensagem de sucesso
    alert('Compra finalizada com sucesso!');
  };

  return (
    <div style = {{backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', minHeight: '100vh'}}>
      <Navbar bg="dark" variant="dark">
        <Container>
        <Navbar.Brand href="#home">
          <img src={logo} width="60" height="40" className="d-inline-block align-top" alt="Minha Loja Logo" />
        </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#produtos">Produtos</Nav.Link>
            <Nav.Link href="#contato">Contato</Nav.Link>
          </Nav>
          <Button variant="primary" onClick={handleShow}>
            <i className="bi bi-cart"></i> <Badge bg="danger">{cartItems.length}</Badge>
          </Button>
        </Container>
      </Navbar>

      <Container className="mt-5">
        <h1 className="text-center mb-4" style={{color: 'white'}}>Produtos em Destaque</h1>
        <div className="row">
          <ProductCard name="Memória GATCH" description="Alta velocidade para melhor desempenho do seu computador." addToCart={addToCart} />
          <ProductCard name="Mouse Gpro" description="Sensor de alta precisão para uma experiência de jogo imersiva." addToCart={addToCart} />
          <ProductCard name="Adaptador USB" description="Conectar dispositivos externos ao seu computador ou laptop." addToCart={addToCart} />
          <ProductCard name="Fone HAIZ" description="Sem ruído e qualidade de som cristalina para música e chamadas." addToCart={addToCart} />
          <ProductCard name="Fone JBL" description="Sem fio com design confortável e bateria de longa duração." addToCart={addToCart} />
          <ProductCard name="Controle Game" description="Giroscópio integrado para uma experiência de jogo imersiva." addToCart={addToCart} />
          <ProductCard name="Tablet Pro" description="Tela de alta resolução e desempenho multitarefa." addToCart={addToCart} />
          <ProductCard name="Impressora EPSON" description="Conectividade Wi-Fi para impressão fácil de documentos e fotos." addToCart={addToCart} />
          <ProductCard name="Caixa de Som" description="Som estéreo de alta qualidade e conectividade Bluetooth." addToCart={addToCart} />
          <ProductCard name="Monitor" description="Atualização rápida para uma experiência de visualização suave." addToCart={addToCart} />
        </div>
      </Container>

      <footer className="bg-dark text-white text-center py-4 mt-5">
        &copy; 2024 Minha Loja. Todos os direitos reservados.
      </footer>

      <Cart cartItems={cartItems} removeFromCart={removeFromCart} show={showCart} handleClose={handleClose} finalizePurchase={finalizePurchase} />
    </div>
  );
}

export default App;
