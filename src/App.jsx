import './App.css'
import Header from './components/Header';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import Project from './components/Project';
import Contact from './components/Contact';
import Footer from './components/Footer';


const name = "Roshni Das";
const profession = "Java Developer";
const profilePicUrl = "https://placehold.co/80x80/2c3e50/ffffff?text=RD";


function App() {
  
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
    // Adding the missing education entries from your screenshot:
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

      <Header/>
      <About/>
      <Education/>
      <Skills/>
      <Project/>
      <Contact/>
      <Footer/>

    </div>
  )
}

export default App