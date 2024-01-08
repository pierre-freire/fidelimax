"use client";

import { useState } from "react";

const items = [
	{ label: "OPC 1", value: "opc_01" },
	{ label: "OPC 2", value: "opc_02" },
	{ label: "OPC 3", value: "opc_03" },
	{ label: "OPC 4", value: "opc_04" },
	{ label: "OPC 5", value: "opc_05" },
	{ label: "OPC 6", value: "opc_06" },
	{ label: "OPC 7", value: "opc_07" },
	{ label: "OPC 8", value: "opc_08" },
	{ label: "OPC 9", value: "opc_09" },
	{ label: "OPC 10", value: "opc_10" },
];

function Checkbox() {
	const [content, setContent] = useState<string[]>([]);

	function isChecked(arg: string) {
		return content.includes(arg);
	}

	function handleContent(arg: string) {
		if (isChecked(arg)) {
			const newArray = content.filter((item) => {
				return item !== arg;
			});

			setContent(newArray);
		} else {
			const newArray = [...content, arg];

			setContent(newArray);
		}
	}

	return (
		<li>
			<h3 className="mb-2 text-xl">Pergunta de multipla escolha</h3>
			<ul>
				{items.map((elm, i) => {
					return (
						<li key={i}>
							<input
								type="checkbox"
								className="mr-2 accent-blue-950"
								checked={isChecked(elm.value)}
								onChange={() => handleContent(elm.value)}
							/>
							<label>{elm.label}</label>
						</li>
					);
				})}
			</ul>
		</li>
	);
}

export default Checkbox;
