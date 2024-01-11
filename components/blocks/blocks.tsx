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
import Modal from "../modal";
import { getAllQuestions, fakePost, getError, getSuccess } from "@/util/API";

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
	const [modalInfo, setModalInfo] = useState<{
		title: string;
		message: string;
		show: boolean;
	}>({ title: "", message: "", show: false });
	const [errors, setErrors] =
		useState<[{ questionIndex: number; message: string }]>();

	useEffect(() => {
		async function getQuestions() {
			const data = await getAllQuestions();
			setQuestions(data.itens);
		}

		getQuestions();
	}, []);

	function handleAnswerList(questionIndex: number, answer: string) {
		let newQuestionAnswer = questions[questionIndex];
		newQuestionAnswer.answerValue = answer;

		const newQuestionArray = questions.map((q, i) =>
			i !== questionIndex ? q : newQuestionAnswer
		);

		setQuestions(newQuestionArray);
	}

	function transformAnswerToArray(arg: string | string[] | number[]) {
		if (typeof arg === "string") {
			const newAnswer = arg.split("").map((str) => {
				return parseInt(str, 10);
			});

			return newAnswer;
		}

		if (Array.isArray(arg)) {
			if (typeof arg[0] === "string") {
				const newAnswer = arg.map((str) => {
					return Number(str);
				});

				return newAnswer;
			}

			if (typeof arg[0] === "number") {
				return arg;
			}
		}
	}

	async function sendAnswers() {
		const errors: [{ questionIndex: number; message: string }] = questions
			.map((elm, index) => {
				if (
					elm.mandatory === true &&
					(elm.answerValue === "" ||
						elm.answerValue === undefined ||
						(Array.isArray(elm.answerValue) && elm.answerValue.length === 0))
				) {
					return { questionIndex: index, message: "Campo obrigatório!" };
				}
			})
			.filter((elm) => {
				return elm !== undefined;
			});

		setErrors(errors);

		if (Array.isArray(errors) && errors.length > 0) {
			return;
		}

		const data = fakePost(questions);
		console.log(data);

		setModalInfo({
			title: "Erro",
			message:
				"Ocorreu um erro enquanto os dados estavam sendo enviados, tente novamente.",
			show: true,
		});
	}

	async function sendError() {
		const res = await getError();
		setModalInfo({ title: "Erro", message: res.error, show: true });
	}

	async function sendFakeSuccess() {
		const res = await getSuccess();

		setModalInfo({
			title: "Sucesso",
			message: "Sucesso ao enviar os dados.",
			show: true,
		});
	}

	function getFieldErrors(i: number) {
		const fieldErrors = errors
			?.filter((elm) => {
				return elm?.questionIndex === i;
			})
			.filter((elm) => {
				return elm !== undefined;
			});

		return fieldErrors;
	}

	function handleBlocks(index: number, elm: IQuestion) {
		switch (elm.typeQuestion) {
			case 1:
				return (
					<Star
						key={index}
						index={index}
						errors={getFieldErrors(index)}
						answerValue={parseInt(elm.answerValue)}
						content={elm.content}
						onChangeAnswer={handleAnswerList}
					/>
				);
			case 2:
				return (
					<Radio
						key={index}
						index={index}
						onChangeAnswer={handleAnswerList}
						multi={true}
						answerValue={parseInt(elm.answerValue)}
						errors={getFieldErrors(index)}
						content={elm.content}
					/>
				);
			case 3:
				return (
					<Text
						key={index}
						index={index}
						onChangeAnswer={handleAnswerList}
						answerValue={elm.answerValue}
						errors={getFieldErrors(index)}
						content={elm.content}
					/>
				);
			case 4:
				return (
					<Select
						key={index}
						index={index}
						onChangeAnswer={handleAnswerList}
						answerValue={elm.answerValue}
						content={elm.content}
						errors={getFieldErrors(index)}
						itens={elm.itens}
					/>
				);
			case 5:
				return (
					<Radio
						key={index}
						index={index}
						onChangeAnswer={handleAnswerList}
						multi={false}
						errors={getFieldErrors(index)}
						answerValue={!!elm.answerValue}
						content={elm.content}
					/>
				);
			case 6:
				const arrayOfNums = transformAnswerToArray(elm.answerValue);

				if (elm.horizontal) {
					return (
						<MultiChoice
							key={index}
							index={index}
							onChangeAnswer={handleAnswerList}
							answerValue={arrayOfNums}
							content={elm.content}
							itens={elm.itens}
							errors={getFieldErrors(index)}
						/>
					);
				} else {
					return (
						<Checkbox
							key={index}
							index={index}
							onChangeAnswer={handleAnswerList}
							answerValue={arrayOfNums}
							content={elm.content}
							itens={elm.itens}
							errors={getFieldErrors(index)}
						/>
					);
				}
			default:
				return <></>;
		}
	}

	function closeModalFunction() {
		setModalInfo({ title: "", message: "", show: false });
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
							<Button
								text="Enviar Fake Post"
								handleClick={sendAnswers}
								errors={errors}
							/>
							<Button text="Enviar Error" handleClick={sendError} />
							<Button text="Enviar Sucesso" handleClick={sendFakeSuccess} />
						</div>
					</>
				) : (
					<Loading />
				)}
			</form>
			<Modal
				title={modalInfo.title}
				message={modalInfo.message}
				show={modalInfo.show}
				closeFunction={closeModalFunction}
			/>
		</div>
	);
}

export default Blocks;
