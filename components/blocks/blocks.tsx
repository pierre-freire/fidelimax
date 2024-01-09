"use client";

import { useState, useEffect } from "react";
import Star from "./questionComponents/star";
import Radio from "./questionComponents/radio";
import Text from "./questionComponents/text";
import Select from "./questionComponents/select";
import MultiChoice from "./questionComponents/multiChoice";
import Checkbox from "./questionComponents/checkbox";
import Button from "./questionComponents/button";
import { getAllQuestions, postError, getError, getSuccess } from "@/util/API";

function Blocks() {
	const [questions, setQuestions] = useState([]);

	useEffect(() => {
		async function getQuestions() {
			const data = await getAllQuestions();
			setQuestions(data.itens);
		}

		getQuestions();
	}, []);

	function handleBlocks(
		elm: {
			answerValue: string;
			content: string;
			typeQuestion: number;
			horizontal?: boolean;
			itens: [
				{
					description: string;
					value: number;
				}
			];
			mandatory?: boolean;
		},
		i: number
	) {
		switch (elm.typeQuestion) {
			case 1:
				return (
					<Star
						key={i}
						answerValue={parseInt(elm.answerValue)}
						content={elm.content}
						mandatory={elm.mandatory}
					/>
				);
				break;
			case 2:
				return (
					<Radio
						key={i}
						multi={true}
						answerValue={parseInt(elm.answerValue)}
						content={elm.content}
					/>
				);
				break;
			case 3:
				return (
					<Text key={i} answerValue={elm.answerValue} content={elm.content} />
				);
				break;
			case 4:
				return (
					<Select
						key={i}
						answerValue={elm.answerValue}
						content={elm.content}
						mandatory={elm.mandatory}
						itens={elm.itens}
					/>
				);
				break;
			case 5:
				return (
					<Radio
						key={i}
						multi={false}
						answerValue={!!elm.answerValue}
						content={elm.content}
					/>
				);
				break;
			case 6:
				const arrayOfNums = elm.answerValue?.split("").map((str) => {
					return parseInt(str, 10);
				});

				if (elm.horizontal) {
					return (
						<MultiChoice
							key={i}
							answerValue={arrayOfNums}
							content={elm.content}
							itens={elm.itens}
							mandatory={elm.mandatory}
						/>
					);
				} else {
					return (
						<Checkbox
							key={i}
							answerValue={arrayOfNums}
							content={elm.content}
							itens={elm.itens}
							mandatory={elm.mandatory}
						/>
					);
				}

				break;
			default:
				return <></>;
				break;
		}
	}

	return (
		<div className="max-w-xl">
			<h2 className="font-bold text-white text-4xl mb-4">
				Pesquisa de Satisfação
			</h2>

			<form className="bg-white p-7 rounded-xl flex flex-col gap-12 list-none">
				{questions.map((elm, i) => {
					return handleBlocks(elm, i);
				})}

				<div className="flex flex-wrap gap-2 justify-center">
					<Button text="Enviar Fake Post" handleClick={postError} />
					<Button text="Enviar Error" handleClick={getError} />
					<Button text="Enviar Sucesso" handleClick={getSuccess} />
				</div>
			</form>
		</div>
	);
}

export default Blocks;
