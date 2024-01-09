"use client";

import { useState, useEffect } from "react";
import Loading from "../loading";
import Star from "./questionComponents/star";
import Radio from "./questionComponents/radio";
import Text from "./questionComponents/text";
import Select from "./questionComponents/select";
import MultiChoice from "./questionComponents/multiChoice";
import Checkbox from "./questionComponents/checkbox";
import Button from "./questionComponents/button";
import { getAllQuestions, postError, getError, getSuccess } from "@/util/API";

interface IQuestion {
	content: string;
	typeQuestion: number;
	answerValue: string;
	mandatory?: boolean;
	horizontal?: boolean;
	itens: [{ description: string; value: number }];
}

function Blocks() {
	const [questions, setQuestions] = useState<IQuestion[]>([]);

	useEffect(() => {
		async function getQuestions() {
			const data = await getAllQuestions();
			setQuestions(data.itens);
		}

		getQuestions();
	}, []);

	useEffect(() => {
		console.log(questions);
	}, [questions]);

	function handleAnswerList(questionIndex: number, answer: string) {
		let newQuestionAnswer = questions[questionIndex];
		newQuestionAnswer.answerValue = answer;

		const newQuestionArray = questions.map((q, i) =>
			i !== questionIndex ? q : newQuestionAnswer
		);

		setQuestions(newQuestionArray);
	}

	function handleBlocks(index: number, elm: IQuestion) {
		switch (elm.typeQuestion) {
			case 1:
				return (
					<Star
						key={index}
						index={index}
						answerValue={parseInt(elm.answerValue)}
						content={elm.content}
						onChangeAnswer={handleAnswerList}
						mandatory={elm.mandatory}
					/>
				);
			case 2:
				return (
					<Radio
						key={index}
						index={index}
						multi={true}
						answerValue={parseInt(elm.answerValue)}
						content={elm.content}
					/>
				);
			case 3:
				return (
					<Text
						key={index}
						index={index}
						answerValue={elm.answerValue}
						content={elm.content}
					/>
				);
			case 4:
				return (
					<Select
						key={index}
						index={index}
						answerValue={elm.answerValue}
						content={elm.content}
						mandatory={elm.mandatory}
						itens={elm.itens}
					/>
				);
			case 5:
				return (
					<Radio
						key={index}
						index={index}
						multi={false}
						answerValue={!!elm.answerValue}
						content={elm.content}
					/>
				);
			case 6:
				const arrayOfNums = elm.answerValue?.split("").map((str) => {
					return parseInt(str, 10);
				});

				if (elm.horizontal) {
					return (
						<MultiChoice
							key={index}
							index={index}
							answerValue={arrayOfNums}
							content={elm.content}
							itens={elm.itens}
							mandatory={elm.mandatory}
						/>
					);
				} else {
					return (
						<Checkbox
							key={index}
							index={index}
							answerValue={arrayOfNums}
							content={elm.content}
							itens={elm.itens}
							mandatory={elm.mandatory}
						/>
					);
				}
			default:
				return <></>;
		}
	}

	return (
		<div className="max-w-xl">
			<h2 className="font-bold text-white text-4xl mb-4">
				Pesquisa de Satisfação
			</h2>

			<form className="bg-white p-7 rounded-xl flex flex-col gap-12 list-none">
				{questions?.length > 0 ? (
					<>
						{questions.map((elm, i) => {
							return handleBlocks(i, elm);
						})}

						<div className="flex flex-wrap gap-2 justify-center">
							<Button text="Enviar Fake Post" handleClick={postError} />
							<Button text="Enviar Error" handleClick={getError} />
							<Button text="Enviar Sucesso" handleClick={getSuccess} />
						</div>
					</>
				) : (
					<Loading />
				)}
			</form>
		</div>
	);
}

export default Blocks;
