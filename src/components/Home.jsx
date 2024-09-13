import Contact from "./Contact";
import Disclaimer from "./Disclaimer";
import Services from "./Services";



const Home = () => {

    return (
        <div className="home">
            <Services />
            <Contact />
            <Disclaimer />
        </div>
    );
}

export default Home;