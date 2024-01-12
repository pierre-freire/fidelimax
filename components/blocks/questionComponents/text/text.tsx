"use client";

import { useState } from "react";
import ErrorMessage from "../errorMessage";

interface IText {
	answerValue?: string;
	content: string;
	index: number;
	onChangeAnswer: Function;
	errors?: ({ questionIndex: number; message: string } | undefined)[];
}

function Text({
	answerValue = "",
	content,
	index,
	onChangeAnswer,
	errors,
}: IText) {
	const [value, setValue] = useState<string>(answerValue);

	function handleChoice(text: string) {
		setValue(text);
		onChangeAnswer(index, text);
	}

	function renderError() {
		if (Array.isArray(errors) && errors.length > 0) {
			return <ErrorMessage errors={errors} />;
		}
	}

	return (
		<div>
			<h3 className="text-slate-700 text-xl mb-2">{content}</h3>
			<textarea
				className="outline outline-offset-2 outline-1 w-full rounded-md p-2 h-24 resize-none"
				placeholder="Digite aqui..."
				value={value}
				onChange={(e) => handleChoice(e.target.value)}
			/>
			{renderError()}
		</div>
	);
}

export default Text;
