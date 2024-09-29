// components/Contact.tsx

import styled from 'styled-components';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaWhatsapp } from 'react-icons/fa';
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Estilos

const ContactSection = styled.section`
  background-color: #1e1e1e;
  color: #e0e0e0;
  text-align: center;
  overflow-x: hidden;
  box-sizing: border-box;
  min-height: 100vh; /* Mantém a altura mínima para detecção na navbar */
  position: relative; /* Para posicionamento do ContactContent */

  @media (min-width: 768px) {
    padding: 12rem 4rem; /* Aumentar ainda mais o padding em telas maiores */
  }
`;

const ContactContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: auto; /* Altura automática por padrão */
  padding: 2rem 1rem; /* Padding para mobile */

  @media (min-width: 768px) {
    height: 75vh; /* Define a altura visível para o conteúdo em desktop */
    padding: 0; /* Remove padding adicional em desktop */
  }
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem; /* Tamanho ajustado para mobile */
  margin-block-start: 0; /* Remover margem negativa para mobile */
  position: relative;

  &::after {
    content: '';
    width: 80px; /* Tamanho ajustado para mobile */
    height: 4px;
    background-color: #e8314f;
    display: block;
    margin: 1rem auto 0;
    border-radius: 2px;
  }

  @media (min-width: 768px) {
    font-size: 3rem; /* Aumentar o tamanho do título em desktop */
    margin-block-start: -7rem; /* Aplicar margem negativa em desktop */
    &::after {
      width: 100px; /* Aumentar o tamanho da linha abaixo do título em desktop */
      height: 5px;
      margin: 1.5rem auto 0;
    }
  }
`;

const ContactWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  inline-size: 100%;
  box-sizing: border-box;
  max-inline-size: 1200px;
  margin: 0 auto;
  width: 100%;

  @media (min-width: 992px) {
    flex-direction: row;
    gap: 3rem;
    align-items: stretch; /* Adicionado para esticar os itens */
  }
`;

const ContactInfo = styled.div`
  flex: 1;
  margin-block-end: 2rem; /* Reduzir espaçamento para mobile */
  padding: 1rem;

  @media (min-width: 768px) {
    margin-block-end: 4rem; /* Aumentar o espaçamento inferior em desktop */
    padding: 2rem;
  }

  @media (min-width: 992px) {
    margin-block-end: 0;
    padding: 3rem; /* Aumentar o padding em telas grandes */
  }

  p {
    margin: 1rem 0; /* Ajustar espaçamento entre parágrafos para mobile */
    font-size: 1.1rem; /* Ajustar o tamanho do texto para mobile */
    line-height: 1.6;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  svg {
    color: #e8314f;
    margin-right: 0.5rem; /* Reduzir margem em mobile */
    font-size: 1.3rem; /* Ajustar tamanho dos ícones para mobile */
  }

  @media (min-width: 768px) {
    p {
      margin: 1.5rem 0;
      font-size: 1.3rem;
      line-height: 1.8;
    }

    svg {
      margin-right: 0.7rem;
      font-size: 1.5rem;
    }
  }
`;

const ContactForm = styled.form`
  flex: 1;
  width: 100%;
  max-width: 600px; /* Aumentar a largura máxima do formulário */
  padding: 1rem;

  @media (min-width: 768px) {
    padding: 2rem;
  }

  @media (min-width: 992px) {
    padding: 3rem; /* Aumentar padding em telas grandes */
  }

  input,
  textarea {
    width: 100%;
    padding: 1rem; /* Reduzir o padding para mobile */
    margin-bottom: 1rem; /* Reduzir o espaçamento entre os campos para mobile */
    background-color: #121212;
    border: 1px solid #333;
    color: #e0e0e0;
    border-radius: 6px; /* Aumentar a borda arredondada */
    font-size: 1rem; /* Ajustar o tamanho do texto dos campos para mobile */
    box-sizing: border-box;

    &:focus {
      outline: none;
      border-color: #e8314f;
      box-shadow: 0 0 8px rgba(232, 49, 79, 0.5);
    }
  }

  textarea {
    height: 150px; /* Reduzir altura do textarea para mobile */
    resize: none;
  }

  @media (min-width: 768px) {
    input,
    textarea {
      padding: 1.5rem;
      margin-bottom: 1.5rem;
      font-size: 1.2rem;
    }

    textarea {
      height: 200px; /* Aumentar altura do textarea em desktop */
    }
  }

  button {
    padding: 1rem 2rem; /* Ajustar o tamanho do botão para mobile */
    background-color: #e8314f; /* Usar a cor de destaque */
    color: #e0e0e0;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    font-size: 1rem; /* Ajustar o tamanho do texto do botão para mobile */
    font-weight: bold;
    transition: background-color 0.3s ease;
    margin-block-end: 1rem; /* Reduzir margem inferior no botão para mobile */

    &:hover {
      background-color: #ff4f70; /* Cor de hover mais clara */
    }

    @media (min-width: 768px) {
      padding: 1.5rem 3rem;
      font-size: 1.3rem;
      margin-bottom: 2rem;
    }
  }
`;

