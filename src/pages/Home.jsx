import React, {useState}  from "react";
import Carousel from 'react-bootstrap/Carousel';
import { Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCreditCard, faTag, faDollarSign } from "@fortawesome/free-solid-svg-icons";
import ProductList from '../components/ProductList';
import { useNavigate } from 'react-router-dom';
import Footer from '../components/Footer';

const textarribacarrousel = {
  backgroundColor: 'red',
  textAlign: "center",
  color: "white",
  fontWeight: "500",
  fontSize: "0.8rem",
  zIndex: "99999"
};

const intereses = {
  backgroundColor: 'rgb(253, 234, 232)',
};

const columnas = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100px',
};


const icono = {
  display: 'inline-flex',
  fontSize: '30px',
  color: '#ff0000',
  marginRight: '10px',
};

const ofertas = {
  justifyContent: "space-between",
  alignItems: "center", 
  marginLeft: "100px",
  marginTop: "50px",
  marginBottom: "50px",
};

const hrStyles = {
  border: "1px solid black",
  margin: "10px 0",
  width:"525px",
  marginLeft: "100px"
};

const titulo = {
  marginLeft: "275px"
}


const box = {
  display: "flex",
  justifyContent: "center",
  border: "5px solid red",
  width: "250px",
  padding: "5px",
  marginBottom: "50px",
  marginLeft: "45%",
};

const hoverStyles = {
  backgroundColor: "red",
  transition: "background-color 2s ease",
  color: "white",
  cursor: "pointer",
};



function IndividualIntervalsExample() {
  const [isHovered, setIsHovered] = useState(false)
  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate('/category/allproducts');
  };

  return (
   <>
    <div style={textarribacarrousel}>10% OFF por TRANSFERENCIA BANCARIA !!!!</div>
    <Carousel>
      <Carousel.Item interval={3500}>
        <img
          className="d-block w-100"
          src="https://d3ugyf2ht6aenh.cloudfront.net/stores/001/222/768/themes/luxury/1-slide-1687529788874-1498923753-ebcd7c4c3c7e8e7b282c42ee3db4e6ce1687529796-1920-1920.webp?864711003"
          alt=""
        />
      </Carousel.Item>
      <Carousel.Item interval={3500}>
        <img
          className="d-block w-100"
          src="https://d3ugyf2ht6aenh.cloudfront.net/stores/001/222/768/themes/luxury/1-slide-1687529668137-3342357759-8c566d9f7ebf6567a7a3df924c5141a91687529678-1920-1920.webp?864711003"
          alt=""
        />
      </Carousel.Item>
      <Carousel.Item interval={3500}>
        <img
          className="d-block w-100"
          src="https://d3ugyf2ht6aenh.cloudfront.net/stores/001/222/768/themes/luxury/1-slide-1627503359084-6980601132-651c66399e4e3b57770c68fec71f7bcc1627503361-1920-1920.webp?864711003"
          alt=""
        />
      </Carousel.Item>
      <Carousel.Item interval={3500}>
        <img
          className="d-block w-100"
          src="https://d3ugyf2ht6aenh.cloudfront.net/stores/001/222/768/themes/luxury/1-slide-1685633349060-1804278969-71afa2e4c834bb9af560a629cf9b0dc61685633356-1920-1920.webp?864711003"
          alt=""
        />
      </Carousel.Item>
    </Carousel>
      <Row style={intereses}>
        <Col xs={4} style={columnas}>
          <FontAwesomeIcon icon={faCreditCard} style={icono} /> 3 CUOTAS SIN INTERÉS
        </Col>
        <Col xs={4} style={columnas}>
          <FontAwesomeIcon icon={faTag} style={icono} /> VENTAS CORPORATIVAS
        </Col>
        <Col xs={4} style={columnas}>
          <FontAwesomeIcon icon={faDollarSign} style={icono} /> 10% DE DESCUENTO
        </Col>
      </Row>

    <div style={ofertas}>
      <div style={titulo}>PRODUCTOS EN OFERTAS</div>
      <hr style={hrStyles} />
      <ProductList />
    </div>

    <div
      style={{ ...box, ...(isHovered ? hoverStyles : {}) }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleRedirect}
    >Ver todos los productos
  </div>

    <Footer />
   </>
  );
}

export default IndividualIntervalsExample;