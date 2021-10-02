import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

export const LayoutWrapper = styled.div`
    font-family: 'Inter', sans-serif;
    width: 100%; 
    height:100%;
    background-color:#0F0E1E;
   /*  #12131E */
    display:flex;
    flex-direction: column;
    align-items: center;
    padding: 0 90px;
    @media (max-width: 830px) {

      margin:0;
      padding: 0 30px;
    }
   
   
`;
