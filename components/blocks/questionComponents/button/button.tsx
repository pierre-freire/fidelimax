"use client";

interface IButton {
	handleClick: Function;
	text: string;
}

function Button({ handleClick, text }: IButton) {
	function buttonClick(e: any) {
		e.preventDefault();
		handleClick();
	}

	return (
		<button
			onClick={(e) => buttonClick(e)}
			className=" py-3 px-12 rounded-full bg-yellow-500 text-blue-950 text-lg font-black"
		>
			{text}
		</button>
	);
}

export default Button;
