import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

const ContactForm: React.FC = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [honeypot, setHoneypot] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);

    const form = useRef<HTMLFormElement>(null);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (honeypot) {
            // If the honeypot field is filled, silently reject the submission
            console.log('Bot submission detected');
            setSubmitStatus('success'); // Pretend it was successful to not alert the bot
            return;
        }
        setIsSubmitting(true);
        setSubmitStatus(null);

        emailjs.sendForm(
            'service_ve7hjya',
            'template_wo2ewmq',
            form.current!,
            '_vo0chkRM-yQuihMp'
        )
            .then((result) => {
                console.log(result.text);
                setSubmitStatus('success');
                setName('');
                setEmail('');
                setMessage('');
            }, (error) => {
                console.log(error.text);
                setSubmitStatus('error');
            })
            .finally(() => {
                setIsSubmitting(false);
            });
    };

    return (
        <form ref={form} onSubmit={handleSubmit} className="max-w-lg">
            <div className="mb-4">
                <label htmlFor="name" className="block text-white font-bold mb-2">Name</label>
                <input
                    type="text"
                    id="name"
                    name="user_name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>
            <div className="mb-4">
                <label htmlFor="email" className="block text-white font-bold mb-2">Email</label>
                <input
                    type="email"
                    id="email"
                    name="user_email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>
            <div className="mb-4">
                <label htmlFor="message" className="block text-white font-bold mb-2">Message</label>
                <textarea
                    id="message"
                    name="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                    rows={4}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>
            </div>
            {/* Honeypot field */}
            <div className="hidden">
                <label htmlFor="honeypot">Leave this field empty</label>
                <input
                    type="text"
                    id="honeypot"
                    name="honeypot"
                    value={honeypot}
                    onChange={(e) => setHoneypot(e.target.value)}
                    tabIndex={-1}
                    autoComplete="off"
                />
            </div>
            <button
                type="submit"
                className="bg-green-100 text-green-800 font-bold py-2 px-4 rounded hover:bg-green-200 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-400"
                disabled={isSubmitting}
            >
                {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
            {submitStatus === 'success' && (
                <p className="mt-4 text-green-100 font-bold">Message sent successfully!</p>
            )}
            {submitStatus === 'error' && (
                <p className="mt-4 text-red-600">Failed to send message. Please try again.</p>
            )}
        </form>
    );
};

export default ContactForm;