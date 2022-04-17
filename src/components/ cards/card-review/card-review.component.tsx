import React from 'react';
import { Rating } from '../../rating/rating.component';
import { ICardReviewProps } from './card-review.model';
import './card-review.scss';

export const CardReview = ({ review, className = '' }: ICardReviewProps) => {
	return (
		<div className={'card-review ' + className}>
			<div className="card-review-avatar">
				<img src={review.user.preview} className="card-review__avatar" alt="" />
			</div>
			<div className="card-review-info">
				<div className="card-review-info-header">
					<div className="card-review-info-header__name">
						{review.user.name}
					</div>
					<div className="card-review-info-header__date">{review.date}</div>
				</div>

				<Rating
					id={review.id}
					size={review.user.id}
					selected={review.userStars || 0}
					onChangeRating={() => void 0}
					offChange
					width={21}
					className="card-review__stars"
				/>

				<div className="card-review__comment">{review.comment}</div>
			</div>
		</div>
	);
};
