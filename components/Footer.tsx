// components/Footer.tsx

import styled from 'styled-components';
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaWhatsapp,
} from 'react-icons/fa';

// Estilos

const FooterContainer = styled.footer`
  background-color: #121212;
  color: #e0e0e0;
  position: relative;
  overflow: hidden;
  padding: 1rem 0; /* Padding ajustado para melhor espaçamento */

  @media (min-width: 768px) {
    padding: 2rem 0; /* Aumentar o padding em telas maiores */
  }
`;

const FooterContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-inline-size: 1200px;
  margin: 0 auto;
  position: relative; /* Necessário para posicionamento absoluto */

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0 2rem;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1.5rem;
  margin-bottom: 1rem; /* Margem inferior para mobile */

  @media (min-width: 768px) {
    position: absolute;
    left: 20px; /* Posiciona os ícones à esquerda */
    top: 50%;
    transform: translateY(-50%);
    margin-bottom: 0; /* Remove margem inferior no desktop */
  }

  a {
    color: #e0e0e0;
    font-size: 1.8rem;
    transition: color 0.3s ease, transform 0.3s ease;

    &:hover {
      color: #e8314f;
      transform: scale(1.2);
    }
  }
`;

const CopyRight = styled.p`
  font-size: 1rem;
  margin: 0 0 1rem 0; /* Adiciona margem inferior para mobile */
  text-align: center; /* Centraliza o texto no mobile */
  padding-inline-start: 0; /* Remove padding no mobile */

  @media (min-width: 768px) {
    font-size: 1.2rem;
    text-align: center; /* Centraliza o texto no desktop */
    padding-inline-start: 20rem; /* Adiciona padding no desktop */
    margin: 0; /* Remove margem inferior no desktop */
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <SocialLinks>
          <a
            href="https://github.com/gabrielnfc"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/gabrielnfc"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://www.instagram.com/gabrielnfc"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>
          <a
            href="https://wa.me/5527992594304"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
          >
            <FaWhatsapp />
          </a>
        </SocialLinks>
        <CopyRight>
          © {new Date().getFullYear()} Gabriel Nascimento. Todos os direitos
          reservados.
        </CopyRight>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;