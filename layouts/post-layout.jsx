import styled, { keyframes } from 'styled-components';
import { themeGet } from '@styled-system/theme-get';


export const PostLayout = styled.div`
  
 height:100%;
  color: white;
 
  display:flex;
  flex-direction: column;
  text-align:left;
  line-height: 1.7;
  background-color:#12131E;
  max-width: 800px;
  img{
      max-width:450px;
  }
/*   padding: 0 90px; */
  p{
    font-size: 18px;
  }

  @media (min-width: 300px) {
    width:100vw;
  }

  
`;


