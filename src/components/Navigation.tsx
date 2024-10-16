import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navigation: React.FC = () => {
    const location = useLocation();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    const navItems = [
        { path: '/', label: 'Projects' },
        { path: '/about', label: 'About' },
        { path: '/contact', label: 'Contact' },
    ];

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    const isSelected = (path: string) => {
        if (path === '/' && (location.pathname === '/' || location.pathname.startsWith('/projects/'))) {
            return true;
        }
        return location.pathname === path;
    };

    const currentItem = navItems.find(item => isSelected(item.path)) || navItems[0];

    return (
        <nav className="p-4">
            {isMobile ? (
                <div className="relative">
                    <button
                        onClick={toggleMenu}
                        className="flex items-center justify-between w-full py-2 px-4 text-white"
                    >
                        <span className="text-2xl font-righteous uppercase pr-2">{currentItem.label}</span>
                        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                        </svg>
                    </button>
                    {isMenuOpen && (
                        <ul className="absolute right-0 mt-2 py-2 w-48 bg-gray-800 rounded-lg shadow-xl">
                            {navItems.map((item) => (
                                <li key={item.path} className="block px-4 py-2 text-sm">
                                    <Link
                                        to={item.path}
                                        onClick={toggleMenu}
                                        className={`block w-full text-left ${location.pathname === item.path ? 'text-green-300 font-bold' : 'text-white hover:text-green-300'}`}
                                    >
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            ) : (
                <ul className="flex justify-center items-center">
                    {navItems.map((item, index) => {
                        const selected = isSelected(item.path);
                        return (
                            <React.Fragment key={item.path}>
                                {index > 0 && (
                                    <li className="h-6 w-0.5 bg-gray-300 mx-2"></li>
                                )}
                                <li className="min-w-[8rem] px-2">
                                    <Link
                                        to={item.path}
                                        className={`
                                            transition-all duration-300 ease-in-out
                                            hover:text-white hover:underline hover:font-bold
                                            block text-center w-full uppercase
                                            ${selected ? 'font-righteous text-white underline' : 'text-lg'}`}
                                        style={{ fontSize: selected ? '2.4rem' : '1.4rem' }}
                                    >
                                        {item.label}
                                    </Link>
                                </li>
                            </React.Fragment>
                        );
                    })}
                </ul>
            )}
        </nav>
    );
};

export default Navigation;