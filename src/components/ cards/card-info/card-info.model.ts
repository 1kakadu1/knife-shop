export interface ICardInfoProps {
	className?: string;
	link?: string;
	title: string;
	desc?: string;
	list?: string[];
	preview: string | ICardInfoPreview[];
	prefixKey?: string;
}

export interface ICardInfoPreview {
	media?: string;
	src: string;
}
