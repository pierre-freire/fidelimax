"use client";

import { useState } from "react";
import { checkIfIncludes, returnHandledArray } from "@/util/util";
import styles from "./multiChoice.module.css";

const items = [
	{ label: "OPÇÃO 1", value: "opc_01" },
	{ label: "OPÇÃO 2", value: "opc_02" },
	{ label: "OPÇÃO 3", value: "opc_03" },
	{ label: "OPÇÃO 4", value: "opc_04" },
	{ label: "OPÇÃO 5", value: "opc_05" },
	{ label: "OPÇÃO 6", value: "opc_06" },
	{ label: "OPÇÃO 7", value: "opc_07" },
	{ label: "OPÇÃO 8", value: "opc_08" },
];

function MultiChoice() {
	const [content, setContent] = useState<string[]>([]);

	function isChecked(arg: string) {
		return checkIfIncludes(content, arg);
	}

	function handleContent(arg: string) {
		setContent(returnHandledArray(content, arg));
	}

	return (
		<div>
			<h3 className="mb-2 text-xl">Pergunta de múltipla escolha</h3>
			<ul className="flex gap-2 flex-wrap my-2">
				{items.map((elm, i) => {
					return (
						<li
							key={i}
							className={`py-2 px-4 border-solid border-2 border-slate-200 rounded-full cursor-pointer select-none ${
								isChecked(elm.value) ? styles.selected : ""
							}`}
							onClick={() => handleContent(elm.value)}
						>
							{elm.label}
						</li>
					);
				})}
			</ul>
		</div>
	);
}

export default MultiChoice;
