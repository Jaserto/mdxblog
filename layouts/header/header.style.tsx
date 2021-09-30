import styled, { keyframes } from 'styled-components';
import { themeGet } from '@styled-system/theme-get';


export const HeaderWrapper = styled.header`
border: 1px solid red;
  display: flex;
  font-family: 'Inter', sans-serif;
  font-size: 18px;
  align-items: center;
  height: 130px;
  max-width:800px;
  color: white;
  background-color:#12131E;
  @media (max-width: 400px) {
    width:100%;
    border: 1px solid green;
  }

  
`;


