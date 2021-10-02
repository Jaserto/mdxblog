import styled, { keyframes } from 'styled-components';
import { themeGet } from '@styled-system/theme-get';


export const HeaderWrapper = styled.header`
  display: flex;
  width: 100%;
  justify-content:space-between;
  display: flex;
  font-family: 'Inter', sans-serif;
  font-size: 18px;
  align-items: center;
  height: 130px;
  max-width:800px;
  color: white;
  @media (max-width: 540px) {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
  @media (max-width: 830px) {
    a{
      display:flex;
  
    }
    .menu{
     /*  border:1px solid red; */
      margin:0;
      display:flex;
      padding:0 10px;
    }
    align-items: center;
    justify-content: center;
    display: flex;
    flex-direction: column;
    width: 100%;
    margin:0;
    padding: 0 30px;
  }

 /*  @media (max-width: 290px) {
    align-items: center;
    display: flex;
    flex-direction: column;
    width: 100%;
  } */
`;


