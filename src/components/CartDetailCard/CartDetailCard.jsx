import React from "react";
import styles from "./CartDetailCard.module.css";

const estilos = {
  width: "75px"
}

const CartDetailCard = ({ product, qty }) => {
  return (
    <div className={styles.cardsWrapper}>
        <div className={styles.itemWrapper}>
          <div>
            <img style={estilos} src={product.images} alt={product.title} />
          </div>
          <div className={styles.productInfo}>
            <h2>{product.title}</h2>
            <p>Descripcion: {product.description}</p>
            {/* <p>Precio: ${product.precio}</p> */}
            <p>Cantidad: {qty.qty}</p>
          </div>
        </div>
    </div>
  );
};

export default CartDetailCard;