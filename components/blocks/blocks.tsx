"use client";

import Star from "./questionComponents/star";
import MultiRadio from "./questionComponents/multiRadio";
import Text from "./questionComponents/text";
import Select from "./questionComponents/select";
import MultiChoice from "./questionComponents/multiChoice";
import Checkbox from "./questionComponents/checkbox";
import Button from "./questionComponents/button";

function Blocks() {
	function click() {
		console.log("click");
	}

	return (
		<div className="max-w-xl">
			<h2 className="font-bold text-white text-4xl mb-4">
				Pesquisa de Satisfação
			</h2>

			<form className="bg-white p-7 rounded-xl flex flex-col gap-12 list-none">
				<Star />
				<MultiRadio />
				<Text />
				<Select />
				<MultiChoice />
				<Checkbox />

				<div className="flex flex-wrap gap-2 justify-center">
					<Button text="Enviar Fake Post" handleClick={click} />
					<Button text="Enviar Error" handleClick={click} />
					<Button text="Enviar Sucesso" handleClick={click} />
				</div>
			</form>
		</div>
	);
}

export default Blocks;
