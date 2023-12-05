import React from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaGithub, FaFigma } from 'react-icons/fa';

const SkillCard = ({ Icon, title, description }) => {
  return (
    <div className=" bg-white border-l-4 border-gray-900 rounded-lg shadow-md p-6 flex flex-col items-center justify-center">
      <Icon className="text-6xl mb-4" />
      <h3 className="text-2xl font-semibold mb-4">{title}</h3>
      <p className="text-center">{description}</p>
    </div>
  );
};

const SkillsSection = () => {
  return (
    <section id='skills' className="bg-[#EDF5E1] py-16 lg:py-20 px-8 lg:px-16 min-h-screen">
      <div className="container mx-auto">
        <h2 className="text-3xl lg:text-5xl font-bold mb-8 text-center">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <SkillCard
            Icon={FaHtml5}
            title="HTML"
            description="Creating structured web content"
          />
          <SkillCard
            Icon={FaCss3Alt}
            title="CSS"
            description="Styling and layout design"
          />
          {/* Add other skills similarly */}
          <SkillCard
            Icon={FaJs}
            title="JavaScript"
            description="Adding interactivity and functionality"
          />
          <SkillCard
            Icon={FaReact}
            title="React"
            description="Building modern web applications"
          />
          <SkillCard
            Icon={FaGithub}
            title="GitHub"
            description="Version control and collaboration"
          />
          <SkillCard
            Icon={FaFigma}
            title="Figma"
            description="Designing user interfaces and prototypes"
          />
          <SkillCard
            Icon={FaReact}
            title="Next.js"
            description="Building performant web apps with React"
          />
          <SkillCard
            Icon={FaHtml5}
            title="Responsive Web Design"
            description="Designing websites for various screen sizes"
          />
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
