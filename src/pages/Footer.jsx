import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-black text-gray-400 py-6 text-center text-sm border-t border-white/10 relative z-10">
            <p>© {new Date().getFullYear()} Ankit Kumar. All rights reserved.</p>
        </footer>
    );
};

export default Footer;
