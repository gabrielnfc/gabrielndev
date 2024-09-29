// components/Navbar.tsx

import styled from 'styled-components';
import { useState, useEffect, useRef } from 'react';
import { Lexend } from 'next/font/google';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-scroll';
import Image from 'next/image';

const lexend = Lexend({
  subsets: ['latin'],
  weight: ['400'],
});

// Styled Components

const Nav = styled(motion.div)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;  /* Define posição fixa */
  top: 0;
  left: 0;
  right: 0;
  height: 5rem;
  padding: 0 2rem;
  background-color: ${({ theme }) => theme.bodyBackgroundColor};
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.37);
  z-index: 9999;

  @media (max-width: 768px) {
    padding: 0 1rem;
    justify-content: space-around;
  }
`;

const NavItems = styled.div`
  display: flex;
  gap: 2rem;

  @media (max-width: 768px) {
    display: none;  /* Esconde os itens de navegação no mobile */
  }

  a {
    font-size: 1.2rem;  /* Aumenta o tamanho da fonte */
    font-weight: bold;
    color: ${({ theme }) => theme.bodyTextColor};
    cursor: pointer;
    position: relative;

    &:hover {
      color: #e8314f;
    }

    &.active::after {
      content: '';
      position: absolute;
      width: 100%;
      height: 2px;
      background-color: #e8314f;
      bottom: -4px;
      left: 0;
    }
  }
`;

const MobileNavItems = styled(motion.div)`
  display: none;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    background-color: ${({ theme }) => theme.bodyBackgroundColor};
    padding: 2rem;
    position: fixed;  /* Garante que o menu móvel também fique fixo */
    top: 5rem;
    left: 0;
    right: 0;
    height: calc(100vh - 5rem);  /* Ocupa o espaço restante abaixo da Navbar */
    overflow-y: auto;  /* Permite rolagem se o conteúdo ultrapassar a tela */
    box-shadow: 0 1px 8px rgba(0, 0, 0, 0.37);
    z-index: 9998;  /* Menor que a Navbar para evitar sobreposição */
  }

  a {
    font-size: 1.4rem;  /* Aumenta o tamanho da fonte no mobile */
    font-weight: bold;
    color: ${({ theme }) => theme.bodyTextColor};
    cursor: pointer;

    &:hover {
      color: #e8314f;
    }
  }
`;

const HamburgerIcon = styled.div`
  display: none;
  flex-direction: column;
  gap: 0.4rem;
  cursor: pointer;
  z-index: 10000;  /* Maior que a Navbar para ser clicável */

  @media (max-width: 768px) {
    display: flex;
    margin-inline-start: 9rem; /* Ajusta a margem para empurrar para a direita */
  }

  div {
    width: 25px;
    height: 3px;
    background-color: ${({ theme }) => theme.bodyTextColor};
    transition: all 0.3s ease;
  }

  /* Animação para o ícone hambúrguer quando aberto */
  &.open div:nth-child(1) {
    transform: rotate(45deg) translate(5px, 5px);
  }

  &.open div:nth-child(2) {
    opacity: 0;
  }

  &.open div:nth-child(3) {
    transform: rotate(-45deg) translate(5px, -5px);
  }
`;

const Logo = styled(Image)`
  cursor: pointer;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.1);
  }

  @media (max-width: 768px) {
    width: 150px; /* Ajusta a largura no mobile */
    height: auto;
  }
`;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (navRef.current && !navRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'; // Impede rolagem quando o menu está aberto
    } else {
      document.body.style.overflow = 'auto';
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  return (
    <Nav
      className={lexend.className}
      ref={navRef}
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Link to="Home" spy={true} smooth={true} offset={-70} duration={500}>
        <Logo src="/images/logo.svg" alt="Logo do Site" width={160} height={100} />
      </Link>

      <NavItems>
        <Link to="Home" spy={true} smooth={true} offset={-70} duration={500}>
          Home
        </Link>
        <Link to="About" spy={true} smooth={true} offset={-70} duration={500}>
          Sobre
        </Link>
        <Link to="Portfolio" spy={true} smooth={true} offset={-70} duration={500}>
          Portfólio
        </Link>
        <Link to="Contact" spy={true} smooth={true} offset={-70} duration={500}>
          Contato
        </Link>
      </NavItems>

      <HamburgerIcon
        onClick={toggleMenu}
        className={isOpen ? 'open' : ''}
        aria-label="Menu"
        aria-expanded={isOpen}
      >
        <div />
        <div />
        <div />
      </HamburgerIcon>

      <AnimatePresence>
        {isOpen && (
          <MobileNavItems
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Link
              to="Home"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              to="About"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onClick={() => setIsOpen(false)}
            >
              Sobre
            </Link>
            <Link
              to="Portfolio"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onClick={() => setIsOpen(false)}
            >
              Portfólio
            </Link>
            <Link
              to="Contact"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onClick={() => setIsOpen(false)}
            >
              Contato
            </Link>
          </MobileNavItems>
        )}
      </AnimatePresence>
    </Nav>
  );
};

export default Navbar;