import Price from "../Pricing/Price";
import Banner from "./Banner/Banner";
import Hero from "./Hero/Hero";
import Types from "./Hero/Types";
import HowItWorks from "./HowItWorks/HowItWorks";
import Review from "./Review/Review";
import Roadmap from "./Roadmap/Roadmap";
import SampleBooks from "./SampleBooks/SampleBooks";

 
const Homepage = () => {
    return (
        <section className="mt-20 c-container">
           <Banner></Banner>
           <Hero/>
           <Types/>
           <HowItWorks/>
           <SampleBooks/>
           <Price/>
           <Roadmap/>
           <Review/>
        </section>
    );
};

export default Homepage;