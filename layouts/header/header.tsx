import React from 'react';


import Link from 'next/link';
import Router, { useRouter } from 'next/router';
import { withRouter } from 'next/router';
import NavLink from '../../components/nav-link';
//import { RightMenu } from './menu/right-menu/right-menu';
//import { LeftMenu } from './menu/left-menu/left-menu';
import {HeaderWrapper} from './header.style';
import  {Logo}  from '../../components/Logo';


const Header: React.FC = () => {
  
 
  return (
    <HeaderWrapper id="layout-header">
      <Link href={'/'}>
          <a>
            <Logo />
          </a>
        </Link>
     
          <Link href={'/'}>
          <a
            style={{ display: 'flex', alignItems: 'center'}}
          >
            <span>Home</span>
          </a>
        </Link>
        <Link href={'/proyectos'}>
          <a
            className="menu-item"
            style={{ display: 'flex', alignItems: 'center'}}
          >
            <span>Proyectos</span>
          </a>
        </Link>
      <Link href={'/proyectos'}>
          <a
            className="menu-item"
            style={{ display: 'flex', alignItems: 'center'}}
          >
            <span>About</span>
          </a>
        </Link>
      {/* <LanguageSwitcher /> */}

    </HeaderWrapper>
  );
};

export default Header;
