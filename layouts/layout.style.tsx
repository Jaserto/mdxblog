import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

export const LayoutWrapper = styled.div`
    width: 100vw;
    height:100vh;
    background-color:#12131E;
  display:flex;
  flex-direction: column;
  align-items: center;
    padding:0 80px;
    .container{
     padding:30px;
    }

    .box-post{
      width:40%;
      margin:150px 0 0 150px;
      color:white;
    }
    /* @media (max-width: 990px) {
    
      } */
`;
