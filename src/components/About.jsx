const skills = ['React', 'Spring Boot', 'Java', 'MERN Stack', 'MongoDB', 'MySQL', 'JavaScript'];

const About = () => {
  return (
    <div className="py-10 text-center bg-grey-100">
      <h2 className="text-4xl font-bold mb-6 text-orange-500 rounded-full h-5 text-sm font-medium px-2 py-1 uppercase">About Me</h2>
      <p className="text-lg mb-8 px-5 mx-10">
      I am Sibu Sundar Das, a passionate software developer with expertise in building modern web applications using cutting-edge technologies. With a solid foundation in the MERN stack, Java Full Stack, and data structures, I have successfully developed several projects that emphasize performance, scalability, and user experience.

      When I'm not coding, I enjoy working on problem-solving challenges to refine my algorithmic thinking.

      I have hands-on experience with frameworks like Spring Boot and React, and I specialize in creating secure, efficient, and robust backend systems while delivering intuitive and responsive frontend designs. My skill set spans a variety of technologies, including Java, MongoDB, MySQL, Spring Security, and microservices architecture.
      </p>
      <div className="flex justify-center flex-wrap space-x-2">
        {skills.map((skill, index) => (
          <span key={index} className="bg-blue-500 text-white px-4 py-2 rounded-full m-2">{skill}</span>
        ))}
      </div>
    </div>
  );
};

export default About;
