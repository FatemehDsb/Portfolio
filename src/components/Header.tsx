import { Box, IconButton } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import HeaderButton from "./HeaderButton";
import { Grid } from "@mui/material";
import { border } from "@mui/system";

function Header() {
  const elements = [
    // { label: "ABOUT ME", href: "address" },
    // { label: "PROJECTS", href: "address" },
    {
      label: "RESUME",
      href: "/Portfolio/pdf/Fatemeh_Dastgheib_Resume (2).pdf",
    },
  ];

  return (
    <>
      <Box
        display={"flex"}
        flexWrap="wrap"
        justifyContent={"space-between"}
        margin={"10px"}
        // border={"1px solid black"}
        flexDirection={"row"}
      >
        <Grid sx={{ display: "flex" }}>
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
        </Grid>

        <Grid container>
          {elements.map((element) => (
            <Grid item xs={12} sm={4} key={element.label}>
              <HeaderButton label={element.label} href={element.href} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
}
export default Header;
