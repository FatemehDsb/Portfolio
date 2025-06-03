import Header from "./components/Header";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Footer from "./components/Footer";
import ProfileIntro from "./components/ProfileIntro";
import ResumeButton from "./components/ResumeButton";
import Container from "@mui/material/Container";

function MainPage() {
  return (
    <>
      <Container maxWidth="md">
        <Header />
        <ProfileIntro />
        <Skills />
        <ResumeButton />
        <Projects />
        <Footer />
      </Container>
    </>
  );
}
export default MainPage;
