import { IReviewData } from '../../../store/model/models';

export interface ICardPostProps {
	data: IPostData;
	className?: string;
	shadow?: boolean;
}

export interface IPostData {
	title: string;
	desc: string;
	date: string;
	preview: string;
	id: string;
	href: string;
	reviews?: IReviewData[];
}
