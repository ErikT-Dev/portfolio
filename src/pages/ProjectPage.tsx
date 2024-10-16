import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { projects } from '../data/projects';
import ImageCarousel from '../components/ImageCarousel';
import { ArrowTurnDownRightIcon } from '@heroicons/react/24/solid';
import { useBackgroundColor } from '../utils/BackgroundColorContext';
import YouTubeEmbed from '../components/YouTubeEmbed';

const ProjectHeader: React.FC<{ title: string; onBackClick: () => void }> = ({ title, onBackClick }) => (
    <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold text-white">{title}</h2>
        <button
            onClick={onBackClick}
            className="flex items-center text-lg text-white font-bold py-2 px-4 hover:text-white hover:underline transition-colors"
        >
            <ArrowTurnDownRightIcon className="w-5 h-5 mr-2" />
            Back to Projects
        </button>
    </div>
);

const ProjectShortDescription: React.FC<{ description: string }> = ({ description }) => (
    <div className="mb-6">
        <h3 className="text-2xl font-bold uppercase text-white mb-2">In Short</h3>
        <p className="text-white">{description}</p>
    </div>
);

const ProjectDetails: React.FC<{ project: any }> = ({ project }) => (
    <>
        {project.longDescription.map((descriptionItem: any, index: number) => (
            <div key={index} className="text-white">
                <h3 className="text-2xl font-bold uppercase mb-2">{descriptionItem.title}</h3>
                <p className="mb-4">{descriptionItem.body}</p>
            </div>
        ))}
        <div className="text-white">
            <h3 className="text-2xl font-bold uppercase mb-2">Key Features</h3>
            <ul className="list-disc list-inside mb-4">
                {project.keyFeatures.map((feature: string, index: number) => (
                    <li key={index}>{feature}</li>
                ))}
            </ul>
        </div>
        <div className="text-white">
            <h3 className="text-2xl font-bold uppercase mb-2">Technologies Used</h3>
            <ul className="list-disc list-inside mb-4">
                {project.technologies.map((tech: string, index: number) => (
                    <li key={index}>{tech}</li>
                ))}
            </ul>
            <ProjectLinks githubUrl={project.githubUrl} liveUrl={project.liveUrl} />
        </div>

    </>
);

const ProjectLinks: React.FC<{ githubUrl: string; liveUrl?: string }> = ({ githubUrl, liveUrl }) => (
    <div className="flex space-x-4 mt-6">
        <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-800 text-white font-bold py-2 px-4 rounded hover:bg-gray-700 transition-colors"
        >
            View on GitHub
        </a>
        {liveUrl && (
            <a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 text-white font-bold py-2 px-4 rounded hover:bg-green-500 transition-colors"
            >
                Live Site
            </a>
        )}
    </div>
);

const ProjectPage: React.FC = () => {
    const { projectId } = useParams<{ projectId: string }>();
    const navigate = useNavigate();
    const { setBackgroundColor } = useBackgroundColor();

    const project = projects.find(p => p.title.toLowerCase().replace(/\s+/g, '') === projectId?.toLowerCase());

    useEffect(() => {
        if (project) {
            const backgroundColor = project.colors[1] || project.colors[0] || '#324a47';
            setBackgroundColor(backgroundColor);
        }
    }, [project, setBackgroundColor]);

    if (!project) return null;

    const isPortrait = project.carouselImages[0].aspectRatio === '1to2';

    return (
        <div className="container mx-auto px-4 py-2">
            <ProjectHeader title={project.title} onBackClick={() => navigate('/')} />
            <ProjectShortDescription description={project.shortDescription} />
            <div className={`grid gap-8 ${isPortrait ? 'grid-cols-1 sm:grid-cols-2' : 'grid-cols-1 xl:grid-cols-2'}`}>
                {isPortrait ? (
                    <>
                        <div className="space-y-8">
                            <ImageCarousel images={project.carouselImages} alt={project.title} />
                            {project.videoUrl && (
                                <YouTubeEmbed
                                    videoId={project.videoUrl}
                                    title={`${project.title} Project Demo - View on YouTube`}
                                />
                            )}
                        </div>
                        <div className="space-y-8">
                            <ProjectDetails project={project} />
                        </div>
                    </>
                ) : (
                    <>
                        <div className="w-full">
                            <ImageCarousel images={project.carouselImages} alt={project.title} />
                        </div>
                        {project.videoUrl && (
                            <div className="w-full">
                                <YouTubeEmbed
                                    videoId={project.videoUrl}
                                    title={`${project.title} Project Demo - View on YouTube`}
                                />
                            </div>
                        )}
                        <ProjectDetails project={project} />
                    </>
                )}
            </div>
        </div>
    );
};

export default ProjectPage;