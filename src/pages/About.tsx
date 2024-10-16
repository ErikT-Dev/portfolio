import React from 'react';

const About: React.FC = () => {
    return (
        <div className="container mx-auto px-4 py-8">
            <h2 className="text-3xl font-bold mb-6 text-white">About Me</h2>
            <div className="text-white space-y-6">
                <p>
                    I hold a Master’s degree in "Indoor Climate in Buildings and Water Engineering" from TalTech University, where I graduated cum laude. My studies focused on water engineering, and my thesis centered on hydraulic modeling of Maardu's water network. During this time, I developed a strong interest in mathematics and mechanics, which helped enhance my analytical thinking skills.
                </p>
                <p>
                    After graduation, I worked for four years as a technical consultant at AS Tallinna Vesi. My responsibilities included writing technical specifications and reviewing projects related to water and sewer networks. A key part of my daily work involved hydraulic modeling of Tallinn's water network using software like WaterGems to simulate system behavior.
                </p>
                <p>
                    A few years ago, I started experimenting with JavaScript in my free time, creating a simple program to generate music using basic rules for rhythm and note selection. This experience sparked my interest in programming and eventually led me to consider a career change.
                </p>
                <p>
                    I left my position at Tallinna Vesi to focus on learning software development. Since then, I have completed several Udemy bootcamps and worked on various solo projects, four of which are showcased on the Projects page of this portfolio. I find programming to be an engaging challenge, offering continuous opportunities for learning and problem-solving as new technologies emerge.
                </p>
                <p>
                    Learning has always been a central part of my life, and I enjoy acquiring new skills. Outside of coding, music continues to play an important role in my life. I enjoy writing music and practicing several musical instruments. I’ve shared some of my orchestral compositions on a personal YouTube channel. This hobby allows me to combine creativity with technical skills in a different context.
                </p>
            </div>
        </div>
    );
};

export default About;
