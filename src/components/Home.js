import Footer from "./Footer";
import Title from "./Title";
import Header from "./Header";
import People from "./People";
import Slideshow from "./SlideShow";

const Home = () =>  {
    return (
        <>
        <Header/>
        <Title/> 
        <People/>
        <section>
            <Slideshow/>
        </section>
        <Footer/>
        </>
    );
}

export default Home;