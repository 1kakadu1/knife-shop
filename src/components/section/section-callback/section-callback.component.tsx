import React from 'react';
import { TextInfo } from '../text-info/text-info.component';
import './section-callback.scss';
import bg from '../../../assets/images/end-call.webp';
import { FormCallback } from '../../forms/form-callback/form-callback.component';

export const CallbackSection = () => {
	const scrollTop = () => {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	};

	return (
		<section className="callback-section">
			<TextInfo background={bg}>
				<>
					<h2 className="callback-section__title">
						Есть вопросы? Напишите нам или{' '}
						<span className="callback-section__phone" onClick={scrollTop}>
							оставьте заявку на обратный звонок
						</span>
					</h2>
					<div className="callback-section__input">
						<FormCallback />
					</div>
				</>
			</TextInfo>
		</section>
	);
};
