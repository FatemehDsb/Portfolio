import {
  Typography,
  Card,
  CardMedia,
  CardContent,
  Link,
  Box,
} from "@mui/material";

import Grid from "@mui/material/Grid";

function Projects() {
  const projectData = [
    {
      title: "Company Website",
      image: "/images/company-website.png",
      description: "Student project made with HTML, SCSS",
      url: "https://fatemehdsb.github.io/Company-Website/",
    },
    {
      title: "Productivity Assistant",
      image: "/images/optimate.png",
      description: "Student project made with HTML, SCSS, JAVASCRIPT",
      url: "https://fatemehdsb.github.io/NewProductivityAssistant/",
    },
    {
      title: "Quiz",
      image: "/images/Quiz.png",
      description: "Student project made with HTML, SCSS, JAVASCRIPT",
      url: "https://fatemehdsb.github.io/Quiz/",
    },
    {
      title: "Figma Project",
      image: "/images/Figma2.png",
      description: "Student project made with FIGMA",
      url: "https://www.figma.com/proto/p7vmDvTi46pPIe3EIfLfVb/Fatemeh-Dastgheib-grafik-Fend23?...",
    },
  ];

  return (
    <>
      <Box mt={4}>
        <Typography variant="h6" gutterBottom>
          PROJECTS
        </Typography>

        <Grid container spacing={4}>
          {projectData.map((project, index) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
              <Link
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                underline="none"
              >
                <Card sx={{ maxWidth: 200, height: 300 }}>
                  <CardMedia
                    component="img"
                    image={project.image}
                    alt={project.title}
                  />
                  <CardContent>
                    <Typography variant="body1">
                      {project.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Link>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
}

export default Projects;
