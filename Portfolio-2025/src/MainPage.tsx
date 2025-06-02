import Header from "./components/Header";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Footer from "./components/Footer";
import ProfileIntro from "./components/ProfileIntro";
import ResumeButton from "./components/ResumeButton";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

function MainPage() {
  return (
    <>
      <Container>
        <Typography variant="h1">MainPage</Typography>

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
