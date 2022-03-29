export interface ISelectProps {
	placeholder?: string;
	onChange: (value: any) => void;
	value: any;
	id: string;
	name?: string;
	label?: string;
	className?: string;
	classNameSelect?: string;
	error?: string;
	validation?: (value: any) => string;
	validationOnChange?: boolean;
	options: ISelectOptions[];
	black?: boolean;
}

export interface ISelectOptions {
	value: string;
	name: string;
}
