// src/components/Projects.js
  import { projects } from "../constants";
  const Projects = () => {
    return (
      <section className="py-20 bg-gray-100 text-gray-700 text-center">
        <h2 className="text-3xl font-bold mb-6">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
              <p className="mb-4">{project.description}</p>
              <h4 className="text-lg font-semibold mb-2">Technologies Used:</h4>
              <p className="mb-4">{project.technologies}</p>
              <h4 className="text-lg font-semibold mb-2">Key Features:</h4>
              <ul className="list-disc list-inside">
                {project.features.map((feature, idx) => (
                  <li key={idx} className="text-left">{feature}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default Projects;
  