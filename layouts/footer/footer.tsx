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
      <div style={{
        display: 'flex',
       flexDirection: 'row'
      }}>
          <Link href={'/'}>
          <a
            style={{ margin:'10px',display: 'flex', alignItems: 'center'}}
          >
            <span>home</span>
          </a>
        </Link>
        <Link href={'/proyectos'}>
          <a
            className="menu-item"
            style={{ margin:'10px',display: 'flex', alignItems: 'center'}}
          >
            <span>proyectos</span>
          </a>
        </Link>
      <Link href={'/about'}>
          <a
            className="menu-item"
            style={{ margin:'10px',display: 'flex', alignItems: 'center'} }
          >
            <span>about</span>
          </a>
        </Link>
      {/* <LanguageSwitcher /> */}
</div>
<p style={{
  fontSize:'13px'
}}>
made with 🖤 ©javierserna.com 2021
</p>
    </FooterWrapper>
  );
};

export default Footer;
