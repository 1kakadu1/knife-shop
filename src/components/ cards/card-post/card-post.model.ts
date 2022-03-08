export interface ICardPostProps {
	data: IPostData;
	className?: string;
}

export interface IPostData {
	title: string;
	desc: string;
	date: string;
	preview: string;
	id: string;
}
