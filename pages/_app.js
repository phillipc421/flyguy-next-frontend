import SiteWrapper from "../components/layout/SiteWrapper";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
	return (
		<SiteWrapper>
			<Component {...pageProps} />
		</SiteWrapper>
	);
}

export default MyApp;
