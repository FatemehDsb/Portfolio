import {
  Box,
  Container,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";

function Skills() {
  return (
    <>
      <Container>
        <Box marginTop={"20px"}>
          <Typography variant="h5">My Skills</Typography>
          <List>
            <ListItem>
              <ListItemText
                primary="Front-End:"
                secondary="HTML, CSS/SCSS, JavaScript,
              React, Redux, Next.js, AJAX"
              ></ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText
                primary="Back-End:"
                secondary="API Management, Strapi CMS"
              ></ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText
                primary="Databases:"
                secondary="PostgreSQL, pgAdmin"
              ></ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText
                primary="Tools:"
                secondary="Docker, Git/GitHub"
              ></ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText
                primary="Design:"
                secondary="Figma, InDesign, Photoshop"
              ></ListItemText>
            </ListItem>
          </List>
        </Box>
      </Container>
    </>
  );
}
export default Skills;
