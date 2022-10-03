import styled from "styled-components";

export const Wrapper = styled.footer`
    grid-column: 2 / span 12;
    min-height: 3rem;
    display: flex;
    justify-content: center;
    align-items: flex-start;

`
export const Content = styled.a`
    color: #FF931E;
    text-decoration: none;
    font-weight: bold;
    cursor: pointer;
    
    &:hover {
    opacity: 0.5;
  }

`