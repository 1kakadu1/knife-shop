import React, { useContext, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Box } from '../../components/box/box.component';
import { Breadcrumbs } from '../../components/breadcrumbs/breadcrumbs.component';
import { Container } from '../../components/container/container.component';
import { Footer } from '../../components/footer/footer.component';
import { Header } from '../../components/header/header.component';
import { RoutsPath } from '../../routes/routes.model';
import { Formik } from 'formik';
import { InputDefault } from '../../components/inputs/input-default/input-default.component';
import { ButtonDefault } from '../../components/buttons/default/default.component';
import { orderFormSchema } from './order.schemas';
import InputMask from 'react-input-mask';
import { MASK_PHONE } from '../../const/setting.const';
import { SelectDefault } from '../../components/inputs/selsect/select.component';
import { CitySearch } from '../../components/city-search/city-search.component';
import './order.scss';
import { IOrderFormModel } from './order.model';
import NotificationContext, {
	NotificationStatus,
} from '../../components/notification-bar/notification-bar.context';

export const OrderPage = () => {
	/**
	 *
	 * 	TODO: Send cart to server
	 *  const { cart } = useCart();
	 **/

	const { updateNotification } = useContext(NotificationContext);
	const initValue: IOrderFormModel = {
		fio: '',
		email: '',
		phone: '',
		order: '',
		address: '',
	};
	const onSubmit = (values: IOrderFormModel) => {
		console.log(values);
	};

	useEffect(() => {
		updateNotification({
			message: 'Нет возможности офрмить заказ. Повторите через время!',
			status: NotificationStatus.error,
		});
	}, []);

	return (
		<div>
			<Helmet>
				<meta charSet="utf-8" />
				<title>Оформление заказа</title>
			</Helmet>
			<Header />
			<Container>
				<Box styles={{ padding: '30px 0px' }}>
					<Breadcrumbs
						links={[
							{
								href: RoutsPath.cart,
								name: 'Корзина',
							},
							{ name: 'Оформление заказа' },
						]}
					/>
				</Box>
				<Formik
					initialValues={initValue}
					validationSchema={orderFormSchema}
					onSubmit={(values) => {
						onSubmit(values);
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
						setFieldValue,
						validateField,
					}) => (
						<form onSubmit={handleSubmit} className={''} autoComplete="off">
							<div className="row-order">
								<div className="col-order-6">
									<InputDefault
										id="form-name"
										name="fio"
										onChange={handleChange}
										onBlur={handleBlur}
										onFocus={() => setSubmitting(false)}
										label="Ваше ФИО"
										write
										value={values.fio}
										error={touched.fio && errors.fio ? errors.fio : undefined}
									/>
								</div>
								<div className="col-order-6">
									<InputDefault
										id="form-email"
										name="email"
										type="email"
										onChange={handleChange}
										onBlur={handleBlur}
										onFocus={() => setSubmitting(false)}
										label="Ваш Email"
										value={values.email}
										error={
											touched.email && errors.email ? errors.email : undefined
										}
										write
									/>
								</div>
							</div>

							<div className="row-order">
								<div className="col-order-6">
									<InputMask
										mask={MASK_PHONE}
										value={values.phone}
										onChange={handleChange}
										onBlur={handleBlur}
										onFocus={() => setSubmitting(false)}
									>
										{(inputProps: any) => (
											<InputDefault
												id="form-phone"
												label="Ваш номер"
												type="tel"
												name="phone"
												error={
													touched.phone && errors.phone
														? errors.phone
														: undefined
												}
												placeholder={'+1 (___) ___-__-__'}
												write
												{...inputProps}
											/>
										)}
									</InputMask>
								</div>
								<div className="col-order-6">
									<SelectDefault
										onChange={(value) => setFieldValue('order', value)}
										value={values.order === '' ? `''` : values.order}
										id="order"
										name="order"
										error={errors.order ? errors.order : undefined}
										label="Способ доставки"
										placeholder="Способ доставки"
										onBlur={handleBlur}
										onFocus={() => setSubmitting(false)}
										options={[
											{
												value: '1',
												name: 'Самовывоз из точки',
											},
											{
												value: '2',
												name: 'Доставка курьером',
											},
										]}
										black
									/>
								</div>
							</div>

							<CitySearch
								id="city-search"
								onChange={(value) => setFieldValue('address', value)}
								error={errors.address}
							/>
							<div className="btn-order">
								<ButtonDefault
									type="submit"
									disabled={false}
									onClick={() => {
										updateNotification({
											message: 'Проблема работы сервера',
											status: NotificationStatus.error,
										});
									}}
								>
									Оформить заказ
								</ButtonDefault>
							</div>
						</form>
					)}
				</Formik>
			</Container>

			<Footer />
		</div>
	);
};
