"use client";

import { useState } from "react";

function Text() {
	const [content, setContent] = useState("");

	return (
		<li>
			<h3 className="text-slate-700 text-xl mb-2">
				Descreva o motivo de sua avaliação
			</h3>
			<textarea
				className="outline outline-offset-2 outline-1 w-full rounded-md p-2 h-24 resize-none"
				placeholder="Digite aqui..."
				value={content}
				onChange={(e) => setContent(e.target.value)}
			/>
		</li>
	);
}

export default Text;
