import React from "react";
import { Content, Wrapper,TitleP, LearnMore } from "./Title.styles";

const Title = () => {
    return (
        <>

            <Content>
            3v3ryday
            p3opl3
            </Content>
        <Wrapper>
            <TitleP>Everyday people is an NFT project that tells the tale of everyday degens.</TitleP>
            <TitleP>It’s supply is capped at 3333 artworks.</TitleP>
            <TitleP>It is also brought to you by <LearnMore href="https://twitter.com/hangoutDao_" target="_blank" rel="noopener noreferrer" >Hangout DAO.</LearnMore></TitleP>
            <TitleP><LearnMore href="https://twitter.com/3V3RYDAYP3OPL3" target="_blank" rel="noopener noreferrer" >Learn More</LearnMore></TitleP>
        </Wrapper>
        </>

        
    )
}
export default Title