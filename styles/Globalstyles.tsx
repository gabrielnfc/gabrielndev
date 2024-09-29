// styles/GlobalStyles.ts

import {
	createGlobalStyle,
	ThemeProvider as StyledThemeProvider,
} from 'styled-components';
import { Lexend } from 'next/font/google';

const lexend = Lexend({
	subsets: ['latin'],
	weight: ['400'],
});

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background-color: ${({ theme }) => theme.bodyBackgroundColor};
    color: ${({ theme }) => theme.bodyTextColor};
    font-family: 'Lexend', sans-serif;
    transition: background-color 0.3s ease, color 0.3s ease;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  /* Outros estilos globais */
`;

const theme = {
	bodyBackgroundColor: '#121212', // Preto
	bodyTextColor: '#e0e0e0', // Cinza claro
	// Adicione outras cores conforme necessário
};

const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
	children,
}) => (
	<StyledThemeProvider theme={theme}>
		<GlobalStyle />
		{children}
	</StyledThemeProvider>
);

export { GlobalStyle, ThemeProvider, lexend };