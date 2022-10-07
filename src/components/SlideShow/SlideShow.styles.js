import styled from "styled-components";

export const Wrapper = styled.div`

  margin: 5px;
  border: 10px solid  #FF931E;
  float: left;
  width: 250px;
  height: 250px;
  
`
export const Header = styled.h2`
    font-style: normal;
    font-weight: 50;
    font-size: 55px;
    margin: 15px;

        @media (max-width: 500px){
            margin-top: 60px;
            margin-bottom: 10px;
            margin-left: 0px;
            margin-right: 0px;
            font-size: 35px;

        }   
`

export const Section = styled.div`
justify-content: center;
left: 50px;
position: relative;
        @media (max-width: 500px){
            position: absolute;
            left: 48px;
            align-items: center;

        }   

`
export const Content = styled.img`
  width: 100%;
  height: auto;

`
export const SectorLine = styled.img`
    position: relative;
    bottom: 300px;
    left: 23px;
    width: 100%;
`