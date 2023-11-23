import Header from "./Header/Header";
import AboutUs from "./AboutUs/AboutUs";
import SpecialMenu from "./Menu/SpecialMenu";
import Chef from "./Chef/Chef";
import Intro from "./Intro/Intro";
import Laurels from "./Laurels/Laurels";
import Gallery from "./Gallery/Gallery";

const HomePage = () => {
  return (
    <div>
      <Header />
      <AboutUs />
      <SpecialMenu />
      <Chef />
      <Intro />
      <Laurels />
      <Gallery />
    </div>
  );
};

export default HomePage;
