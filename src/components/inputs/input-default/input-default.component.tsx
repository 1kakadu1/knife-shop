import React, { useState } from 'react';
import { ButtonDefault } from '../../buttons/default/default.component';
import { IInputDefaultProps } from './input-default.model';
import './input-default.scss';
import { useDebounce } from '../../../utils/useDebounce';

export const InputDefault = ({
	value: valueProps,
	label,
	type = 'text',
	id,
	placeholder = '',
	onChange,
	onSubmit,
	className = '',
	classNameInput = '',
	error: errorProps,
	validation,
	validationOnChange,
	write,
	min,
	max,
}: IInputDefaultProps) => {
	const [value, setValue] = useState('');
	const [error, setError] = useState(errorProps || '');
	const onValidation = () => {
		if (validation) {
			const valid = validation(valueProps || value);
			if (valid === '') {
				setError('');
			} else {
				setError(valid);
			}

			return valid;
		}

		return '';
	};

	const debounce = useDebounce(onValidation, 300);

	const onClickBtn = () => {
		if (onSubmit && validation) {
			const valid = validation(valueProps || value);
			if (valid === '') {
				setError('');
				onSubmit(valueProps || value);
			} else {
				setError(valid);
			}
		}
	};

	const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
		const val = e.target.value;

		if (valueProps !== undefined && onChange) {
			onChange(val);
		} else {
			setValue(val);
		}

		if (validationOnChange && validation) {
			debounce(null);
		}
	};
	const isError = error !== '' && error !== undefined ? true : false;

	return (
		<div className={'input-form-control ' + className}>
			{label && (
				<label className="input-form-control__label" htmlFor={id}>
					{label}
				</label>
			)}
			<div
				className={`input-form-control__wrapper-input ${
					isError ? 'error' : ''
				}`}
			>
				<input
					className={
						'input-form-control__input ' +
						classNameInput +
						(write ? ' input-form-control_write' : '')
					}
					onChange={onChangeInput}
					value={valueProps ? valueProps : value}
					placeholder={placeholder}
					type={type}
					id={id}
					max={max}
					min={min}
				/>
				{onSubmit && (
					<ButtonDefault
						className="input-form-control__btn"
						onClick={onClickBtn}
					>
						<svg
							width="9"
							height="16"
							viewBox="0 0 9 16"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M8.67619 8.67581L1.88741 15.4644C1.45556 15.8964 0.755394 15.8964 0.323755 15.4644C-0.107918 15.0327 -0.107918 14.3326 0.323755 13.9009L6.33078 7.89409L0.32393 1.88747C-0.107744 1.45562 -0.107744 0.755558 0.32393 0.323886C0.755604 -0.107962 1.45574 -0.107962 1.88759 0.323886L8.67637 7.11255C8.8922 7.32849 9 7.6112 9 7.89406C9 8.17705 8.89199 8.45998 8.67619 8.67581Z"
								fill="white"
							/>
						</svg>
					</ButtonDefault>
				)}
			</div>
			{
				<div className={`input-form-control__error ${isError ? 'error' : ''}`}>
					{error || ''}
				</div>
			}
		</div>
	);
};
