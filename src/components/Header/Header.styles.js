import styled from "styled-components";

export const Wrapper = styled.div`

    flex-wrap: wrap;
    position: relative;
    padding: 0rem 2rem;
    top: 0;
    left: 0;
    right: 0;
`
export const Content = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 1660px;
    padding: 10px 0;
    margin: 0 auto;
`
export const Line = styled.img`
position: absolute;
left: 1px;
bottom: -35px;
@media screen and (max-width: 500px) {
left: -30px;
bottom: -25px;
}

`
export const EdgeImg = styled.img`
    width: 91.33px;
    left: 27px;
    top: 25px;
    border-radius: 50%;

    @media screen and (max-width: 500px) {
    width: 50px;
  }
    
`
export const EdgeInfo = styled.a`
    padding: 0 1.3rem;
    font-size: 32px;
    font-weight: bold;
    position: relative;
    right: 290px;
    bottom: 20px;
    
    @media screen and (max-width: 500px) {
        font-size: 20px;
        padding-left: 60px;
        width: 20px;
        right: 20px;
        bottom: 10px;
  }
`
export const EdgeLower = styled.a`

    font-weight: 700;
    font-size: 14px;
    position: relative;
    top: 20px;
    right: 65px;

    @media screen and (max-width: 500px) {
        font-size: 10px;
        right: 40px;
    }
`
export const Edge = styled.div`

  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
`;