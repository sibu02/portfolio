import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { SiLeetcode, SiGeeksforgeeks } from 'react-icons/si';
export const navItems = [
    {label : "About",href:"#about"},
    {label : "Projects",href:"#projects"},
    {label : "Contacts",href:"#contacts"}
]

export const contactLinks = [
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/in/sibusundardas',
      icon: <FaLinkedin className="text-3xl" />,
      color: 'hover:text-blue-600',
    },
    {
      name: 'GitHub',
      href: 'https://www.github.com/sibu02',
      icon: <FaGithub className="text-3xl" />,
      color: 'hover:text-gray-400',
    },
    {
      name: 'LeetCode',
      href: 'https://www.leetcode.com/u/sibusundardas',
      icon: <SiLeetcode className="text-3xl" />,
      color: 'hover:text-yellow-500',
    },
    {
      name: 'GeeksforGeeks',
      href: 'https://www.geeksforgeeks.org/user/sibusundardas',
      icon: <SiGeeksforgeeks className="text-3xl" />,
      color: 'hover:text-green-500',
    },
    {
      name: 'Email',
      href: 'mailto:sibusundardas00@gmail.com',
      icon: <FaEnvelope className="text-3xl" />,
      color: 'hover:text-red-500',
    },
  ];

  export const projects = [
    {
      title: 'Sorting Visualizer',
      description: 'An interactive sorting visualizer that allows users to observe the real-time process of sorting algorithms like Bubble Sort and QuickSort.',
      technologies: 'JavaScript, React, Spring Boot',
      features: [
        'Showcases popular sorting algorithms visually.',
        'Helps users understand how different sorting algorithms work.',
        'Focuses on clean UI and performance.',
      ],
    },
    {
      title: 'E-Commerce Website',
      description: 'A full-stack e-commerce platform designed to manage products, users, and orders. The website is highly secure and scalable, featuring a dynamic user interface and efficient database management.',
      technologies: 'Java, Spring Boot, Spring Data JPA, Spring Security, React, JavaScript, Material UI, Tailwind CSS, MySQL, Cloudinary',
      features: [
        'Integrated Cloudinary for image management.',
        'Advanced search and filtering features, boosting user satisfaction by 40%.',
        'Secure user authentication with Spring Security.',
        'Scalable backend with optimized performance using MySQL.',
      ],
    },
  ];
  