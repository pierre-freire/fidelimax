"use client";

import { useState, useId } from "react";
import ErrorMessage from "../errorMessage";
import { checkIfIncludes, returnHandledArray } from "@/util/util";

interface ICheckbox {
	content: string;
	answerValue: number[] | string[] | undefined;
	index: number;
	onChangeAnswer: Function;
	itens: [{ value: number; description: string }];
	errors?: ({ questionIndex: number; message: string } | undefined)[];
}

function Checkbox({
	content,
	answerValue,
	itens,
	index,
	onChangeAnswer,
	errors,
}: ICheckbox) {
	const [values, setValues] = useState<number[] | string[] | undefined>(
		answerValue
	);

	function isChecked(arg: number) {
		return checkIfIncludes(values, arg);
	}

	function handleValues(choice: number) {
		const handledNewChoices = returnHandledArray(values, choice);
		setValues(handledNewChoices);
		onChangeAnswer(index, handledNewChoices);
	}

	function renderError() {
		if (Array.isArray(errors) && errors.length > 0) {
			return <ErrorMessage errors={errors} />;
		}
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
			{renderError()}
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
