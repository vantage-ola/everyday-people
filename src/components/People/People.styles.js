import styled from "styled-components";

export const Wrapper = styled.div`
        @media (max-width: 500px){
            max-width: 350px;
            text-align: center;
            margin-left: 10px;

    }

`
export const Back = styled.img`
    height: 500px;
    top: -100px;
    left: 1040px;
    position: fixed;
    display: block;
`
export const PeopleImg = styled.img`
    vertical-align: middle;
    border-radius: 50%;
    height: 75px;
    width: 75px;
    position: relative;
    bottom: 480px;
    left: 730px;
    @media (max-width: 500px){
        height: 40px;
        width: 40px;
        bottom: 5px;
        left: 40px;
        display: inline-block;

    }
    &.one {
        bottom: 450px;
        left: 700px;

        @media (max-width: 500px){
        bottom: 5px;
        left: 0px;
    }

    }
    &.two {
        bottom: 470px;

        @media (max-width: 500px){
        bottom: 5px;
        left: 0px;
    }

    }
    &.three {
        bottom: 330px;
        left: 350px;

        @media (max-width: 500px){
        bottom: 5px;
        left: 0px;
    }
    }
    &.four {
        bottom: 300px;
        left: 380px;
        
        @media (max-width: 500px){
        bottom: 5px;
        left: 0px;
    }

    }
    &.five {
        bottom: 340px;
        left: 385px;

        @media (max-width: 500px){
            bottom: 0px;
            top: 18px;
            left: 60px;

        }


    }
    &.six {
        bottom: 200px;
        left: 55px;

        @media (max-width: 500px){
        bottom: 0px;
        top: 18px;
        left: 60px;
        text-align: left;
    }
    }
    &.seven {
        bottom: 170px;
        left: 76px;

        @media (max-width: 500px){
        bottom: 0px;
        top: 18px;
        left: 60px;
    }
    }
    &.eight {
        bottom: 220px;
        left: 68px;
        
        @media (max-width: 500px){
        bottom: 0px;
        top: 18px;
        left: 30px;
    }
    }
`
export const PeopleName = styled.a`
    &:hover {
    opacity: 0.5;
  }
    color: #fff;
    text-decoration: none;
    cursor: pointer;
    text-decoration: none;
    font-weight: 300;
    position: relative;
    right: 83px;
    bottom: 425px;
    left: 652px;

    @media (max-width: 500px){
        font-size: 11px;
        bottom: 0px;
        top: 25px;
        right: 0px;
        left: -12px;
    }
        
    &.one {
        bottom: 395px;
        left: 645px;
        
        @media (max-width: 500px){
        font-size: 11px;
        bottom: 0px;
        top: 25px;
        right: 0px;
        left: -35px;
    }
    }
    &.two {
        bottom: 417px;
        left: 675px;
        @media (max-width: 500px){
        font-size: 11px;
        bottom: 0px;
        top: 25px;
        right: 0px;
        left: -34px;
    }
    }
    &.three {
        bottom: 275px;
        left: 302px;

        @media (max-width: 500px){
        font-size: 11px;
        bottom: 0px;
        top: 25px;
        right: 0px;
        left: -30px;
    }
    }
    &.four {
        bottom: 245px;
        left: 325px;
        
        @media (max-width: 500px){
        font-size: 11px;
        bottom: 0px;
        top: 25px;
        right: 0px;
        left: -36px;
    }
    }
    &.five {
        bottom: 288px;
        left: 330px;
     @media (max-width: 500px){
        font-size: 11px;
        bottom: 0px;
        top: 48px;
        right: 0px;
        left: 25px;
    }
    }
    &.six {
        bottom: 145px;
        left: 1px;
        @media (max-width: 500px){
        font-size: 11px;
        bottom: 0px;
        top: 48px;
        right: 0px;
        left: 25px;
    }
    }
    &.seven {
        bottom: 117px;
        left: 1px;
        @media (max-width: 500px){
        font-size: 11px;
        bottom: 0px;
        top: 48px;
        right: 0px;
        left: 10px;
    }
    }
    &.eight {
        bottom: 167px;
        left: 1px;
        @media (max-width: 500px){
        font-size: 11px;
        bottom: 0px;
        top: 48px;
        right: 0px;
        left: -15px;
    }
    }

`