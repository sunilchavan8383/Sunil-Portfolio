import React from "react";
import "./Projectsandexperience.css";
import { Link } from "react-router-dom";
import img1 from './projects.webp';
import img2 from './experience.jpg';
import img3 from './cv.jpg';

function Projectsandexperience() {



  const services = [
    {
      
        image: img1,
        title: "Projects",
        link: '/projects'

    },
    {
        image: img2,
        title: "Experience",
        link: '/experience'

    },
    {
       
        image: img3,
        title: "Download CV",
        link: '/cv'

    },


]

  return (
    <div className="Container3">
  
      <div className='pText3'>I have worked on a variety of projects covering different aspects of technology and problem-solving. I also completed internships at two companies, gaining valuable hands-on experience. If you'd like to see more examples of my work beyond what's showcased here, feel free to reach out!</div>
      <div className='pecv'>
      <div className="blog-card-grid">
        {services.map((services) => (
          <div key={services.id} className="blog-article-card">
                  <Link to={services.link}>
                  <img src={services.image} alt="Blog Post" className="blog-thumbnail" />
                  </Link>
            
            <div className="blog-details">
              <h3 className="blog-heading">{services.title}</h3>
          
            </div>
      
          </div>
        ))}
      </div>
    
 
    </div>
 </div>
  );
}

export default Projectsandexperience;







{/* <Link to='/Projects' className='projects'>Projects</Link>
<Link to='/experience' className='experience'>Experience</Link>

<div className='cv'>Download CV</div> */}