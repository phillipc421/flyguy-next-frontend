import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "../styles/globals.css";

const theme = createTheme({
	palette: {
		primary: {
			main: "#3c3c3c",
		},
		secondary: {
			main: "#ffffff",
		},
	},
});
function MyApp({ Component, pageProps }) {
	return (
		<ThemeProvider theme={theme}>
			<Component {...pageProps} />
		</ThemeProvider>
	);
}

export default MyApp;
