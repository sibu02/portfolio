import React from 'react';
import { contactLinks } from '../constants'; // Assuming your contactLinks array is defined in constants

const Contacts = () => {
  return (
    <div className="flex flex-col items-center justify-center space-y-6 text-white text-center mt-10">
      <h2 className="text-3xl font-semibold mb-6">Get in Touch</h2>
      
      {/* Links Section */}
      <div className="flex flex-wrap justify-center space-x-4">
        {contactLinks.map((link, index) => (
          <a
            key={index}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center space-x-2 bg-gray-800 text-white rounded-full px-4 py-2 transition-colors duration-300 mb-6 ${link.color}`}
          >
            {link.icon}
            <span>{link.name}</span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Contacts;
