import { ICardInfoProps } from '../../ cards/card-info/card-info.model';

export interface ICatalogPopularProps {
	data: ICardInfoProps[];
	className?: string;
	prefixKey?: string;
	items?: 3 | 2;
}
