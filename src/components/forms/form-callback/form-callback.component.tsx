import { Formik } from 'formik';
import React, { useContext } from 'react';
import { ButtonDefault } from '../../buttons/default/default.component';
import { InputDefault } from '../../inputs/input-default/input-default.component';
import NotificationContext, {
	NotificationStatus,
} from '../../notification-bar/notification-bar.context';
import * as Yup from 'yup';
import './form-callback.scss';
import { TextareaDefault } from '../../inputs/textarea/textarea.component';

const callbackFormSchema = Yup.object().shape({
	name: Yup.string().required('Обязательное поле').min(1, 'Введите верно имя'),
	email: Yup.string()
		.email('Введите верно email')
		.required('Обязательное поле'),
	message: Yup.string()
		.required('Обязательное поле')
		.min(8, 'Текст слишком короткий'),
});

const initValue = {
	email: '',
	name: '',
	message: '',
};

export const FormCallback = () => {
	const { updateNotification } = useContext(NotificationContext);

	return (
		<Formik
			initialValues={initValue}
			validationSchema={callbackFormSchema}
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
					className={'form-callback'}
					autoComplete="off"
				>
					<div className="row-callback">
						<div className="col-callback-6">
							<InputDefault
								id="form-callback-email"
								name="email"
								onChange={handleChange}
								onBlur={handleBlur}
								onFocus={() => setSubmitting(false)}
								type="email"
								placeholder="Ваш email"
								write
								value={values.email}
								error={touched.email && errors.email ? errors.email : undefined}
							/>
						</div>
						<div className="col-callback-6">
							<InputDefault
								id="form-callback-name"
								name="name"
								onChange={handleChange}
								onBlur={handleBlur}
								onFocus={() => setSubmitting(false)}
								placeholder="Ваше имя"
								write
								value={values.name}
								error={touched.name && errors.name ? errors.name : undefined}
							/>
						</div>
					</div>
					<div className="col-callback-12">
						<TextareaDefault
							id="form-callback-message"
							name="message"
							onChange={handleChange}
							onBlur={handleBlur}
							onFocus={() => setSubmitting(false)}
							placeholder="Сообщение"
							write
							value={values.message}
							rows={5}
							error={
								touched.message && errors.message ? errors.message : undefined
							}
						/>
					</div>

					<ButtonDefault
						className="form-callback__btn"
						type="submit"
						disabled={
							isSubmitting ||
							!!(errors.email && touched.email && touched.message) ||
							!!(errors.name && touched.name && errors.message)
						}
					>
						Отправить
					</ButtonDefault>
				</form>
			)}
		</Formik>
	);
};
