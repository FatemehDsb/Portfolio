import { Box, List, ListItem, ListItemText, Typography } from "@mui/material";

function Skills() {
  return (
    <>
      <Box>
        <Typography>My Skills</Typography>
        <div>
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
          </List>
          <ul>
            <li>Back-End:</li>
            <li>API Management, Strapi CMS</li>

            <li>Databases:</li>
            <li>PostgreSQL, pgAdmin</li>

            <li>Tools:</li>
            <li>Docker, Git/GitHub</li>

            <li>Design:</li>
            <li>Figma, InDesign, Photoshop</li>
          </ul>
          <br />
          <img className="skills-img" src="images/Frame 26.png" />
        </div>
      </Box>
    </>
  );
}
export default Skills;
