import React, { useContext } from 'react';
import { isEmail } from '../../utils/validation';
import { Checkbox } from '../inputs/checkbox/checkbox.component';
import { InputDefault } from '../inputs/input-default/input-default.component';
import NotificationContext, {
	NotificationStatus,
} from '../notification-bar/notification-bar.context';
import { ISubscriptionProps } from './subscription.model';
import './subscription.scss';

export const Subscription = ({
	title,
	onSend,
	className = '',
}: ISubscriptionProps) => {
	const { updateNotification } = useContext(NotificationContext);
	return (
		<div className={'subscription subscription-container ' + className}>
			<div className="subscription__title">{title}</div>
			<div className="subscription__input">
				<InputDefault
					placeholder="Ваш Email"
					id="subscription"
					onSubmit={() => {
						console.log('subscribe');
						updateNotification({
							message: 'Проблема работы сервера',
							status: NotificationStatus.error,
						});
					}}
					validation={(value) => {
						if (value === '') {
							return 'Поле обязательно для заполнения';
						}

						if (!isEmail(value)) {
							return 'Неверный email';
						}

						return '';
					}}
				/>
			</div>
			<div className="subscription__checkbox">
				<Checkbox
					checked={true}
					id="checkbox-subscription"
					name="subscription"
					label="Я прочитал Условия соглашения и согласен с условиями"
				/>
			</div>
		</div>
	);
};