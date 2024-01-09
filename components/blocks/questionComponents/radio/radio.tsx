"use client";

import { useState } from "react";

interface IRadio {
	content: string;
	answerValue: number | boolean;
	mandatory?: boolean;
	multi?: boolean;
}

function Radio({ content, answerValue, mandatory, multi }: IRadio) {
	const [selected, setSelected] = useState<number | boolean>(answerValue);

	function handleChoice(arg: number | boolean) {
		if (arg === selected) return setSelected(arg);
		setSelected(arg);
	}

	function renderOptions() {
		if (multi) {
			return (
				<>
					{Array.from({ length: 10 }, (_, i) => i + 1).map((elm, i) => {
						return (
							<>
								<li
									key={i}
									className="flex flex-col items-center cursor-pointer"
									onClick={() => handleChoice(elm)}
								>
									<input
										type="radio"
										checked={selected === elm}
										onChange={(e) => handleChoice(elm)}
										className=" cursor-pointer"
									/>
									<p className="mt-2 select-none">{i + 1}</p>
								</li>
							</>
						);
					})}
				</>
			);
		} else {
			return (
				<>
					<li
						className="flex flex-col items-center cursor-pointer"
						onClick={() => handleChoice(true)}
						key={1}
					>
						<input
							type="radio"
							checked={selected === true}
							onChange={(e) => handleChoice(true)}
							className=" cursor-pointer"
						/>
						<p className="mt-2 select-none">Sim</p>
					</li>
					<li
						className="flex flex-col items-center cursor-pointer"
						onClick={() => handleChoice(false)}
						key={2}
					>
						<input
							type="radio"
							checked={selected === false}
							onChange={(e) => handleChoice(false)}
							className=" cursor-pointer"
						/>
						<p className="mt-2 select-none">Não</p>
					</li>
				</>
			);
		}
	}

	return (
		<div>
			<h3 className="text-slate-700 text-2xl font-extrabold mb-2">
				Título da pergunta deve ficar aqui
			</h3>
			<p className="text-slate-700 text-lg mb-2">{content}</p>
			<ul className={`flex ${multi ? "justify-between" : "gap-8"}`}>
				{renderOptions()}
			</ul>
		</div>
	);
}

export default Radio;
