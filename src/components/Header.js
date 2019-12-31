import React from 'react';

function Header() {
  return (
    <header>
      <div className="header-container">
        <h1 className="logo">facebook</h1>

        <p className="perfil">Meu Perfil  <i className="fa fa-user-circle icon"></i></p>
      </div>
    </header>
  );
}

export default Header;