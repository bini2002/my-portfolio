import React from 'react';

const ProjectsSection = () => {
  const projects = [
    {
      title: 'Project 1',
      description: 'Description of project 1...',
      imageUrl: '/project1.jpg', // Replace with the actual image URL
      projectUrl: 'https://project1.example.com', // Replace with the project URL
    },
    {
      title: 'Project 2',
      description: 'Description of project 2...',
      imageUrl: '/project2.jpg', // Replace with the actual image URL
      projectUrl: 'https://project2.example.com', // Replace with the project URL
    },
    // Add more projects similarly
  ];

  return (
    <section id="projects" className="bg-gray-100 py-16 lg:py-20 px-8 lg:px-16">
      <div className="container mx-auto">
        <h2 className="text-3xl lg:text-5xl font-bold mb-8 text-center">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6 flex flex-col">
              <img src={project.imageUrl} alt={project.title} className="mb-4 rounded-lg" />
              <h3 className="text-xl lg:text-2xl font-semibold mb-4">{project.title}</h3>
              <p>{project.description}</p>
              <div className="mt-auto">
                <a
                  href={project.projectUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
