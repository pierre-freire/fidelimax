"use client";

import { useState } from "react";

function Select() {
	const [content, setContent] = useState("");

	return (
		<div className="w-full">
			<select
				className="outline outline-offset-2 outline-1 rounded-md p-3 cursor-pointer w-full"
				value={content}
				onChange={(e) => setContent(e.target.value)}
			>
				<option value="" disabled hidden>
					Qual loja você frequenta?
				</option>
				<option value="loja01" className="p-4">
					Loja 1
				</option>
				<option value="loja02">Loja 2</option>
				<option value="loja03">Loja 3</option>
				<option value="loja04">Loja 4</option>
			</select>
		</div>
	);
}

export default Select;
