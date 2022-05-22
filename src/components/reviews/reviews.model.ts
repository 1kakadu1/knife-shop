import { IReviewData } from '../../store/model/models';

export interface IReviewsProps {
	className?: string;
	reviews?: IReviewData[];
	swiperRef?: any;
}
