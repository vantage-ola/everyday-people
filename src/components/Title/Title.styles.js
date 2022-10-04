import styled from "styled-components";


export const Content = styled.h1`
    font-family: 'Footlight MT Pro', sans-serif;
    font-style: normal;
    font-size: 120px;
    font-weight: 300;
    width: 465px;
    line-height: 110px;
    margin-left: 140px;

    @media (max-width: 500px){
        font-size: 70px;
        line-height: 70px;
        margin-left: 80px;
        width: 0px;

    }

`
export const Wrapper = styled.div`
    position: relative;
    bottom: 40px;
    
    @media (max-width: 500px){
        bottom: 15px;
        right: 25px;
    }
`
export const TitleP = styled.p`
    font-size: 14px;
    margin-left: 150px;
    line-height: 12px;

    @media (max-width: 500px){
        font-size: 10px;

    }
`
export const LearnMore = styled.a`
    color: #FF931E;
    text-decoration: none;
    font-weight: bold;
    cursor: pointer;        
    &:hover {
    opacity: 0.5;
  }


`