import React from 'react';
import { Link } from 'react-router-dom';
import { HeaderNav } from './styledHeader';

const Header = () => {
  return (
    <nav>
      <HeaderNav>
        <Link to='/'>Home</Link>
        <Link to='/favoritos'>Favoritos</Link>
        <Link to='/acerca'>Acerca de Programadores</Link>
      </HeaderNav>
    </nav>
  );
};

export default Header;
