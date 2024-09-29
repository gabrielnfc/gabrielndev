// components/BackToTop.tsx

import styled from 'styled-components';
import { FaArrowUp } from 'react-icons/fa';
import { useEffect, useState } from 'react';

const Button = styled.button<{ isVisible: boolean }>`
  position: fixed;
  bottom: 40px; // Alterado de 10px para 0px
  right: 20px;
  background-color: #e8314f;
  color: #fff;
  padding: 0.6rem;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  opacity: ${({ isVisible }) => (isVisible ? '1' : '0')};
  transition: opacity 0.4s ease, transform 0.4s ease;
  z-index: 1000;

  &:hover {
    background-color: #ff4f70;
    transform: scale(1.1);
  }

  @media (min-width: 768px) {
    bottom: 40px;
    right: 40px;
    padding: 0.8rem;
  }
`;

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <Button onClick={scrollToTop} aria-label="Voltar ao Topo" isVisible={isVisible}>
      <FaArrowUp />
    </Button>
  );
};

export default BackToTop;