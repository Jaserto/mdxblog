import React from 'react';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
//import Header from './header/header';
import { LayoutWrapper } from './layout.style';
import Header from './header/header';
import Footer from './footer/footer';


const Layout: React.FunctionComponent = ({children}) => {
  const { pathname, query } = useRouter();

  const isHomePage = pathname === '/';
  return (
    <LayoutWrapper>
     <Header />
     {/*  <div className="container"> */}
         {children}
    {/*   </div> */}
    <Footer />
    </LayoutWrapper>
     
  );
};

export default Layout;
