import Star from "./questionComponents/star";
import MultiRadio from "./questionComponents/multiRadio";
import Text from "./questionComponents/text";
import Select from "./questionComponents/select";
import MultiChoice from "./questionComponents/multiChoice";
import Checkbox from "./questionComponents/checkbox";

function Blocks() {
	return (
		<div className="max-w-xl">
			<h2 className="font-bold text-white text-4xl mb-4">
				Pesquisa de Satisfação
			</h2>

			<ul className="bg-white p-7 rounded-xl flex flex-col gap-12">
				<Star />
				<MultiRadio />
				<Text />
				<Select />
				<MultiChoice />
				<Checkbox />
			</ul>
		</div>
	);
}

export default Blocks;
