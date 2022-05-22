export interface IUserData {
	preview?: string;
	name: string;
	usName: string;
	id: string;
}

export interface IReviewData {
	user: IUserData;
	comment: string;
	userStars?: number;
	date: string;
	id: string;
}
