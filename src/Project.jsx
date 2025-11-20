function Project() {
    const projects = [
    {
      title: "Job Application API",
      description: "A functional RESTful Spring API for applying and managing job applications. It handles all CRUD operations.",
      link: "https://github.com/Roshniid/Job-Application-API"
    },
    {
      title: "Implementation of SDON for Industrial Internet and Industry 4.0",
      description: "A testing environment to simulate SDON networks over internet connection.",
      link: "https://ieeexplore.ieee.org/document/11077006"
    },
    {
      title: "Hospital Management System",
      description: "A managament system that controls all patient appointments with concerned available doctors and keeps proper record of everything.",
      link: "https://github.com/Roshniid/Hospital-Management-System/"
    }
  ]
    return(
        <section id='projects' className='projects-section'>
        <h2>Projects</h2>
        <div className='projects-list'>
          {/* map iterates over array and renders = returns jsx object of projects... key acts as unique identifier for div to help react manage updates to the dom*/}
          {projects.map((project, index) =>(
            <div key={index} className='project-item'>
              <h3>{project.title}</h3>
              <h4>{project.description}</h4>
              <a 
                href={project.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className='button' /* Retains the button styling via CSS */
              >
                See more
              </a>
            </div>
          ))}
        </div>
      </section>
    );
}

export default Project;