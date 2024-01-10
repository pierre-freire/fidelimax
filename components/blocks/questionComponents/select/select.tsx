"use client";

import { useState } from "react";

interface ISelect {
	answerValue: string;
	content: string;
	index: number;
	onChangeAnswer: Function;
	itens: [
		{
			description: string;
			value: number;
		}
	];
	mandatory?: boolean;
}

function Select({
	answerValue = "",
	content,
	itens,
	index,
	onChangeAnswer,
	mandatory,
}: ISelect) {
	const [value, setValue] = useState<string>(answerValue);

	function handleChoice(option: string) {
		setValue(option);
		onChangeAnswer(index, option);
	}

	return (
		<div className="w-full">
			<select
				className="outline outline-offset-2 outline-1 rounded-md p-3 cursor-pointer w-full"
				value={value}
				onChange={(e) => handleChoice(e.target.value)}
			>
				<option value="" disabled hidden>
					{content}
				</option>
				{itens.map((elm, i) => {
					return (
						<option value={elm.value} className="p-4" key={i}>
							{elm.description}
						</option>
					);
				})}
			</select>
		</div>
	);
}

export default Select;
