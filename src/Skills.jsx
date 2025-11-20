function Skills() {

    const skills = [
  { name: 'Java', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
  { name: 'Spring Boot', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg' },
  { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
  { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
  { name: 'PL/SQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oracle/oracle-original.svg' },
];

    return(
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
    );
    
}

export default Skills;