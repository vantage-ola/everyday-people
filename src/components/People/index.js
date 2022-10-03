import React from "react";
import { Wrapper, PeopleImg, PeopleName } from "./People.styles";
import img0 from '../../img/image0.jpeg'
import img1 from '../../img/image1.jpeg'
import img3 from '../../img/image3.jpeg'
import img4 from '../../img/image4.jpeg'
import img5 from '../../img/image5.jpeg'
import img6 from '../../img/image6.jpeg'
import img7 from '../../img/image7.jpeg'
import img8 from '../../img/image8.jpeg'
import img10 from '../../img/image9.jpeg'

const People = () => {
    return (
        <Wrapper>

            <PeopleImg src={img1}/>
            <PeopleName>RULEDOUT_</PeopleName>


            <PeopleImg className="one"src={img3}/>
            <PeopleName className="one">FEYI</PeopleName>



            <PeopleImg className="two" src={img5}/>
            <PeopleName className="two">OLA</PeopleName>



            <PeopleImg className="three"src={img0}/>
            <PeopleName className="three">LIT</PeopleName>



            <PeopleImg className="four"src={img4}/>
            <PeopleName  className="four">MEJI</PeopleName> 


            <PeopleImg className="five" src={img10}/>
            <PeopleName className="five">LALA</PeopleName>

            <PeopleImg className="six" src={img6}/>
            <PeopleName className="six">IVAN</PeopleName>

            <PeopleImg  className="seven"src={img7}/>
            <PeopleName className="seven">TOLULOPE</PeopleName>

            <PeopleImg className="eight" src={img8}/>
            <PeopleName className="eight" >UNUSUAL</PeopleName> 

        </Wrapper>

    )
}

export default People;