import { Formik } from 'formik';
import React, { useContext, useState } from 'react';
import { ReactComponent as UserIcon } from '../../../../assets/svg/user.svg';
import { Modal } from '../../../modal/modal.component';
import './link.styles.scss';
import * as Yup from 'yup';
import { InputDefault } from '../../../inputs/input-default/input-default.component';
import { ButtonDefault } from '../../../buttons/default/default.component';
import NotificationContext, {
	NotificationStatus,
} from '../../../notification-bar/notification-bar.context';

const orderFormSchema = Yup.object().shape({
	password: Yup.string()
		.required('Обязательное поле')
		.min(6, 'Введите верно пароль'),
	email: Yup.string()
		.email('Введите верно email')
		.required('Обязательное поле'),
});

const initValue = {
	email: '',
	password: '',
};

export const LinkProfile = () => {
	const [open, setOpen] = useState(false);
	const [isPasswordShow, setPasswordShow] = useState(false);
	const { updateNotification } = useContext(NotificationContext);

	return (
		<>
			<div className="link-profile" onClick={() => setOpen(true)}>
				<span className="link-profile__icon">
					<UserIcon />
				</span>
				Войти
			</div>

			<Modal
				open={open}
				onClose={() => setOpen(false)}
				className={'modal-login'}
			>
				<div className="form-login-container">
					<Formik
						initialValues={initValue}
						validationSchema={orderFormSchema}
						onSubmit={(values) => {
							updateNotification({
								message: 'Сервер не отвечает !',
								status: NotificationStatus.warning,
							});
						}}
					>
						{({
							values,
							errors,
							touched,
							handleChange,
							handleBlur,
							handleSubmit,
							setSubmitting,
							isSubmitting,
						}) => (
							<form
								onSubmit={handleSubmit}
								className={'form-login'}
								autoComplete="off"
							>
								<div className="form-login__title">
									Введите данные для входа
								</div>
								<InputDefault
									id="form-login-email"
									name="email"
									onChange={handleChange}
									onBlur={handleBlur}
									onFocus={() => setSubmitting(false)}
									type="email"
									label="Ваш email"
									write
									value={values.email}
									error={
										touched.email && errors.email ? errors.email : undefined
									}
								/>

								<InputDefault
									id="form-login-password"
									name="password"
									onChange={handleChange}
									onBlur={handleBlur}
									onFocus={() => setSubmitting(false)}
									type={isPasswordShow ? 'text' : 'password'}
									label="Ваш пароль"
									write
									value={values.password}
									error={
										touched.password && errors.password
											? errors.password
											: undefined
									}
									endAdornment={
										<div
											className="adornment-password"
											onClick={() => setPasswordShow(!isPasswordShow)}
										>
											{isPasswordShow ? (
												<svg
													focusable="false"
													aria-hidden="true"
													viewBox="0 0 24 24"
												>
													<path d="M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7zM2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3 2 4.27zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2zm4.31-.78 3.15 3.15.02-.16c0-1.66-1.34-3-3-3l-.17.01z"></path>
												</svg>
											) : (
												<svg
													focusable="false"
													aria-hidden="true"
													viewBox="0 0 24 24"
												>
													<path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"></path>
												</svg>
											)}
										</div>
									}
								/>

								<ButtonDefault
									type="submit"
									disabled={
										isSubmitting ||
										!!(errors.email && touched.email) ||
										!!(errors.password && touched.password)
									}
								>
									Войти
								</ButtonDefault>
							</form>
						)}
					</Formik>
				</div>
			</Modal>
		</>
	);
};
