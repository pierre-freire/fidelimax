import styles from "./modal.module.css";

interface IModal {
	title: string;
	message: string;
	show: boolean;
	closeFunction: Function;
}

function Modal({ title, message, show, closeFunction }: IModal) {
	return (
		<div
			className={`fixed z-1 p-4 text-white rounded-lg ${
				show ? "block" : "hidden"
			} ${styles.container}`}
		>
			<div className="flex flex-col items-center gap-4">
				<h3 className="text-2xl">{title}</h3>
				<p className="text-center">{message}</p>
				<button
					className="py-3 px-12 rounded-full bg-yellow-500 text-blue-950 text-lg font-black"
					onClick={() => closeFunction()}
				>
					Fechar
				</button>
			</div>
		</div>
	);
}

export default Modal;
