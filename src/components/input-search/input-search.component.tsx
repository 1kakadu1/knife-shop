import React, { useState } from 'react';
import { IInputSearch } from './input-search.model';
import './input-search.scss';

export const InputSearch = ({ onSearch, placeholder = '' }: IInputSearch) => {
	const [search, setSearch] = useState<string>('');
	const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSearch(e.target.value);
	};
	const onSearchSubmit = () => onSearch(search);

	return (
		<div className="input-search">
			<div className="button-search input-search__btn" onClick={onSearchSubmit}>
				<svg
					className="button-search__icon"
					width="13"
					height="12"
					viewBox="0 0 13 12"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<circle cx="4.5" cy="4.5" r="4" stroke="black" strokeOpacity="0.5" />
					<line
						y1="-0.5"
						x2="6.55661"
						y2="-0.5"
						transform="matrix(0.709901 0.704302 -0.709901 0.704302 7 7)"
						stroke="black"
						strokeOpacity="0.5"
					/>
				</svg>
			</div>
			<input
				className="input-search__field"
				type="text"
				name="s"
				placeholder={placeholder}
				value={search}
				onChange={onChange}
			/>
		</div>
	);
};
