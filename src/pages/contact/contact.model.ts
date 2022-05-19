export interface IPopupPoint {
	longitude: number;
	latitude: number;
}

export interface IMarkShop {
	id: string;
	name: string;
	desc: string;
	point: IPopupPoint;
	preview?: string;
	address: string;
	emails?: string[];
	phones?: string[];
}
