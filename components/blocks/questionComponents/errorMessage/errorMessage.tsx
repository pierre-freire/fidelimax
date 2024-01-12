interface IErrorMessage {
	errors: ({ message: string; questionIndex: number } | undefined)[];
}

function ErrorMessage({ errors }: IErrorMessage) {
	return (
		<div className="my-4 text-red-500 flex-col items-start">
			{errors.map((elm, i) => {
				return <span key={i}>*{elm?.message}</span>;
			})}
		</div>
	);
}

export default ErrorMessage;
