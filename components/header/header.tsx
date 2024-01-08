import Image from "next/image";
import logo from "@/public/menu.svg";
import arrow from "@/public/arrow-down.svg";
import styles from "./header.module.css";

function Header() {
	return (
		<header
			className={`text-white bg-blue-950 p-4 flex justify-between ${styles.container}`}
		>
			<div className="flex items-center gap-2">
				<Image
					src={logo}
					width={24}
					height={24}
					alt="Picture of the logo"
					priority
				/>
				<h1 className="text-2xl">
					SUA <span className="text-yellow-500 font-black">LOGO</span>
				</h1>
			</div>
			<div className="flex items-center gap-4">
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
