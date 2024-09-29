// components/About.tsx

import styled from 'styled-components';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaGithub, FaLinkedin, FaInstagram, FaWhatsapp } from 'react-icons/fa';

const AboutSection = styled.section`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 0rem 5vw;
	background-color: #121212;
	color: #e0e0e0;
	max-width: 100vw; // Adicionado para garantir que o conteúdo não ultrapasse a largura da tela
	overflow-x: hidden; // Adicionado para evitar rolagem horizontal
`;

const SectionTitle = styled.h2`
	font-size: 2.5rem;
	margin-block-end: 3rem;
	text-align: center;
	position: relative;

	&::after {
		content: '';
		inline-size: 80px;
		block-size: 4px;
		background-color: #e8314f;
		display: block;
		margin: 1rem auto 0;
		border-radius: 2px;
	}
`;

const ContentWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 0; // Removido o padding lateral
	margin-block-start: -3rem;
	max-inline-size: 70%; // Alterado para garantir que o conteúdo ocupe toda a largura disponível

	@media (min-width: 768px) {
		flex-direction: row;
		align-items: center;
		justify-content: center;
	}
`;

const ProfileImageWrapper = styled(motion.div)`
	flex: 1;
	display: flex;
	margin: 0;
	padding: 1.5rem;
	max-inline-size: 100%; // Alterado para garantir que a imagem ocupe toda a largura disponível
	margin-inline-end: 0; // Removido o margin-inline-end para evitar deslocamento

	img {
		inline-size: 100%;
		block-size: auto;
		max-block-size: 500px; // Adicionado para diminuir a altura da imagem
		max-inline-size: 100%; // Alterado para garantir que a imagem ocupe toda a largura disponível
		object-fit: contain; // Alterado para garantir que a imagem seja exibida completamente
	}
`;

const AboutContent = styled(motion.div)`
	flex: 1;
	display: flex;
	flex-direction: column;
	text-align: justify;
	padding: 0;
	margin: 0;
	max-inline-size: 100%; // Adicionado para garantir que o conteúdo ocupe toda a largura disponível

	p {
		font-size: 1.1rem;
		line-height: 1.6;
		margin-block-end: 1.5rem; // Diminuído o margin-bottom para reduzir a altura da descrição
	}
`;

const SocialLinks = styled.div`
	display: flex;
	gap: 1.5rem;
	margin: 1rem 0;
	justify-content: center;
	flex-wrap: wrap; // Adicionado para garantir que os ícones se ajustem em telas menores

	a {
		color: #e0e0e0;
		font-size: 3rem;
		transition: color 0.3s ease, transform 0.3s ease; // Adicionado transform para o efeito de aumento

		&:hover {
			color: #e8314f;
			transform: scale(1.2); // Adicionado para aumentar o tamanho dos ícones
		}
	}
`;

const Achievements = styled.div`
	display: flex;
	gap: 2rem;
	margin-block-start: 0rem;
	justify-content: center;
	flex-wrap: wrap; // Adicionado para garantir que os itens se ajustem em telas menores
`;

const Achievement = styled.div`
	text-align: center;

	h3 {
		font-size: 1.5rem;
		color: #e8314f;
		margin-bottom: 0.5rem;
	}

	p {
		font-size: 1rem;
	}
`;

const About = () => {
	return (
		<AboutSection id="About">
			<SectionTitle>Sobre Mim</SectionTitle>
			<ContentWrapper>
				<ProfileImageWrapper
					initial={{ opacity: 0, x: -50 }}
					whileInView={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.5 }}
					viewport={{ once: true }}
				>
					<Image
						src="/images/profile.png"
						alt="Imagem de Perfil"
						width={600}
						height={600}
						layout="responsive"
					/>
				</ProfileImageWrapper>
				<AboutContent
					initial={{ opacity: 0, x: 50 }}
					whileInView={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.5 }}
					viewport={{ once: true }}
				>
					<p>
						Olá! Sou <strong>Gabriel Nascimento</strong>, desenvolvedor frontend
						especializado em criar soluções digitais que impulsionam vendas e
						aumentam conversões no universo do <strong>e-commerce</strong>. Com
						mais de <strong>5 anos de experiência</strong>, ajudo lojas,
						serviços e produtos a se destacarem no mercado online através de
						websites e <strong>landing pages</strong> otimizadas para gerar
						resultados concretos.
						<br />
						<br />
						Além disso, ofereço serviços de{' '}
						<strong>implementação de chatbots no WhatsApp</strong> e{' '}
						<strong>automações de atendimento utilizando N8N</strong>,
						proporcionando um atendimento ao cliente mais eficiente e
						personalizado. Minhas habilidades em{' '}
						<strong>inteligência artificial</strong> permitem criar soluções
						inovadoras que aumentam o faturamento e melhoram a experiência do
						usuário.
						<br />
						<br />
						Se você deseja levar seu negócio a um novo patamar, melhorar suas
						taxas de conversão e conquistar mais clientes, estou aqui para
						ajudar. Vamos juntos transformar seu e-commerce em uma máquina de
						vendas eficiente e lucrativa. <strong>Entre em contato</strong> e
						descubra como podemos alcançar seus objetivos de negócio!
					</p>
				</AboutContent>
			</ContentWrapper>
			{/* Ícones das Redes Sociais */}
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
			{/* Conquistas */}
			<Achievements>
				<Achievement>
					<h3>5+</h3>
					<p>Anos de Experiência</p>
				</Achievement>
				<Achievement>
					<h3>30+</h3>
					<p>Projetos de E-commerce</p>
				</Achievement>
				<Achievement>
					<h3>Resultados Comprovados</h3>
					<p>Aumento de Vendas e Conversões</p>
				</Achievement>
			</Achievements>
		</AboutSection>
	);
};

export default About;
