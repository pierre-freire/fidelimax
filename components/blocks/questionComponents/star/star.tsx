"use client";

import { useState } from "react";
import GrayStar from "@/public/gray-star.svg";
import GoldStar from "@/public/gold-star.svg";
import Image from "next/image";

function Star() {
	const [value, setValue] = useState<number>(0);
	return (
		<li>
			<h3 className="text-slate-700 text-2xl font-extrabold mb-2">
				Título da pergunta deve ficar aqui
			</h3>
			<p className="text-slate-700 text-lg mb-2">
				Tambem é importante ter um espaço para o dono da loja colocar uma
				descrição da pergunta para ajudar o entendimento do usuario
			</p>
			<ul className="flex items-center gap-8">
				{[1, 2, 3, 4, 5].map((elm, i) => {
					return (
						<li
							key={i}
							className="cursor-pointer"
							onClick={() => setValue(elm)}
						>
							<Image
								src={i >= value ? GrayStar : GoldStar}
								width={40}
								height={40}
								alt="Picture of the arrow"
							/>
						</li>
					);
				})}
			</ul>
		</li>
	);
}

export default Star;
