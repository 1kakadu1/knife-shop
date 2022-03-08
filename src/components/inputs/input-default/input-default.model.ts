export interface IInputDefaultProps {
	placeholder?: string;
	onChange?: (value: any) => void;
	onSubmit?: (value: any) => void;
	value?: string;
	id: string;
	name?: string;
	type?: string;
	label?: string;
	className?: string;
	classNameInput?: string;
	error?: string;
	validation?: (value: any) => string;
	validationOnChange?: boolean;
}
