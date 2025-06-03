import {
  Container,
  Typography,
  Card,
  CardMedia,
  CardContent,
  Link,
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
      image: "/optimate.png",
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
      image: "/images/Figma-website.png",
      description: "/images/Student project made with FIGMA",
      url: "https://www.figma.com/proto/p7vmDvTi46pPIe3EIfLfVb/Fatemeh-Dastgheib-grafik-Fend23?...",
    },
  ];

  return (
    <Container sx={{ py: 5 }}>
      <Typography variant="h4" gutterBottom>
        Featured Projects
      </Typography>

      <Grid container spacing={4}>
        {projectData.map((project, index) => (
          <Grid item xs={4} md={4} key={index}>
            <Link
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              underline="none"
            >
              <Card sx={{ height: "100%" }}>
                <CardMedia
                  component="img"
                  image={project.image}
                  alt={project.title}
                />
                <CardContent>
                  <Typography variant="body1">{project.description}</Typography>
                </CardContent>
              </Card>
            </Link>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Projects;
