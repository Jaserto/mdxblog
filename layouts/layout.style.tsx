import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

export const LayoutWrapper = styled.div`
font-family: 'Inter', sans-serif;
    width: 100%;
    height:100%;
    background-color:#12131E;
   /*  #12131E */
    display:flex;
    flex-direction: column;
    align-items: center;
   padding: 0 90px;
    .container{
     padding:30px;
    }

    .box-post{

      width:100%;
      margin-top:130px;
      color:white;
    }
    /* @media (max-width: 990px) {
    
      } */
`;