// Estilo para o Botão do WhatsApp
const WhatsAppButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background-color: #e8314f; /* Usando a cor de destaque para harmonizar */
  color: #fff;
  padding: 0.8rem 1.5rem;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 1rem;
  text-decoration: none;
  transition: background-color 0.3s ease, transform 0.3s ease;
  margin-top: 1rem; /* Espaçamento acima da frase */
  margin-bottom: 0.5rem; /* Espaçamento abaixo do botão */

  &:hover {
    background-color: #ff4f70; /* Cor de hover mais clara */
    transform: scale(1.05);
  }

  svg {
    margin-right: 0.5rem;
    font-size: 1.2rem;
    color: #fff; /* Adiciona esta linha para mudar a cor do ícone para branco */
  }

  @media (min-width: 768px) {
    font-size: 1.2rem;
    padding: 1rem 2rem;

    svg {
      font-size: 1.5rem;
    }
  }
`;

// Estilo para a Frase Motivacional
const MotivationalText = styled.p`
  font-size: 1rem;
  color: #e0e0e0;
  margin-top: 0.5rem;

  @media (min-width: 768px) {
    font-size: 1.1rem;
  }
`;

const Contact = () => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    mensagem: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Trim para remover espaços em branco
    const { nome, email, mensagem } = formData;
    if (nome.trim() && email.trim() && mensagem.trim()) {
      const templateParams = {
        from_name: nome,
        from_email: email,
        message: mensagem,
      };

      emailjs
        .send(
          'service_znmqht5', // Substitua pelo seu Service ID
          'template_ctqjsmh', // Substitua pelo seu Template ID
          templateParams,
          'FDgQZMmzpH23fYCiW' // Substitua pelo seu User ID (Public Key)
        )
        .then(
          () => {
            toast.success('Sua mensagem foi enviada com sucesso!');
            setFormData({ nome: '', email: '', mensagem: '' });
          },
          (error) => {
            console.error('Erro ao enviar e-mail:', error);
            toast.error(
              'Ocorreu um erro ao enviar sua mensagem. Por favor, tente novamente mais tarde.'
            );
          }
        );
    } else {
      toast.error('Por favor, preencha todos os campos.');
    }
  };

  return (
    <ContactSection id="Contact">
      <ContactContent>
        <SectionTitle>Entre em Contato</SectionTitle>
        <ContactWrapper>
          <ContactInfo>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <p>
                <FaEnvelope /> gabrielnfc@gmail.com
              </p>
              <p>
                <FaPhoneAlt /> +55 (27) 99259-4304
              </p>
              <p>
                <FaMapMarkerAlt /> Vitória, Espírito Santo, Brasil
              </p>
              {/* Botão do WhatsApp Adicionado */}
              <WhatsAppButton
                href="https://wa.me/5527992594304?text=Olá,%20gostaria%20de%20entrar%20em%20contato."
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
              >
                <FaWhatsapp />
                Fale Conosco pelo Whatsapp
              </WhatsAppButton>
              {/* Frase Motivacional Adicionada */}
              <MotivationalText>
                Estamos prontos para ajudar você a alcançar seus objetivos! Entre em contato agora mesmo.
              </MotivationalText>
            </motion.div>
          </ContactInfo>
          <ContactForm onSubmit={handleSubmit}>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <input
                type="text"
                name="nome"
                placeholder="Seu Nome"
                value={formData.nome}
                onChange={handleChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Seu Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <textarea
                name="mensagem"
                placeholder="Sua Mensagem"
                value={formData.mensagem}
                onChange={handleChange}
                required
              ></textarea>
              <button type="submit">Enviar Mensagem</button>
            </motion.div>
          </ContactForm>
        </ContactWrapper>
      </ContactContent>
      <ToastContainer />
    </ContactSection>
  );
};

export default Contact;