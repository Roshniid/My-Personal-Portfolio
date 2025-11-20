import './App.css'
const profilePicUrl = "https://placehold.co/80x80/2c3e50/ffffff?text=RD"; 

function App() {
  const name = "Roshni Das";
  const profession = "Java Developer";
  
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

  const skills = [
  { name: 'Java', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
  { name: 'Spring Boot', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg' },
  { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
  { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
  { name: 'PL/SQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oracle/oracle-original.svg' },
];

const education = [
  { 
      title: 'Bachelor of Engineering', 
      institution: 'Meghnad Saha Insitute of Technology', 
      year: '2021 - 2025', 
      icon: 'https://img.icons8.com/color/48/graduation-cap.png'
    },
    { 
      title: 'Class XII', 
      institution: 'Vivekananda Mission School', 
      year: '2020-2021', 
      icon: 'https://img.icons8.com/color/48/school.png'
    },
    { 
      title: 'Class X', 
      institution: 'Vivekananda Mission School', 
      year: '2018-2019', 
      icon: 'https://img.icons8.com/color/48/book.png'
    },
];

  

  return (
    <div className="App">
      {/* Header */}
      <header className='header'>
        <div className='header-info'>
          {/* Image source now uses the placeholder URL */}
          <img src={profilePicUrl} alt="Roshni Das Profile" className='profile-pic'/>
          <div className='title-group'> {/* NEW: Wrapper for name and profession */}
        <h1>{name}</h1>
        <span className='profession-title'>{profession}</span> {/* CHANGED: p to span and added class */}
          </div>
        </div>
        
        <nav>
          <a href='#about'>About</a>
          <a href='#education'>Education</a>
          <a href='#skills'>Skills</a>
          <a href='#projects'>Projects</a>
          <a href='#contact'>Contact</a>
        </nav>
      </header>

      {/* About */}
      <section id='about' className='about-section'>
        <h2>About Me</h2>
        <p>Hello! I am {name}, really passionate to become a {profession}. I’m working towards gaining the full-stack knowledge and become a good software developer... do something that I love and can keep on doing willingly. I’m 23 years old, born and brought up in Kolkata, West Bengal. People who know me would describe me as resilient, dependable and resourceful. I always like to keep this learning mindset, increasing my knowledge horizon and wanting to make myself better each day. In my free time I indulge in my hobbies of reading fictional books, or writing some stuff of my own or extensively listening of music.</p>
      </section>

      {/* Education */}
      <section id='education' className='education-section'>
        <h2>Education</h2>
        <div className='education-grid'>
          {education.map((item, index) => (
            <div key={index} className='education-item'>
              <img src={item.icon} alt={item.title} className='education-icon-round' /> 
              <div className='education-details'>
                <h3>{item.title}</h3>
                <p className='institution'>{item.institution}</p>
                <p className='year'>{item.year}</p>
              </div>
            </div>
          ))}
        </div>
      </section>


      {/* Skills */}
      <section id='skills' className='skills-section'>
        <h2>Skills</h2>
        <div className='skills-grid'>
          {skills.map((skill, index) => (
            <div key={index} className='skill-item'>
              <img src={skill.icon} alt={skill.name} className='skill-icon' />
              <p>{skill.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Project */}
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
                className='button'
              >
                See more
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id='contact' className='contact-section'>
        <h2>Contact Me</h2>
        <p>If you would like to get in touch, feel free to email me at <a href=" mailto:das.roshni1707@gmail.com">roshnidas@gmail.com</a>
        </p>
      </section>

      {/* Footer */}
      <footer className='footer'>
        <p>© 2025. All Rights Reserved</p>
      </footer>

    </div>
  )
}

export default App
