import styles from "./loading.module.css";

function Loading() {
	return (
		<div className="w-full flex justify-center">
			<div className={styles.loading} />
		</div>
	);
}

export default Loading;
