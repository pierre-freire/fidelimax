"use client";

import { useState, useId } from "react";
import { checkIfIncludes, returnHandledArray } from "@/util/util";

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
		return checkIfIncludes(content, arg);
	}

	function handleContent(arg: string) {
		setContent(returnHandledArray(content, arg));
	}

	return (
		<li>
			<h3 className="mb-2 text-xl">Pergunta de multipla escolha</h3>
			<ul>
				{items.map((elm: { label: string; value: string }, i) => {
					return (
						<CheckElement
							key={i}
							elm={elm}
							isChecked={isChecked}
							handleContent={handleContent}
						/>
					);
				})}
			</ul>
		</li>
	);
}

interface ICheckElement {
	elm: { label: string; value: string };
	isChecked: Function;
	handleContent: Function;
}

function CheckElement({ elm, isChecked, handleContent }: ICheckElement) {
	const elementId = useId();

	return (
		<div className="my-4">
			<input
				id={elementId}
				type="checkbox"
				className="accent-blue-950 cursor-pointer"
				checked={isChecked(elm.value)}
				onChange={() => handleContent(elm.value)}
			/>
			<label htmlFor={elementId} className="pl-2 cursor-pointer select-none">
				{elm.label}
			</label>
		</div>
	);
}

export default Checkbox;
