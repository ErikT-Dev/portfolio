import React from 'react';
import ContactForm from '../components/ContactForm';

const Contact: React.FC = () => {
    return (
        <div className="container mx-auto px-4 py-8">
            <h2 className="text-3xl font-bold mb-6 text-white">Contact Me</h2>
            <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/2">
                    <p className="text-white mb-4">
                        I'm always open to new opportunities and collaborations. Whether you have a question about my projects, want to discuss a potential job opportunity, or just want to say hello, feel free to reach out!
                    </p>
                    <p className="text-white mb-4">
                        You can also find me on:
                    </p>
                    <ul className="list-disc list-inside text-white mb-4">
                        <li>GitHub: <a href="https://github.com/ErikT-Dev" className="text-green-300 hover:underline" target="_blank" rel="noopener noreferrer">@ErikT-Dev</a></li>
                        {/* Add more social links as needed */}
                        <li>Email: <a href="mailto:erik.trummal@gmail.com" className="text-green-300 hover:underline">
                            erik.trummal@gmail.com
                        </a></li>
                    </ul>
                </div>
                <div className="md:w-1/2">
                    <ContactForm />
                </div>
            </div>
        </div>
    );
};

export default Contact;