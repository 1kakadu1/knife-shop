import { ICircleTooltips } from '../../circle-tooltip-image/circle-tooltip-image.model';

export interface ISliderInfoProps {
	children?: JSX.Element;
	slides: ISliderInfoData[];
}

export interface ISliderInfoData {
	link: string;
	title: string;
	subtitle: string;
	desc?: string;
	preview: string | ISliderInPreview[];
	tooltips?: ICircleTooltips[];
}

export interface ISliderInPreview {
	media?: string;
	src: string;
}
