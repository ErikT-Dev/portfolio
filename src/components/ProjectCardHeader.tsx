import React, { useState, useEffect, useRef } from 'react';
import { Project } from '../data/projects';

const ProjectCardHeader: React.FC<{ project: Project }> = ({ project }) => {
    const [visibleTechs, setVisibleTechs] = useState<string[]>([]);
    const containerRef = useRef<HTMLDivElement>(null);
    const titleRef = useRef<HTMLHeadingElement>(null);
    const techsRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const updateVisibleTechs = () => {
            if (containerRef.current && titleRef.current && techsRef.current) {
                const containerWidth = containerRef.current.offsetWidth;
                const titleWidth = titleRef.current.offsetWidth;
                const availableWidth = containerWidth - titleWidth - 20; // 20px for some padding

                let totalWidth = 0;
                const visibleTechnologies = [];

                for (const tech of project.technologies) {
                    const tempSpan = document.createElement('span');
                    tempSpan.className = 'bg-gray-800 bg-opacity-50 text-white rounded-full px-3 py-1 text-sm font-semibold';
                    tempSpan.textContent = tech;
                    document.body.appendChild(tempSpan);
                    const techWidth = tempSpan.offsetWidth;
                    document.body.removeChild(tempSpan);

                    if (totalWidth + techWidth > availableWidth) break;

                    totalWidth += techWidth + 8; // 8px for gap
                    visibleTechnologies.push(tech);
                }

                setVisibleTechs(visibleTechnologies);
            }
        };

        updateVisibleTechs();
        window.addEventListener('resize', updateVisibleTechs);

        return () => window.removeEventListener('resize', updateVisibleTechs);
    }, [project.technologies]);

    return (
        <div ref={containerRef} className="flex items-center justify-between w-full overflow-hidden relative z-10">
            <h3 ref={titleRef} className="text-xl font-semibold text-white font-sans whitespace-nowrap overflow-hidden overflow-ellipsis flex-shrink-0 mr-4">
                {project.title}
            </h3>
            <div ref={techsRef} className="flex flex-wrap gap-2 overflow-hidden">
                {visibleTechs.map((tech, index) => (
                    <span key={index} className="bg-gray-800 bg-opacity-50 text-white rounded-full px-3 py-1 text-sm font-semibold whitespace-nowrap">
                        {tech}
                    </span>
                ))}
            </div>
        </div>
    );
};

export default ProjectCardHeader;