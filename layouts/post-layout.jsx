import styled, { keyframes } from 'styled-components';
import { themeGet } from '@styled-system/theme-get';


export const PostLayout = styled.div`
  height:100%;
  width: 100%;
  color: white;
  display:flex;
  flex-direction: column;
  text-align:left;
  line-height: 1.7;
  background-color:#0F0E1E;
  max-width: 800px;
  padding: 0 25px;  
  img{ 
      display:flex; 
      align-items:center;
      justify-content:center;
      width: 100%;
      max-width:500px;
      padding:  30px;  
  }

  p{
    font-size: 18px;
  }

  @media (min-width: 300px) {
    width:100vw;
  }

  
`;


