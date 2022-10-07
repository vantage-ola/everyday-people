import React from "react";
import { Wrapper, Content, EdgeImg, Edge, EdgeInfo, EdgeLower, Line } from "./Header.styles";
import img from '../../img/image12.jpeg'
import line_vector from '../../img/design/line_vector_1.png'
const Header = () => {
    return (
        <Wrapper>
            <Line src={line_vector}/>
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