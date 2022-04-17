import { IProductReview } from '../../store/reducer/product/product.model';

export interface IReviewsProps {
	className?: string;
	reviews?: IProductReview[];
	swiperRef?: any;
}
