import React from 'react';
import { ICheckboxProps } from './checkbox.model';
import './checkbox.scss';

export const Checkbox = ({
	checked,
	onChange,
	name,
	id,
	value,
	label,
}: ICheckboxProps) => {
	const onChangeInput = () => {
		console.log(!checked);
		onChange && onChange(!checked, name);
	};

	return (
		<div className="checkbox" onClick={onChangeInput}>
			<input
				className="custom-checkbox"
				type="checkbox"
				id={id}
				name="color-1"
				onChange={() => void 0}
				value={value || name}
				checked={checked}
			/>
			{label && <label htmlFor="color-1">{label}</label>}
		</div>
	);
};
