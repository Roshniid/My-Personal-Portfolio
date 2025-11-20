// This is what should be in your Header.jsx file:

function Header() {

    const name = "Roshni Das";
    const profession = "Java Developer";
    const profilePicUrl = "https://placehold.co/80x80/2c3e50/ffffff?text=RD";


    return(
        // The JSX comment syntax was also wrong here, use {/**/}
        /* Header -> JSX starts from below */
        <header className='header'>
            <div className='header-info'>
                {/* profilePicUrl is now coming from the prop arguments */}
                <img src={profilePicUrl} alt="Roshni Das Profile" className='profile-pic'/>
                <div className='title-group'> 
                    <h1>{name}</h1>
                    <span className='profession-title'>{profession}</span>
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
    );
    
}

export default Header;