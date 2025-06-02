function Projects() {
  return (
    <>
      <section className="projects-section">
        <h2 className="secondary-heading">Featured Projects</h2>

        <div id="divider"></div>

        <div className="project project box">
          <a href="https://fatemehdsb.github.io/Company-Website/">
            <img
              src="images/company-website.png"
              alt=""
              className="project-image"
            />
            <label>Student project made with HTML, SCSS</label>
          </a>
        </div>

        <div className="project">
          <a href="https://fatemehdsb.github.io/NewProductivityAssistant/">
            <img
              src="optimate.png"
              alt=""
              className="project-image_productivity"
            />
            <label>Student project made with HTML, SCSS, JAVASCRIPT</label>
          </a>
        </div>

        <div className="project">
          <a href="https://fatemehdsb.github.io/Quiz/">
            <img src="images/Quiz.png" alt="" className="project-image" />
            <label>Student project made with HTML, SCSS, JAVASCRIPT</label>
          </a>
        </div>
        <div className="project">
          <a href="https://www.figma.com/proto/p7vmDvTi46pPIe3EIfLfVb/Fatemeh-Dastgheib-grafik-Fend23?page-id=0%3A1&type=design&node-id=24-545&viewport=532%2C106%2C0.02&t=zhfySCJM0Ez1ff0g-1&scaling=min-zoom&starting-point-node-id=24%3A545&mode=design">
            <img
              src="images/Figma-website.png"
              alt=""
              className="project-image"
            />
            <label>Student project made with FIGMA</label>
          </a>
        </div>
      </section>
      ;
    </>
  );
}
export default Projects;
