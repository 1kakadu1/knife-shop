import React from 'react';
import { TextInfo } from '../text-info/text-info.component';
import './subscribe-section.scss';
import bg from '../../../assets/images/subscribe-min.jpeg';
import { Subscription } from '../../subscription/subscription.component';

export const SubscribeSection = () => {
	return (
		<section className="subscribe-section">
			<TextInfo background={bg}>
				<>
					<h2 className="subscribe-section__title">
						Подпишись на рассылку и будь в курсе новостей!
					</h2>
					<div className="subscribe-section__input">
						<Subscription title="" onSend={(value: string) => void 0} write />
					</div>
				</>
			</TextInfo>
		</section>
	);
};
