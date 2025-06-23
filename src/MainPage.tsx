import Header from "./components/Header";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Footer from "./components/Footer";
import ProfileIntro from "./components/ProfileIntro";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";

function MainPage() {
  return (
    <Container maxWidth="md">
      console.log("App is rendering");
      <Header />
      <Divider sx={{ mt: 5 }} />
      <ProfileIntro />
      <Divider sx={{ mt: 5 }} />
      <Skills />
      <Divider sx={{ mt: 5 }} />
      <Projects />
      <Footer />
    </Container>
  );
}
export default MainPage;
