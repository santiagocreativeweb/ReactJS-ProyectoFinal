import React from "react";
import CartButtons from "./CartButtons";
import { Link, useLocation } from "react-router-dom";
import Card from "react-bootstrap/Card";

const ProductCard = ({ productData }) => {
  const customStyleStock = {
    backgroundColor: "primary",
    buttonState: "",
  };

  const location = useLocation();
  const currentPath = location.pathname;

  const backButtonPath = "/"; // Ruta a la que quieres que te lleve el botón "Volver"

  const buttonText = currentPath === `/item/${productData.id}` ? (
    <Link to={backButtonPath}>Volver</Link>
  ) : (
    <Link to={`/item/${productData.id}`}>Ir a detalle</Link>
  );
  


  return (
    <Card 
    style={{ 
      display: "inline-grid",
      marginTop: "20px",
      marginRight:"25px",
      width:"300px"
      }}>
      <Card.Img style={{ width: "298px", height: "200px", objectFit: "scale-down" }} variant="top" src={productData.images[0]} />
      <Card.Body>
        <Card.Title>{productData.title}</Card.Title>
        <Card.Text>{productData.description}</Card.Text>
        <Card.Text>{productData.price}</Card.Text>
        {buttonText}
        <div>{productData.stock < 10 ? "Ultimos Productos" : ""} </div>
        {productData.stock < 10 ? (
          <CartButtons customStyle={customStyleStock} productId={productData.id}/>
        ) : (
          <CartButtons customStyle={customStyleStock} productId={productData.id}/>
        )}

        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <Link
            to={`/update-product/${productData.id}`}
            style={{
              marginTop: "10px",
              marginLeft:"5px",
              backgroundColor: "green",
              textDecoration: "none",
              color: "white",
              borderRadius: "5px",
              fontSize: "18px",
              padding: "10px",
            }}
          >
            Modificar producto
          </Link>
        </div>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
