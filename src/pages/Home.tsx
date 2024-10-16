import React, { useEffect } from 'react';
import { projects } from '../data/projects';
import ProjectCard from '../components/ProjectCard';
import { useBackgroundColor } from '../utils/BackgroundColorContext';


const Home: React.FC = () => {
    const { setBackgroundColor } = useBackgroundColor();
    useEffect(() => {
        setBackgroundColor('rgba(50, 57, 39, 0.5)');
    }, [setBackgroundColor]);

    return (
        <div className="container mx-auto">
            <div className="text-center mb-14 rounded-lg">
                <h1 className="text-white font-sans font-bold mb-4">
                    <span className="text-[42px] text-green-100"> Hi, I'm </span>
                    <span className="text-[51px] text-yellow-100">Erik.</span>
                </h1> <p className="text-[24px] text-white font-sans">Here's what I 've been working on in 2024:</p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {projects.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </div>
        </div>
    );
};

export default Home;