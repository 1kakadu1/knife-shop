import React, { useState } from 'react';
import { StarsRating } from 'stars-rating-react-hooks';
import starActive from '../../assets/images/star-active.png';
import starEmpty from '../../assets/images/star-empty.png';
import starHalf from '../../assets/images/star-half.png';
import './rating.scss';

export const Rating = ({
	id,
	size,
	selected,
	onChangeRating,
	width,
	className = '',
}: {
	id: string;
	size: string;
	selected: number;
	onChangeRating: (id: string, size: string, stars: number) => void;
	width?: number;
	className?: string;
}) => {
	const [selecting, setSelecting] = useState<{
		isSelecting: boolean;
		selectingValue: number;
	} | null>(null);

	const config = {
		totalStars: 5,
		initialSelectedValue: selected,
		renderFull: <img alt="star" src={starActive} style={{ width: width }} />,
		renderEmpty: <img alt="star" src={starEmpty} style={{ width: width }} />,
		renderHalf: <img alt="star" src={starHalf} style={{ width: width }} />,
	};
	return (
		<div className={'stars-rating ' + className}>
			<StarsRating
				onStarsRated={(value: number) => {
					onChangeRating(id, size, value);
				}}
				onSelecting={(isSelecting: boolean, selectingValue: number) => {
					setSelecting({ isSelecting, selectingValue });
				}}
				config={config}
			/>
		</div>
	);
};
