import React from 'react'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Hero = () => {
  return (
    <div
    className="h-screen flex flex-col items-center justify-center bg-cover bg-center text-white text-center"
    style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1534796636912-3b95b3ab5986?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)' }}>
      <h1 className="text-4xl sm:text-5xl lg:text-5xl text-center tracking-wide"><span className='bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text'>{" "}Hi, I'm Sibu </span>Sundar Das</h1>
      <h1 className="text-4xl sm:text-5xl lg:text-5xl text-center tracking-wide">Full stack <span className='bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text'>{" "}developer</span></h1>
      <p className="text-xl mt-4"> Java | Spring Boot | MERN | Datastructures & Algorithms</p>
      <div className="flex mt-8">
</div>

    </div>
  );
};
export default Hero