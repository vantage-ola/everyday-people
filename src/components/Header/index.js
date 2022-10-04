import React from "react";
import { Wrapper, Content, EdgeImg, Edge, EdgeInfo, EdgeLower } from "./Header.styles";
import img from '../../img/image12.jpeg'

const Header = () => {
    return (
        <Wrapper>
            <Content>
                <EdgeImg src={img} />
                <Edge>
                    <EdgeInfo>3K+<EdgeLower>COLLECTION</EdgeLower></EdgeInfo>
                    <EdgeInfo>5+<EdgeLower>MEMBERS</EdgeLower></EdgeInfo>               
                </Edge>
            </Content>
        </Wrapper>
    )

}
export default Header;