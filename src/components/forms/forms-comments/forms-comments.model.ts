import { IReviewData, IUserData } from '../../../store/model/models';

export interface IFormsComments {
	className?: string;
	onSend: (comment: IReviewData) => void;
	user: IUserData;
}
