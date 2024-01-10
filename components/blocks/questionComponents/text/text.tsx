"use client";

import { useState } from "react";

interface IText {
	answerValue?: string;
	content: string;
	index: number;
	onChangeAnswer: Function;
	mandatory?: boolean;
}

function Text({
	answerValue = "",
	content,
	index,
	onChangeAnswer,
	mandatory,
}: IText) {
	const [value, setValue] = useState<string>(answerValue);

	function handleChoice(text: string) {
		setValue(text);
		onChangeAnswer(index, text);
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
		</div>
	);
}

export default Text;
