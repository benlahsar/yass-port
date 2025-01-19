import AboutMe from "./components/AboutMe";
import Footer from "./components/Footer";
import FreelanceSection from "./components/Freelance";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import SubFooter from "./components/SubFooter";
import Welcome from "./components/Welcome";
import Works from "./components/Works";

function App() {
  return (
    <>
      <Navbar />
      <Welcome />
      <AboutMe />
      <Works />
      <Skills />
      <FreelanceSection />
      <Footer />
      <SubFooter />
    </>
  );
}

export default App;
