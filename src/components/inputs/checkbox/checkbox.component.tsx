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
		onChange && onChange(!checked, name);
	};

	return (
		<div className="checkbox" onClick={onChangeInput}>
			<input
				className="custom-checkbox"
				type="checkbox"
				id={id}
				name="color-1"
				value={value || name}
				defaultChecked={checked}
			/>
			{label && <label htmlFor="color-1">{label}</label>}
		</div>
	);
};
