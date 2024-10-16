import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Project } from '../data/projects';
import ProjectCardHeader from './ProjectCardHeader';

interface ProjectCardProps {
    project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
    const [imageLoaded, setImageLoaded] = useState(false);
    const backgroundColor = project.colors[0];
    const imageLoadingBackground = project.colors[2];

    return (
        <Link
            to={`/projects/${project.title.toLowerCase().replace(/\s+/g, '')}`}
            className="block bg-white rounded-lg overflow-hidden relative group
                       transition-all duration-300 hover:scale-105 transform"
            style={{
                boxShadow: '0 15px 30px -5px rgba(0, 0, 0, 0.3), 0 10px 15px -3px rgba(0, 0, 0, 0.2)',
            }}
        >
            <div
                className="p-4 z-10 relative bg-cover bg-center"
                style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/assets/backgrounds/card2.jpg)` }}
            >
                <div
                    className="absolute inset-0 opacity-30 transition-opacity duration-500 group-hover:opacity-60"
                    style={{ backgroundColor }}
                ></div>
                <ProjectCardHeader project={project} />
            </div>
            <div className="relative w-full" style={{ paddingBottom: '50%' }}> {/* 16:9 Aspect Ratio */}
                <div
                    className="absolute inset-0 flex items-center justify-center"
                    style={{ backgroundColor: imageLoadingBackground }}
                >
                    {!imageLoaded && (
                        <div className="animate-spin rounded-full h-20 w-20 border-t-4 border-b-4 border-white"></div>
                    )}
                </div>
                <img
                    src={`${process.env.PUBLIC_URL}${project.cardImageUrl}`}
                    alt={project.title}
                    className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-300 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
                    onLoad={() => setImageLoaded(true)}
                />
            </div>
            <div
                className="p-4 relative z-10 bg-cover bg-center"
                style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/assets/backgrounds/card.jpg)` }}
            >
                <div
                    className="absolute inset-0 opacity-30 transition-opacity duration-500 group-hover:opacity-60"
                    style={{ backgroundColor }}
                ></div>
                <p className="text-white relative z-10">{project.shortDescription}</p>
            </div>
        </Link>
    );
};

export default ProjectCard;