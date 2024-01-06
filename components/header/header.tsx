import Image from "next/image";
import logo from "@/public/menu.svg";
import arrow from "@/public/arrow-down.svg";
import styles from "./header.module.css";

function Header() {
	return (
		<header className={styles.container}>
			<div className={styles.logo}>
				<Image
					src={logo}
					width={24}
					height={24}
					alt="Picture of the logo"
					priority
				/>
				<h1 className={styles["logo-title"]}>
					SUA <span className={styles["logo-span"]}>LOGO</span>
				</h1>
			</div>
			<div className={styles.user}>
				<p className={styles["user-letter"]}>N</p>
				<p>Nome do usuário aqui</p>
				<Image
					src={arrow}
					width={24}
					height={24}
					alt="Picture of the arrow"
					priority
				/>
			</div>
		</header>
	);
}

export default Header;
