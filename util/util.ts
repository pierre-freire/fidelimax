export function checkIfIncludes(arr: any[] | undefined, args: any) {
	if(typeof arr === 'undefined') return false
	if(arr === undefined) return false
	return arr.includes(args);
}

export function returnHandledArray(arr: any[] | undefined, args: any) {
	if(arr === undefined) {
		return [args]
	}
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