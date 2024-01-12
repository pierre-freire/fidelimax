"use client";

import { useState } from "react";
import { checkIfIncludes, returnHandledArray } from "@/util/util";
import ErrorMessage from "../errorMessage";
import styles from "./multiChoice.module.css";

interface IMultiChoice {
	content: string;
	answerValue: number[] | string[] | undefined;
	index: number;
	onChangeAnswer: Function;
	itens: [{ value: number; description: string }];
	errors?: ({ questionIndex: number; message: string } | undefined)[];
}

function MultiChoice({
	content,
	answerValue,
	itens,
	index,
	onChangeAnswer,
	errors,
}: IMultiChoice) {
	const [values, setValues] = useState<number[] | string[] | undefined>(
		answerValue
	);

	function isChecked(choices: number) {
		return checkIfIncludes(values, choices);
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
		<div>
			<h3 className="mb-2 text-xl">{content}</h3>
			<ul className="flex gap-2 flex-wrap my-2">
				{itens.map((elm, i) => {
					return (
						<li
							key={i}
							className={`py-2 px-4 border-solid border-2 border-slate-200 rounded-full cursor-pointer select-none ${
								isChecked(elm.value) ? styles.selected : ""
							}`}
							onClick={() => handleValues(elm.value)}
						>
							{elm.description}
						</li>
					);
				})}
			</ul>
			{renderError()}
		</div>
	);
}

export default MultiChoice;
