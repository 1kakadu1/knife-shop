export interface ICircleTooltipImageProps {
	img: string;
	radius?: number;
	radiusContainer?: number;
	tooltips: ICircleTooltips[];
	classImage?: string;
	classContainer?: string;
}

export interface ICircleTooltips {
	position: number;
	text: string;
}
