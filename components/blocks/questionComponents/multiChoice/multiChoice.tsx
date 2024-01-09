"use client";

import { useState } from "react";
import { checkIfIncludes, returnHandledArray } from "@/util/util";
import styles from "./multiChoice.module.css";

interface IMultiChoice {
	content: string;
	answerValue: number[];
	itens: [{ value: number; description: string }];
	mandatory?: boolean;
}

function MultiChoice({ content, answerValue, itens, mandatory }: IMultiChoice) {
	const [values, setValues] = useState<number[]>(answerValue);

	function isChecked(arg: number) {
		return checkIfIncludes(values, arg);
	}

	function handleValues(arg: number) {
		setValues(returnHandledArray(values, arg));
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
		</div>
	);
}

export default MultiChoice;
