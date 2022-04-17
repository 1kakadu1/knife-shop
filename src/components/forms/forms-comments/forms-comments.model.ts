import {
	IProductReview,
	IUserData,
} from '../../../store/reducer/product/product.model';

export interface IFormsComments {
	className?: string;
	onSend: (comment: IProductReview) => void;
	user: IUserData;
}
