import {
  Grid,
  Box,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";

function Skills() {
  const skills = [
    {
      primary: "Frontendutveckling:",
      secondary: "HTML, CSS, JavaScript, TypeScript, React, Next.js",
    },
    {
      primary: "UI/Designramverk:",
      secondary: "Material-UI, Bootstrap, Tailwind CSS",
    },
    {
      primary: "State & Data Management:",
      secondary: "Redux Toolkit, TanStack Query, Strapi CMS",
    },
    {
      primary: "Testing & Build Tools:",
      secondary: "Vite, Docker",
    },
    {
      primary: "Databaser:",
      secondary: "PostgreSQL, PgAdmin",
    },
    {
      primary: "Versionshantering & Agilt arbete:",
      secondary: "Git, GitHub, Jira (Agile/Scrum)",
    },
    {
      primary: "Design & Prototyping:",
      secondary: "Figma, Adobe InDesign, Photoshop",
    },
    {
      primary: "Teknisk ritning & modellering:",
      secondary: "AutoCAD, Revit",
    },
    {
      primary: "Övrigt & Kompetenser:",
      secondary: "Problemlösning, Stark designkänsla, Samarbetsvillig",
    },
  ];

  return (
    <>
      <Box mt={4}>
        <Typography variant="h6">SKILLS</Typography>
        <Grid container spacing={1}>
          {skills.map((element) => (
            <Grid xs={12} sm={6} sx={{ border: "1px solid black" }}>
              <List disablePadding dense={true}>
                <ListItem key={element.primary} sx={{ py: 0.1 }}>
                  <ListItemText
                    primary={element.primary}
                    secondary={element.secondary}
                  ></ListItemText>
                </ListItem>
              </List>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
}
export default Skills;
