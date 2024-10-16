import React from 'react';
import Navigation from './Navigation';

const Header: React.FC = () => {
    return (
        <header className="text-white">
            <div className="container mx-auto px-4 py-6">
                <div className="flex flex-row justify-between items-center">
                    <h1 className="text-2xl text-white font-bold text-center lg:text-left">
                        <span className="block lg:inline">DEVELOPER</span>
                        <span className="block lg:inline md:ml-2">PORTFOLIO</span>
                    </h1>
                    <Navigation />
                </div>
            </div>
        </header>
    );
};

export default Header;