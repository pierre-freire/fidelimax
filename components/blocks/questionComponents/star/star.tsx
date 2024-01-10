"use client";

import { useState } from "react";
import GrayStar from "@/public/gray-star.svg";
import GoldStar from "@/public/gold-star.svg";
import ErrorMessage from "../errorMessage";
import Image from "next/image";

interface IStar {
	answerValue: number;
	content: string;
	index: number;
	onChangeAnswer: Function;
	errors?: { questionIndex: number; message: string }[];
}

function Star({ answerValue, content, index, onChangeAnswer, errors }: IStar) {
	const [value, setValue] = useState<number>(answerValue);

	function handleChoice(numberOfStars: number) {
		setValue(numberOfStars);
		onChangeAnswer(index, numberOfStars);
	}

	function renderError() {
		if (Array.isArray(errors) && errors.length > 0) {
			return <ErrorMessage errors={errors} />;
		}
	}

	return (
		<div>
			<h3 className="text-slate-700 text-2xl font-extrabold mb-2">
				Título da pergunta deve ficar aqui
			</h3>
			<p className="text-slate-700 text-lg mb-2">{content}</p>
			<ul className="flex items-center gap-8">
				{Array.from({ length: 5 }, (_, i) => i + 1).map((elm, i) => {
					return (
						<li
							key={i}
							className="cursor-pointer"
							onClick={() => handleChoice(elm)}
						>
							<Image
								src={i >= value ? GrayStar : GoldStar}
								width={40}
								height={40}
								alt="Picture of the star"
							/>
						</li>
					);
				})}
			</ul>
			{renderError()}
		</div>
	);
}

export default Star;
