"use client";

import { useState } from "react";

interface IText {
	answerValue?: string;
	content: string;
	index: number;
	mandatory?: boolean;
}

function Text({ answerValue = "", content, mandatory }: IText) {
	const [value, setValue] = useState<string>(answerValue);

	return (
		<div>
			<h3 className="text-slate-700 text-xl mb-2">{content}</h3>
			<textarea
				className="outline outline-offset-2 outline-1 w-full rounded-md p-2 h-24 resize-none"
				placeholder="Digite aqui..."
				value={value}
				onChange={(e) => setValue(e.target.value)}
			/>
		</div>
	);
}

export default Text;
