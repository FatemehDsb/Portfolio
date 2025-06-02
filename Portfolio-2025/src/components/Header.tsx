import { Box, Container, IconButton } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
function Header() {
  return (
    <>
      <Box>
        <Container>
          <IconButton
            component="a"
            href="https://github.com/FatemehDsb"
            target="_blank"
            aria-label="GitHub"
            rel="noopener noreferrer"
          >
            <GitHubIcon />
          </IconButton>

          <IconButton
            component="a"
            href="https://www.linkedin.com/in/fatemeh-dastgheib-812798157/"
            target="_blank"
            aria-label="Linkedin"
          >
            <LinkedInIcon />
          </IconButton>
        </Container>
      </Box>
    </>
  );
}
export default Header;
