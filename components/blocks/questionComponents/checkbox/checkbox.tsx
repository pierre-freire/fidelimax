"use client";

import { useState, useId } from "react";
import { checkIfIncludes, returnHandledArray } from "@/util/util";

interface ICheckbox {
	content: string;
	answerValue: number[];
	itens: [{ value: number; description: string }];
	mandatory?: boolean;
}

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

function Checkbox({ content, answerValue, itens, mandatory }: ICheckbox) {
	const [values, setValues] = useState<number[]>(answerValue);

	function isChecked(arg: number) {
		return checkIfIncludes(values, arg);
	}

	function handleValues(arg: number) {
		setValues(returnHandledArray(values, arg));
	}

	return (
		<li>
			<h3 className="mb-2 text-xl">{content}</h3>
			<ul>
				{itens.map((elm: { description: string; value: number }, i) => {
					return (
						<CheckElement
							key={i}
							elm={elm}
							isChecked={isChecked}
							handleValues={handleValues}
						/>
					);
				})}
			</ul>
		</li>
	);
}

interface ICheckElement {
	elm: { description: string; value: number };
	isChecked: Function;
	handleValues: Function;
}

function CheckElement({ elm, isChecked, handleValues }: ICheckElement) {
	const elementId = useId();

	return (
		<div className="my-4">
			<input
				id={elementId}
				type="checkbox"
				className="accent-blue-950 cursor-pointer"
				checked={isChecked(elm.value)}
				onChange={() => handleValues(elm.value)}
			/>
			<label htmlFor={elementId} className="pl-2 cursor-pointer select-none">
				{elm.description}
			</label>
		</div>
	);
}

export default Checkbox;
