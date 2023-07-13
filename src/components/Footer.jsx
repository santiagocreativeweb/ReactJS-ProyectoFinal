import React from 'react';

const azul = {
    color: "#3574FF"
}

const Footer = () => {
  return (
    <footer className="text-center text-lg-left">
      <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        ©2023 Punto Digital - TODOS LOS DERECHOS RESERVADOS. Diseño de{' '}
        <a style={azul} href="https://github.com/santiagocreativeweb">
          Santiago Creative web
        </a>
      </div>
    </footer>
  );
};

export default Footer;
