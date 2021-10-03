import styled, { keyframes } from 'styled-components';
import { themeGet } from '@styled-system/theme-get';


export const PostLayout = styled.div`
  height:100%;
  width: 100%;
  color: white;
  display:flex;
  flex-direction: column;
  text-align:left;
  align-items:center;
  line-height: 1.7;
  max-width: 800px;
  padding: 0 25px;  
  img{ 
      display:flex; 
      flex:1;
      border-radius: 33px;
     margin:auto;
     max-width:400px;
      padding:30px;  
  }
  .cabecera{
    width:100%;
    display:flex;
    justify-content:center;
    flex-direction:column;
    text-align:left;
  }
  .div3{
    display:flex;
    flex-direction: column;
  }
  .tags{
    display: flex;
    flex-direction: row;
    align-items: center;
    }
  .tag2{
    color:#444444;
    border-radius:5px;
    padding:1px 7px;
    font-size:12px;
    background-color:#C9FFDC;
    margin: 0 7px;
  }
  .tag1{
      background-color:#900C3F;
      color:white;
      border-radius:5px;
      padding:2px 7px;
      font-size:12px;
      margin: 0px 0px 0px 10px;
  }

  h1{
    font-size: 40px;
  }
  p{
    font-size:16px;
    font-weight: 400;
    line-height:1.75;
    color: #D8D8D8;
    margin-bottom:20px;
  }
  
  @media (max-width: 830px) {
    padding: 0 0px;  
article{
  width: 100%;
  margin:0;
}
h1{
  font-size: 20px;
  width: 100%;
}
.cabecera{
  width: 100%;
}
.tags{
  display:flex;
  flex-direction:row;
  width: 100%;
  span{
    font-size:11px;
  }
}
.tag1{
  padding:1px 3px;
  margin:0
}
.tag2{
  padding:1px 3px;
  margin: 0 3px;
}
img{
  width: 100%;
}
   

  }
  
`;


