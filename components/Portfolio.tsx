// components/Portfolio.tsx

import styled from 'styled-components';
import { motion } from 'framer-motion';
import {
	FaReact,
	FaNodeJs,
	FaDatabase,
	FaGithub,
	FaPython,
	FaRobot,
	FaExternalLinkAlt,
	FaProjectDiagram,
	FaBrain,
	FaJsSquare,
} from 'react-icons/fa';
import {
	SiTypescript,
	SiNextdotjs,
	SiMongodb,
	SiExpress,
	SiStyledcomponents,
	SiPostgresql,
	SiMysql,
} from 'react-icons/si';

const PortfolioSection = styled.section`
	padding: 2rem 1rem;
	background-color: #121212;
	color: #e0e0e0;
	margin-block-end: 4rem;
`;

const SectionTitle = styled.h2`
	text-align: center;
	font-size: 2.5rem;
	margin-block-end: 3rem;
	position: relative;

	&::after {
		content: '';
		width: 100px;
		height: 4px;
		background-color: #e8314f;
		display: block;
		margin: 1rem auto 0;
		border-radius: 2px;
	}
`;

const PortfolioGrid = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
	gap: 2.5rem;
`;

const PortfolioItem = styled(motion.div)`
	background-color: #1e1e1e;
	padding: 1.5rem;
	border-radius: 12px;
	color: #e0e0e0;
	box-shadow: 0 4px 6px rgba(0, 0, 0, 0.5);
	transition: transform 0.3s ease, box-shadow 0.3s ease;
	cursor: pointer;
	display: flex;
	flex-direction: column;
	align-items: center;

	&:hover {
		transform: translateY(-10px);
		box-shadow: 0 8px 12px rgba(0, 0, 0, 0.7);
	}
`;

const IconWrapper = styled.div`
	font-size: 3rem;
	margin-bottom: 1rem;
	color: #e8314f;
`;

const ProjectTitle = styled.h3`
	font-size: 1.8rem;
	margin-bottom: 1rem;
`;

const ProjectDescription = styled.p`
	font-size: 1rem;
	margin-bottom: 1.5rem;
	line-height: 1.6;
	text-align: center;
`;

const TechStack = styled.div`
	display: flex;
	gap: 0.5rem;
	flex-wrap: wrap;
	justify-content: center;
	margin-bottom: 1.5rem;
`;

const TechIcon = styled.div`
	font-size: 1.5rem;
	color: #e0e0e0;

	&:hover {
		color: #e8314f;
		transform: scale(1.2);
		transition: transform 0.2s ease, color 0.2s ease;
	}
`;

const ProjectLink = styled.a`
	display: inline-flex;
	align-items: center;
	gap: 0.5rem;
	color: #e8314f;
	font-weight: bold;
	text-decoration: none;
	transition: color 0.3s ease;
	margin: 0.5rem;

	&:hover {
		color: #ff4f70;
	}
`;

const Portfolio = () => {
	const projects = [
		{
			id: 1,
			title: 'StoreMax',
			description:
				'Plataforma de e-commerce completa com integração de pagamentos, gerenciamento de estoque e suporte a múltiplos fornecedores.',
			icon: <FaReact />,
			techStack: [
				{ icon: <FaReact />, key: 'react' },
				{ icon: <SiNextdotjs />, key: 'nextjs' },
				{ icon: <SiTypescript />, key: 'typescript' },
				{ icon: <FaNodeJs />, key: 'nodejs' },
				{ icon: <SiExpress />, key: 'express' },
				{ icon: <SiPostgresql />, key: 'postgresql' },
				{ icon: <SiStyledcomponents />, key: 'styledcomponents' },
			],
			demoLink: 'https://github.com/gabrielnfc',
			repoLink: 'https://github.com/gabrielnfc',
		},
		{
			id: 2,
			title: 'ShopBot AI',
			description:
				'Chatbot inteligente para atendimento ao cliente em lojas virtuais, utilizando inteligência artificial para melhorar a experiência do usuário.',
			icon: <FaRobot />,
			techStack: [
				{ icon: <FaJsSquare />, key: 'javascript' },
				{ icon: <FaNodeJs />, key: 'nodejs' },
				{ icon: <FaReact />, key: 'react' },
				{ icon: <FaProjectDiagram />, key: 'automation' },
				{ icon: <FaPython />, key: 'python' },
				{ icon: <SiMysql />, key: 'mysql' },
				{ icon: <SiStyledcomponents />, key: 'styledcomponents' },
			],
			demoLink: 'https://github.com/gabrielnfc',
			repoLink: 'https://github.com/gabrielnfc',
		},
		{
			id: 3,
			title: 'Automações n8n',
			description:
				'Soluções de automação de processos de negócio utilizando n8n, integrando sistemas de e-commerce com CRM, ERP e plataformas de marketing.',
			icon: <FaProjectDiagram />,
			techStack: [
				{ icon: <FaProjectDiagram />, key: 'automation' },
				{ icon: <FaNodeJs />, key: 'nodejs' },
				{ icon: <FaDatabase />, key: 'database' },
				{ icon: <SiExpress />, key: 'express' },
				{ icon: <SiMongodb />, key: 'mongodb' },
			],
			demoLink: 'https://github.com/gabrielnfc',
			repoLink: 'https://github.com/gabrielnfc',
		},
		{
			id: 4,
			title: 'AI Sales Booster',
			description:
				'Ferramenta de inteligência artificial que analisa dados de vendas e fornece insights para aumentar a conversão em lojas online.',
			icon: <FaBrain />,
			techStack: [
				{ icon: <FaPython />, key: 'python' },
				{ icon: <FaNodeJs />, key: 'nodejs' },
				{ icon: <SiExpress />, key: 'express' },
				{ icon: <FaReact />, key: 'react' },
				{ icon: <SiMongodb />, key: 'mongodb' },
				{ icon: <SiStyledcomponents />, key: 'styledcomponents' },
			],
			demoLink: 'https://github.com/gabrielnfc',
			repoLink: 'https://github.com/gabrielnfc',
		},
	];

	return (
		<PortfolioSection id="Portfolio">
			<SectionTitle>Projetos de E-commerce</SectionTitle>
			<PortfolioGrid>
				{projects.map((project) => (
					<PortfolioItem
						key={project.id}
						initial={{ opacity: 0, y: 50 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.5, ease: 'easeOut' }}
					>
						<IconWrapper>{project.icon}</IconWrapper>
						<ProjectTitle>{project.title}</ProjectTitle>
						<ProjectDescription>{project.description}</ProjectDescription>
						<TechStack>
							{project.techStack.map((tech) => (
								<TechIcon key={tech.key}>{tech.icon}</TechIcon>
							))}
						</TechStack>
						<div>
							<ProjectLink
								href={project.demoLink}
								target="_blank"
								rel="noopener noreferrer"
							>
								Demo <FaExternalLinkAlt />
							</ProjectLink>
							<ProjectLink
								href={project.repoLink}
								target="_blank"
								rel="noopener noreferrer"
							>
								Repositório <FaGithub />
							</ProjectLink>
						</div>
					</PortfolioItem>
				))}
			</PortfolioGrid>
		</PortfolioSection>
	);
};

export default Portfolio;
