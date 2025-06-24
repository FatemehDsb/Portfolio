import { Box, Typography } from "@mui/material";

function ProfileIntro() {
  return (
    <>
      <Box
        mt={4}
        display={"flex"}
        sx={{ gap: 5 }}
        flexDirection={{ xs: "column", md: "row" }}
      >
        <Box
          maxWidth={300}
          component="img"
          src="images/cartoonMesvart.jpg"
          sx={{
            // minWidth: "200px",
            display: "block",
            mx: "auto",
          }}
        ></Box>
        <Box>
          <Box marginTop={"30px"}>
            <Typography variant="h4">FATEMEH DASTGHEIB</Typography>
            <Typography variant="h5">Frontend Developer</Typography>
          </Box>
          <Box marginTop={"20px"}>
            <Typography variant="h6">ABOUT ME: </Typography>
            <Typography variant="body2">
              I'm a recently graduated front-end developer from Nackademin with
              a background in architecture and a Master’s degree in lighting
              design from KTH. I completed a 6-month internship at STIM, where I
              worked on internal systems and explored micro frontend
              architecture. I’m passionate about combining design and tech to
              create user-friendly digital experiences.
            </Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
}
export default ProfileIntro;
