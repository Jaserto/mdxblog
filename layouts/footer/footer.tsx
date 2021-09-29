import React from 'react';


import Link from 'next/link';
import Router, { useRouter } from 'next/router';
import { withRouter } from 'next/router';
import NavLink from '../../components/nav-link';
//import { RightMenu } from './menu/right-menu/right-menu';
//import { LeftMenu } from './menu/left-menu/left-menu';
import {FooterWrapper} from './footer.style';
import  {Logo}  from '../../components/Logo';


const Footer: React.FC = () => {
  
 
  return (
    <FooterWrapper>
          <p>© Javierserna.com - Todos los derechos reservados</p>
          <Link href={'/'}>
          <a
            style={{ display: 'flex', alignItems: 'center', margin: '0px 20px 0px 160px'}}
          >
            <span>home</span>
          </a>
        </Link>
        <Link href={'/proyectos'}>
          <a
            className="menu-item"
            style={{ display: 'flex', alignItems: 'center', margin: '0 20px'}}
          >
            <span>proyectos</span>
          </a>
        </Link>
      <Link href={'/proyectos'}>
          <a
            className="menu-item"
            style={{ display: 'flex', alignItems: 'center', margin: '0 20px'}}
          >
            <span>about</span>
          </a>
        </Link>
      {/* <LanguageSwitcher /> */}

    </FooterWrapper>
  );
};

export default Footer;
