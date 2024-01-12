"use client";

import ErrorMessage from "../errorMessage";

interface IButton {
	handleClick: Function;
	text: string;
	errors?:
		| ({ questionIndex: number; message: string } | undefined)[]
		| undefined;
}

function Button({ handleClick, text, errors }: IButton) {
	function buttonClick(e: any) {
		e.preventDefault();
		handleClick();
	}

	function renderError() {
		if (Array.isArray(errors) && errors.length > 0) {
			return (
				<ErrorMessage
					errors={[
						{
							questionIndex: 0,
							message: "Existem campos preenchidos incorretamenta!",
						},
					]}
				/>
			);
		}
	}

	return (
		<>
			<button
				onClick={(e) => buttonClick(e)}
				className="py-3 px-12 rounded-full bg-yellow-500 text-blue-950 text-lg font-black"
			>
				{text}
			</button>
			{renderError()}
		</>
	);
}

export default Button;
