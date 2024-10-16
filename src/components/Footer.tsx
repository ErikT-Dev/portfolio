import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="text-gray-200 py-4">
            <div className="container mx-auto px-4 mt-5 mb-2 text-center font-bold">
                <p>&copy; {new Date().getFullYear()} ERIK TRUMMAL'S DEVELOPER PORTFOLIO</p>
                {/* <div className="mt-2">
                    <a href="https://github.com/OngoGablogianAC" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white mx-2">
                        GitHub
                    </a>
                    <a href="mailto:erik.trummal@gmail.com" className="text-gray-300 hover:text-white mx-2">
                        Email
                    </a>
                </div> */}
            </div>
        </footer>
    );
};

export default Footer;