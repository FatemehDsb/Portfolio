import { Box, Container, Typography } from "@mui/material";

function ProfileIntro() {
  return (
    <>
      <Container>
        <Box>
          <Typography variant="h3">Hej</Typography>
          <Typography variant="h4">My name is Fatemeh</Typography>
          <Typography variant="body1">
            I am currently a front-end development student at Nackademin. With a
            background in architecture and a Master's degree in lighting design
            from KTH, as well as experience as a consultant in the lighting
            industry, I have decided to pursue my newfound passion for front-end
            development.
          </Typography>
        </Box>
      </Container>
    </>
  );
}
export default ProfileIntro;
