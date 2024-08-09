import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Github, Twitter, Cpu, Code, Rocket, Star, Users } from 'lucide-react';

const Index = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const sections = [
    { id: 'hero', title: 'GPT Engineer' },
    { id: 'about', title: 'About' },
    { id: 'features', title: 'Features' },
    { id: 'tweets', title: 'Tweets' },
    { id: 'contact', title: 'Contact' },
  ];

  return (
    <div className="min-h-screen bg-[#D2691E] text-[#8B4513]">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#FFD700] bg-opacity-90 shadow-md">
        <div className="container mx-auto px-4 py-2">
          <ul className="flex justify-center space-x-6">
            {sections.map((section) => (
              <li key={section.id}>
                <a
                  href={`#${section.id}`}
                  className="text-[#8B4513] hover:text-[#D2691E] transition-colors duration-300"
                >
                  {section.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="text-center z-10">
          <motion.h1
            className="text-6xl font-bold mb-4"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            GPT Engineer
          </motion.h1>
          <motion.p
            className="text-2xl mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            Building AGI in Europe
          </motion.p>
          <motion.a
            href="#about"
            className="bg-[#FF8C00] text-white px-6 py-3 rounded-full text-lg hover:bg-[#FFA500] transition-colors duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Learn More
          </motion.a>
        </div>
        <motion.div
          className="absolute inset-0"
          style={{
            backgroundImage: "url('https://source.unsplash.com/random/1920x1080?autumn')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
          animate={{
            scale: 1 + scrollY * 0.0005,
            opacity: 1 - scrollY * 0.001,
          }}
        />
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <ArrowDown size={32} color="#FFD700" />
        </motion.div>
      </section>

      <section id="about" className="min-h-screen flex items-center justify-center bg-[#FFA500] py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-8 text-center">About GPT Engineer</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <p className="text-lg mb-4">
                GPT Engineer is a revolutionary project that aims to reduce barriers to building software. With just one prompt, it can generate an entire codebase, ask clarifying questions, and write all necessary code.
              </p>
              <p className="text-lg mb-4">
                Our mission is to make software development accessible to everyone, regardless of their technical background.
              </p>
            </div>
            <div className="relative">
              <motion.img
                src="https://source.unsplash.com/random/600x400?coding"
                alt="Coding"
                className="rounded-lg shadow-lg"
                whileHover={{ scale: 1.05, rotate: 5 }}
              />
              <motion.div
                className="absolute -bottom-10 -right-10 bg-[#D2691E] p-4 rounded-full"
                whileHover={{ scale: 1.1, rotate: 90 }}
              >
                <Cpu size={48} color="#FFD700" />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="min-h-screen flex items-center justify-center bg-[#FF8C00] py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Code, title: 'One-Prompt Codebase', description: 'Generate an entire codebase with a single prompt' },
              { icon: Rocket, title: 'Easy Deployment', description: 'Deploy web applications with ease' },
              { icon: Users, title: 'Community-Driven', description: 'Collaborate with a growing community of developers' },
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="bg-[#FFD700] p-6 rounded-lg shadow-lg"
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
              >
                <feature.icon size={48} className="mb-4 text-[#8B4513]" />
                <h3 className="text-2xl font-semibold mb-2">{feature.title}</h3>
                <p>{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="tweets" className="min-h-screen flex items-center justify-center bg-[#D2691E] py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">Latest Tweets</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              "Introducing gpt-engineer App👶\n\nsince gpt-engineer became the world's most popular codegen project I have been tinkering with the next step: how to make it practical, ie allow anyone to build and deploy web–apps with plain english\n\nMission: Reduce barriers to build",
              "👶🤖 Introducing  `gpt-engineer`\n\n▸ One prompt generates a codebase\n▸ Asks clarifying questions\n▸ Generates technical spec\n▸ Writes all necessary code\n▸ Easy to add your own reasoning steps, modify, and experiment\n▸ open source\n▸ Lets you finish a project in one sitting",
            ].map((tweet, index) => (
              <motion.div
                key={index}
                className="bg-[#FFD700] p-6 rounded-lg shadow-lg"
                whileHover={{ scale: 1.02 }}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.3 }}
              >
                <Twitter size={24} className="mb-4 text-[#8B4513]" />
                <p className="text-sm">{tweet}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="min-h-screen flex items-center justify-center bg-[#FFA500] py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8">Get in Touch</h2>
          <p className="text-xl mb-8">Interested in GPT Engineer? Reach out to us!</p>
          <div className="flex justify-center space-x-6">
            <motion.a
              href="https://github.com/AntonOsika/gpt-engineer"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#8B4513] hover:text-[#D2691E] transition-colors duration-300"
              whileHover={{ scale: 1.1 }}
            >
              <Github size={32} />
            </motion.a>
            <motion.a
              href="https://twitter.com/antonosika"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#8B4513] hover:text-[#D2691E] transition-colors duration-300"
              whileHover={{ scale: 1.1 }}
            >
              <Twitter size={32} />
            </motion.a>
          </div>
        </div>
      </section>

      <footer className="bg-[#8B4513] text-white py-4">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2023 GPT Engineer. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
