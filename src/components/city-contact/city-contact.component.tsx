import React, { useContext, useState } from 'react';
import { ButtonDefault } from '../buttons/default/default.component';
import { IconArrow } from '../icons/arrow.icon.component';
import { IconLocation } from '../icons/location.icon.component';
import { InputDefault } from '../inputs/input-default/input-default.component';
import { Modal } from '../modal/modal.component';
import { TitleText } from '../titles/title-text/title-text.component';
import { ICityContactProps } from './city-contact.model';
import InputMask from 'react-input-mask';
import './city-contact.scss';
import { MASK_PHONE } from '../../const/setting.const';
import NotificationContext, {
	NotificationStatus,
} from '../notification-bar/notification-bar.context';
const initForm = {
	phone: {
		value: '',
		valid: true,
		touch: false,
	},
	name: {
		value: '',
		valid: true,
		touch: false,
	},
};

export const CityContact = ({ city, phones }: ICityContactProps) => {
	const { updateNotification } = useContext(NotificationContext);
	const [open, setOpen] = useState<boolean>(false);
	//TODO: change to Formik
	const [callback, setCallback] = useState<boolean>(false);
	const [form, setForm] = useState<{
		phone: { value: string; valid: boolean; touch: boolean };
		name: { value: string; valid: boolean; touch: boolean };
	}>(initForm);

	const onChangeValue = (value: string, key: 'phone' | 'name') => {
		let valid = true;

		if (value.indexOf('_') !== -1 && key === 'phone') {
			valid = false;
		}

		if (value.length < 4 && key === 'name') {
			valid = false;
		}

		setForm({
			...form,
			[key]: {
				value: value,
				valid,
				touch: true,
			},
		});
	};

	const onSend = () => {
		const values = JSON.parse(JSON.stringify(form));

		if (values.phone.touch && values.name.touch) {
			if (values.name.valid && values.phone.valid) {
				setForm(JSON.parse(JSON.stringify(initForm)));
				updateNotification({
					message: 'Сервер временно не  отвечает!',
					status: NotificationStatus.warning,
				});
			}
		} else {
			updateNotification({
				message: 'Заполните все поля',
				status: NotificationStatus.error,
			});
		}
	};

	return (
		<div className="city-contact">
			<div className="location city-contact__location">
				<IconLocation className="location__icon city-contact__icon" />
				<TitleText text={city} className="location__name" />
			</div>
			{phones.length > 0 && (
				<div className="phones phones_position_relative">
					<div className="phones-info">
						<div
							className="phones-info__link phones_default"
							onClick={() => setOpen(!open)}
						>
							{phones[0]}
							{phones.length > 1 && (
								<IconArrow
									className={`phones__icon phones_margin-icon ${
										open ? 'icon_rotate' : ''
									}`}
								/>
							)}
						</div>
						<div
							className="phones-info__callback"
							onClick={() => setCallback(true)}
						>
							Заказать звонок
						</div>
						<Modal
							open={callback}
							onClose={() => setCallback(false)}
							className={'modal-callback'}
						>
							<div className="form" onSubmit={() => void 0}>
								<div className="h3-title center">
									Оставьте свой номер и мы свяжемся с Вами !
								</div>
								<form
									onSubmit={(e) => {
										e.preventDefault();
									}}
								>
									<InputMask
										mask={MASK_PHONE}
										value={form.phone.value}
										onChange={(e) =>
											onChangeValue(e.target.value.toString(), 'phone')
										}
									>
										{(inputProps: any) => (
											<InputDefault
												id="phone"
												label="Ваш номер"
												type="tel"
												error={
													!form.phone.valid && form.phone.touch
														? 'Неверный формат телефона'
														: ''
												}
												placeholder={'+1 (___) ___-__-__'}
												write
												{...inputProps}
											/>
										)}
									</InputMask>

									<InputDefault
										id="name"
										label="Ваше имя"
										error={
											!form.name.valid && form.name.touch
												? 'Минимальная длина 4 символа'
												: ''
										}
										value={form.name.value}
										onChange={(e) =>
											onChangeValue(e.target.value.toString(), 'name')
										}
										onFocus={() =>
											setForm({ ...form, name: { ...form.name, touch: true } })
										}
										write
									/>
									<ButtonDefault onClick={onSend}>
										<span>Заказать звонок</span>
									</ButtonDefault>
								</form>
							</div>
						</Modal>
					</div>
					<ul
						className={`phones-list phones-list_position_absolute ${
							open ? 'phones-list_show' : 'phones-list_hide'
						}`}
					>
						{phones.map((item) => (
							<li className="phones-list__item" key={item}>
								<a
									className="phones-list__link"
									href={`tel:${item.replace(/-/g, '')}`}
								>
									{item}
								</a>
							</li>
						))}
					</ul>
				</div>
			)}
		</div>
	);
};
