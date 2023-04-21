import Header from "./Header";
import Footer from "./Footer";
import styles from "./SiteWrapper.module.css";
export default function SiteWrapper({ children }) {
	return (
		<main className={styles.container}>
			<Header>
				<p>FLYGUY Hair</p>
			</Header>
			{children}
			<Footer>
				<p>&#169; {new Date().getFullYear()} FLYGUY Hair LLC</p>
			</Footer>
		</main>
	);
}
