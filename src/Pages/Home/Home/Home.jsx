import Banner from "../Banner/Banner";
import Services from "../My_Services/Services";
import FeaturedProduct from "./FeaturedProduct/FeaturedProduct";


const Home = () => {
    return (
        <div>
            <Banner />
            <Services />
            <FeaturedProduct />
        </div>
    );
};

export default Home;