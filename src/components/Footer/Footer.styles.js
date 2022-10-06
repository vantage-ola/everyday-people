import styled from "styled-components";

export const Wrapper = styled.footer`
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  color: white;
  text-align: center;
 
  @media (max-width: 730px){
    font-size: small;
        
    }

`
export const Content = styled.a`
    color: #FF931E;
    text-decoration: none;
    font-weight: bold;
    cursor: pointer;
    
    &:hover {
    opacity: 0.5;
  }

  @media (max-width: 730px){
    font-size: small;
        
    }

`