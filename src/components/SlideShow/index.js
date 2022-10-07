import React from "react";
import { Wrapper, SectorLine, Content, Section, Header } from "./SlideShow.styles";
import line_vector from "../../img/design/line_vector.png";
import img0 from '../../img/image0.jpeg';
import img1 from '../../img/image1.jpeg';
import img2 from '../../img/image2.jpeg';
import img3 from '../../img/image3.jpeg';
import img4 from '../../img/image4.jpeg';
import img5 from '../../img/image5.jpeg';
import img6 from '../../img/image6.jpeg';
import img7 from '../../img/image7.jpeg';
import img8 from '../../img/image8.jpeg';
import img9 from '../../img/image9.jpeg';
import img10 from '../../img/image10.jpeg';
import img11 from '../../img/image11.jpeg';

const Slideshow = () => {
    return(
        <Section>
            <Header>
                Gallery
            </Header>
    <Wrapper class="gallery">
        <Content src={img0} />
    </Wrapper>

<Wrapper class="gallery">
    <Content src={img1}  />
</Wrapper>

<Wrapper class="gallery">
    <Content src={img2}/>
</Wrapper>

<Wrapper class="gallery">
    <Content src={img3}/>
</Wrapper>

<Wrapper class="gallery">
    <Content src={img4}/>
</Wrapper>



<Wrapper class="gallery">
    <Content src={img6}/>
</Wrapper>

<Wrapper class="gallery">
    <Content src={img7}/>
</Wrapper>

<Wrapper class="gallery">
    <Content src={img8}/>
</Wrapper>

<Wrapper class="gallery">
    <Content src={img9}/>
</Wrapper>

<Wrapper class="gallery">
    <Content src={img10}/>
</Wrapper>



    </Section>
    )
}

export default Slideshow