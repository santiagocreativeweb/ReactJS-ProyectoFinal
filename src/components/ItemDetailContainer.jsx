import React from "react";
import ProductCard from "../components/ProductCard";

const estilos= {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100vw",
}

const ItemDetailContainer = ({ productsData }) => {
  return (
    <div style={estilos}>
      {productsData.map((product) => {
        return <ProductCard key={product.id} productData={product} />;
      })}
    </div>
  );
};

export default ItemDetailContainer;
