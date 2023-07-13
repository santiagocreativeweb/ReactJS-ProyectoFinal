import React from "react";
import ProductCard from "../components/ProductCard";

const estilos = {
  display: "flex",
  justifyContent: "flex-start",
  flexWrap: "wrap",
  maxWidth: "100vw",
}

const cardContainerStyle = {
  width: "25%",  // Ajusta este valor para cambiar el ancho de cada tarjeta
  padding: "10px",
  boxSizing: "border-box",
}

const ItemListContainer = ({ productsData }) => {
  return (
    <div style={estilos}> 
      {productsData.map((product) => {
        return (
          <div key={product.id} style={cardContainerStyle}>
            <ProductCard productData={product} />
          </div>
        );
      })}
    </div>
  )
}

export default ItemListContainer;
