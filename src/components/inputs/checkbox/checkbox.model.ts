export interface ICheckboxProps {
	checked: boolean;
	name: string;
	id: string;
	onChange?: (value: boolean, name?: string) => void;
	value?: string;
	label: string;
}
