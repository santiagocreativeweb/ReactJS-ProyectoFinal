import React from 'react';

const ProductRow = () => {
  return (
    <>
      <div className="row product">
        <div className="col-md-2">
          <img src="https://www.macstation.com.ar/img/productos/2594-1.jpg" alt="" height="150" />
        </div>
        <div className="col-md-2 product-detail">
          <h4>iPhone 13 Pro</h4>
          <p>El iPhone 13 Pro con cámara Pro y pantalla ProMotion</p>
        </div>
        <div className="col-md-2 product-price">
          $999
        </div>
      </div>

      <div className="row product">
        <div className="col-md-2">
          <img src="https://http2.mlstatic.com/D_NQ_NP_970068-MLA49140947261_022022-O.webp" alt="" height="150" />
        </div>
        <div className="col-md-2 product-detail">
          <h4>iMac 24</h4>
          <p>El nuevo iMac de 24 pulgadas con chip M1</p>
        </div>
        <div className="col-md-2 product-price">
          $1299
        </div>
      </div>
      
    </>
  );
}

export default ProductRow;
