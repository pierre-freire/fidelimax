export function checkIfIncludes(arr: any[], args: any) {
	return arr.includes(args);
}

export function returnHandledArray(arr: any[], args: any) {
	if (checkIfIncludes(arr, args)) {
		const newArray = arr.filter((item) => {
			return item !== args;
		});

		return(newArray);
	} else {
		const newArray = [...arr, args];

		return newArray;
	}
}