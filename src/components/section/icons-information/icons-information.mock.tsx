import { ICardIconInfoProps } from '../../ cards/card-icon-info/card-icon-info.model';
import { IconCar } from '../../icons/car.icon.component';
import { IconList } from '../../icons/list.icon.component';
import { IconMarkPercent } from '../../icons/mark-percent.icon.component';
import { IconMark } from '../../icons/mark.icon.component';

export const iconsInformationMock: ICardIconInfoProps[] = [
	{
		icon: <IconMark />,
		description: 'Гарантия 100% возврата денежных средств',
	},
	{
		icon: <IconCar />,
		description: 'Доставка по Регионам, Миру и Странам',
	},
	{
		icon: <IconList />,
		description: 'Возможность оформление заказа без регистрации.',
	},
	{
		icon: <IconMarkPercent />,
		description: 'Скидки постоянным покупателям.',
	},
];
