import { Box, Typography } from "@mui/material";

function ProfileIntro() {
  return (
    <>
      <Box mt={4} display={"flex"} flexDirection={{ xs: "column", md: "row" }}>
        <Box
          component="img"
          sx={{
            height: "300px",
            width: "300px",
            borderColor: "black",
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
              A recently graduated front-end developer from Nackademin. With a
              background in architecture and a Master’s degree in lighting
              design from KTH, along with experience as a consultant in the
              lighting industry, I’ve transitioned into tech to pursue my
              passion for front-end development and creating user-centered
              digital experiences.
            </Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
}
export default ProfileIntro;
