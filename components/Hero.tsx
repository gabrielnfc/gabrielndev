// components/Hero.tsx

import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaArrowDown } from 'react-icons/fa';
import { Typewriter } from 'react-simple-typewriter';

const HeroSection = styled.section`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: #121212;
  overflow: hidden;
`;

const HeroBackground = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, #e8314f 0%, #1e1e1e 100%);
  z-index: -1;
  animation: gradientAnimation 10s ease infinite;

  @keyframes gradientAnimation {
    0%,
    100% {
      background: linear-gradient(135deg, #e8314f 0%, #1e1e1e 100%);
    }
    50% {
      background: linear-gradient(135deg, #1e1e1e 0%, #e8314f 100%);
    }
  }
`;

const HeroContent = styled(motion.div)`
  max-width: 800px;
  text-align: center;
  padding: 0 1rem;
  color: #e0e0e0;
`;

const Title = styled.h1`
  font-size: 3.5rem;
  color: #fff;
  margin-bottom: 1rem;
  font-family: 'Poppins', sans-serif;
  background: linear-gradient(90deg, #e8314f, #ff4f70);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media (min-width: 768px) {
    font-size: 4.5rem;
  }
`;

const Subtitle = styled.h2`
  font-size: 2rem;
  color: #e0e0e0;
  margin-bottom: 2rem;
  font-family: 'Poppins', sans-serif;

  @media (min-width: 768px) {
    font-size: 2.5rem;
  }
`;

const Description = styled.p`
  font-size: 1.2rem;
  color: #e0e0e0;
  margin-bottom: 2rem;
  line-height: 1.6;
  font-family: 'Roboto', sans-serif;
`;

const CTAButton = styled.a`
  display: inline-block;
  padding: 1rem 2rem;
  background-color: #e8314f;
  color: #fff;
  font-size: 1.2rem;
  border-radius: 8px;
  text-decoration: none;
  transition: background-color 0.3s ease;
  font-family: 'Poppins', sans-serif;

  &:hover {
    background-color: #ff4f70;
  }

  /* Adiciona rolagem suave */
  scroll-behavior: smooth;
`;

const ScrollDownIndicator = styled.div`
  position: absolute;
  bottom: 20px;
  color: #e0e0e0;
  font-size: 2rem;
  animation: bounce 2s infinite;

  @keyframes bounce {
    0%,
    20%,
    50%,
    80%,
    100% {
      transform: translateY(0);
    }
    40% {
      transform: translateY(-10px);
    }
    60% {
      transform: translateY(-5px);
    }
  }
`;

const Hero = () => {
  const handleScroll = (e) => {
    e.preventDefault();
    const targetId = e.currentTarget.getAttribute("href");
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <HeroSection id="Home">
      {/* Background Animado */}
      <HeroBackground />

      <HeroContent
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <Title>Gabriel Nascimento</Title>
        <Subtitle>
          <span>
            <Typewriter
              words={[
                'Desenvolvedor Frontend',
                'Especialista em Landing Pages',
                'Criando Experiências Digitais',
              ]}
              loop={true}
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </span>
        </Subtitle>
        <Description>
          Transformo suas ideias em soluções digitais de alto impacto. Com foco em design moderno e performance, desenvolvo landing pages que atraem, engajam e convertem visitantes em clientes.
        </Description>
        <CTAButton href="#Contact" onClick={handleScroll}>Solicite um Orçamento</CTAButton>
      </HeroContent>
      <ScrollDownIndicator>
        <FaArrowDown />
      </ScrollDownIndicator>
    </HeroSection>
  );
};

export default Hero;
