import { Box, IconButton } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import HeaderButton from "./HeaderButton";
import Grid from "@mui/material/Grid";

function Header() {
  const elements = [
    { label: "ABOUT ME", href: "address" },
    { label: "PROJECTS", href: "address" },
    { label: "RESUME", href: "address" },
  ];

  return (
    <>
      <Box
        display={"flex"}
        flexWrap="wrap"
        justifyContent={"space-between"}
        margin={"10px"}
      >
        <Box>
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
        </Box>

        <Grid container spacing={2}>
          {elements.map((element) => (
            <Grid xs={12} sm={4} key={element.label}>
              <HeaderButton label={element.label} href={element.href} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
}
export default Header;
