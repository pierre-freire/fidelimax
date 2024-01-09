import Header from "@/components/header";
import Blocks from "@/components/blocks";

import styles from "./page.module.css";

export default function Home() {
	return (
		<div className="bg-slate-100">
			<Header />
			<main className={`px-4 py-8 w-full ${styles.main}`}>
				<p className="text-sm text-slate-300">Pesquisa de Satisfação</p>
				<section className="w-full flex justify-center">
					<Blocks />
				</section>
			</main>
		</div>
	);
}
