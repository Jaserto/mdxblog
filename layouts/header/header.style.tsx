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

  @media (max-width: 290px) {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
`;


