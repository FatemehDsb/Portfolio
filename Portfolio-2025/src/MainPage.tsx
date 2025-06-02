import Header from "./components/Header";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Footer from "./components/Footer";
import ProfileIntro from "./components/ProfileIntro";
import ResumeButton from "./components/ResumeButton";

function MainPage() {
  return (
    <>
      <h1>MainPage</h1>
      <Header />
      <ProfileIntro />
      <Skills />
      <ResumeButton />
      <Projects />
      <Footer />
    </>
  );
}
export default MainPage;
