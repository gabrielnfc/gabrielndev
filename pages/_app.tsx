// pages/_app.tsx

import type { AppProps } from 'next/app';
import { ThemeProvider } from '../styles/Globalstyles';
import BackToTop from '../components/BackToTop'; // Importe o componente BackToTop

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<ThemeProvider>
			<Component {...pageProps} />
			<BackToTop /> {/* Adicione o botão aqui */}
		</ThemeProvider>
	);
}

export default MyApp;