import styled from "styled-components";

export const Wrapper = styled.footer`
    grid-column: 2 / span 12;
    min-height: 3rem;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    bottom: 50px;

    @media (max-width: 730px){
        grid-column: 2 / span 6;
        font-size: small;

        padding-top: 60px;
        bottom: 0px;
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