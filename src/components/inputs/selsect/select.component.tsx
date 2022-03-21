import React, { useState } from 'react';
import { ISelectProps } from './select.model';
import './select.scss';

export const SelectDefault = ({
	value: valueProps,
	label,
	id,
	placeholder = '',
	onChange,
	className = '',
	classNameSelect = '',
	error: errorProps,
	validation,
	validationOnChange,
	options,
}: ISelectProps) => {
	const [error, setError] = useState(errorProps || '');

	const onValidation = () => {
		if (validation) {
			const valid = validation(valueProps);
			if (valid === '') {
				setError('');
			} else {
				setError(valid);
			}

			return valid;
		}

		return '';
	};

	const onChangeInput = (e: React.ChangeEvent<HTMLSelectElement>) => {
		const val = e.target.value;
		onChange(val);
		if (validationOnChange && validation) {
			onValidation();
		}
	};
	const isError = error !== '' && error !== undefined ? true : false;

	return (
		<div className={'select-form-control ' + className}>
			{label && (
				<label className="select-form-control__label" htmlFor={id}>
					{label}
				</label>
			)}
			<div
				className={`select-form-control__wrapper-input ${
					isError ? 'error' : ''
				}`}
			>
				<select
					className={'select-form-control__input ' + classNameSelect}
					id={id}
					value={valueProps || options[0].value}
					onChange={onChangeInput}
				>
					{placeholder && placeholder !== '' && (
						<option value="" disabled>
							{' '}
							{placeholder}{' '}
						</option>
					)}
					{options.map((item) => (
						<option key={item.value} value={item.value}>
							{item.name}
						</option>
					))}
				</select>
			</div>
			{
				<div className={`select-form-control__error ${isError ? 'error' : ''}`}>
					{error || ''}
				</div>
			}
		</div>
	);
};
