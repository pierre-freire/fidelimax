"use client";

import { useState } from "react";

function MultiRadio() {
	const [selected, setSelected] = useState<String>("");

	function handleChoice(arg: String) {
		if (arg === selected) return setSelected("");
		setSelected(arg);
	}

	return (
		<li>
			<h3 className="text-slate-700 text-2xl font-extrabold mb-2">
				Título da pergunta deve ficar aqui
			</h3>
			<p className="text-slate-700 text-lg mb-2">
				Tambem é importante ter um espaço para o dono da loja colocar uma
				descrição da pergunta para ajudar o entendimento do usuario
			</p>
			<ul className="flex justify-between">
				{["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"].map((elm, i) => {
					return (
						<li
							key={i}
							className="flex flex-col items-center cursor-pointer"
							onClick={() => handleChoice(elm)}
						>
							<input
								type="radio"
								checked={selected === elm}
								onChange={(e) => handleChoice(elm)}
								className=" cursor-pointer"
							/>
							<p className="mt-2">{i + 1}</p>
						</li>
					);
				})}
			</ul>
		</li>
	);
}

export default MultiRadio;
