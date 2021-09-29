import React from 'react';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
//import Header from './header/header';
import { LayoutWrapper } from './layout.style';
import Header from './header/header';
import Footer from './footer/footer';



const Layout = ({children, type, metadata}) => {
  const { pathname, query } = useRouter();
  
  const isBlogTemplate = type === "post" && metadata.date;
 /*  const isHomePage = pathname === '/'; */
  return (
    <LayoutWrapper>
     <Header />
     {/*  <div className="container"> */}
     {isBlogTemplate ? (
              <div className="box-post">
                <h1 className="titulo">
                  {metadata.title}
                </h1>
                {children}
              </div>
            ) :
             children }
    <Footer />
    </LayoutWrapper>
     
  );
};

export default Layout;
