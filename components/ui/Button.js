import styles from "./Button.module.css";

export default function Button({ label, onClick, variant }) {
	const style = `${styles.container} ${styles[variant]}`;
	return (
		<button className={style} onClick={onClick}>
			{label}
		</button>
	);
}
