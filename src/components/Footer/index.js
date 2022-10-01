import React from "react";
import { Wrapper, Content } from "./Footer.styles";

const year = new Date().getFullYear()

export const Footer = () => {
    return <Wrapper><p>&copy;{year} Everyday People |  
      fan art by <Content href="https://twitter.com/opening_petals" target="_blank" rel="noopener noreferrer" >dami</Content> | made with <span >&#9829;</span> by <Content href="https://github.com/vantage-ola" target="_blank"  rel="noopener noreferrer" >ola</Content>
    </p></Wrapper>
}
