export interface IInputDefaultProps {
	placeholder?: string;
	onChange?: (value: any) => void;
	onSubmit?: (value: any) => void;
	value?: any;
	id: string;
	name?: string;
	type?: string;
	label?: string;
	className?: string;
	classNameInput?: string;
	error?: string;
	validation?: (value: any) => string;
	validationOnChange?: boolean;
	write?: boolean;
	min?: number;
	max?: number;
}
