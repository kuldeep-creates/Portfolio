import React from 'react';
import './Projects.css';
import attendenceSystem from '../assets/Attandence.jpeg';
import peerPlaces from '../assets/PeerPlaces.png';
import textify from '../assets/Textify.jpeg';

const data = [
  {
    id: 1,
    title: 'Attendence System',
    description: 'A smart system to efficiently track and manage attendance of students or employees.',
    image: attendenceSystem,
    github: 'https://github.com/kuldeep-creates/ATTENDANCE-SYSTEM'
  },
  {
    id: 2,
    title: 'PeerPlaces',
    description: 'PeerPlacers is a platform to connect with peers, collaborate on projects, showcase skills, and access career opportunities.',
    image: peerPlaces,
    github: 'https://github.com/kuldeep-creates/PeerPlacers'
  },
  {
    id: 3,
    title: 'Textify',
    image: textify,
    description: 'Textify is a simple and efficient tool to Text case converter.',
    github: 'https://github.com/kuldeep-creates/Textify'
  }
];

const ProjectsPage = () => {
  return (
    <main id="projects" className="projects-page">
      <h2>MY RECENT WORK</h2>

      <div className="container portfolio__container">
        {data.map(({ id, title, description, image, github }) => (
          <article key={id} className="portfolio__item">
            <div className="portfolio__item-image">
              <img src={image} alt={`Preview of ${title}`} />
            </div>

            <div className="portfolio__item-content">
              <h3>{title}</h3>
              <p>{description}</p>

              <div className="portfolio__item-cta">
                <a
                  href={github}
                  className="btn btn-primary"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
};

export default ProjectsPage;
