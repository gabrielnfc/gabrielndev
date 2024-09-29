// pages/index.tsx

import type { NextPage } from 'next';
import Head from 'next/head';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Portfolio from '../components/Portfolio';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Home: NextPage = () => {
	return (
		<>
			<Head>
				<link rel="icon" href="/images/icon1.ico" />
				<title> Gabriel Nascimento | Frontend Web Developer </title>
				<meta charSet="utf-8" />
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
			</Head>
			<Navbar />
			<main>
				<Hero />
				<About />
				<Portfolio />
				<Contact />
			</main>
			<Footer />
		</>
	);
};

export default Home;
