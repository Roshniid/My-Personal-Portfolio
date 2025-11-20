function Education() {


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

    return(

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
    );
    
}

export default Education;