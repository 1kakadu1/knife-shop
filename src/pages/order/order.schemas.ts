import * as Yup from 'yup';

export const orderFormSchema = Yup.object().shape({
	name: Yup.string().required('Обязательное поле'),
	email: Yup.string()
		.email('Введите верно email')
		.required('Обязательное поле'),
	phone: Yup.string().test('include', 'Введите верно телефон', (val) => {
		return val?.indexOf('_') === -1 ? true : false;
	}),
	order: Yup.string()
		.required('Обязательное поле')
		.test('requiredOrder', 'Обязательное поле', (val) => {
			return val === undefined || val === '' ? true : false;
		}),
	address: Yup.string().required('Обязательное поле'),
});
