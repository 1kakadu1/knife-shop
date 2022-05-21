import React from 'react';
import { Helmet } from 'react-helmet';
import { Container } from '../../components/container/container.component';
import { Footer } from '../../components/footer/footer.component';
import { Header } from '../../components/header/header.component';
import { AboutSection } from '../../components/section/about-info/about-info.component';
import { Box } from '../../components/box/box.component';
import { Breadcrumbs } from '../../components/breadcrumbs/breadcrumbs.component';
import './order-and-sell.scss';
import o1 from '../../assets/images/order/order-1.png';
import o2 from '../../assets/images/order/order-2.jpg';
import p1 from '../../assets/images/order/p1.png';
import p2 from '../../assets/images/order/p2.png';
import p3 from '../../assets/images/order/p3.jpg';
import p4 from '../../assets/images/order/p4.png';
import pi1 from '../../assets/images/order/pi1.png';
import pi2 from '../../assets/images/order/pi2.png';
import pi3 from '../../assets/images/order/pi3.png';
import pi4 from '../../assets/images/order/pi4.png';
import { CardIconInfo } from '../../components/ cards/card-icon-info/card-icon-info.component';
import { SubscribeSection } from '../../components/section/subscribe-section/subscribe-section.component';

export const OrderAndSellPage = () => {
	return (
		<div>
			<Helmet>
				<meta charSet="utf-8" />
				<title>Оплата и доставака</title>
			</Helmet>
			<Header />
			<Container>
				<Box styles={{ padding: '30px 0px' }}>
					<Breadcrumbs links={[{ name: 'О нас' }]} />
				</Box>
				<Box styles={{ padding: '20px' }}>
					<h1 className="about-title about-title_center">
						Доставим одним из способов!
					</h1>
				</Box>
				<AboutSection
					preview={o1}
					text={
						"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
					}
				/>
				<AboutSection
					preview={o2}
					text={
						"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
					}
					order={1}
				/>
				<Box styles={{ padding: '20px' }}>
					<h2 className="about-title about-title_center">
						Оплачивайте удобным спосбобом
					</h2>
				</Box>

				<div className="pay-info">
					<div className="pay-info__item">
						<CardIconInfo
							className="pay-info__item-card"
							description="Оплата заказа наличными в момент получения заказа. Возможно только при доставке курьером по Городу."
							title="Наличными при получении заказа"
							icon={pi1}
							color="black"
						/>
					</div>
					<div className="pay-info__item">
						<CardIconInfo
							className="pay-info__item-card"
							description="Оплата заказа банковской картой в момент получения заказа. Возможно только при доставке курьером по Городу."
							title="Банковской картой при получении заказа"
							icon={pi2}
							color="black"
						/>
					</div>
					<div className="pay-info__item">
						<CardIconInfo
							className="pay-info__item-card"
							description="Перевод денег осуществляется через банк. Доступно при выборе любого способа доставки. При выборе этого способа оплаты необходимо указать адрес электронной почты при оформлении заказа."
							title="On-line платеж банковской картой на сайте"
							icon={pi3}
							color="black"
						/>
					</div>
					<div className="pay-info__item">
						<CardIconInfo
							className="pay-info__item-card"
							description="Оплатить счет может как юридическое, так и физическое лицо. Доступно при выборе любого способа доставки. Частное лицо может оплатить счет любым удобным для себя способом."
							title="Оплата счета"
							icon={pi4}
							color="black"
						/>
					</div>
				</div>

				<Box styles={{ padding: '20px' }}>
					<ul className="logo-list">
						<li className="logo-list__item">
							<img className="logo-list__preview" src={p1} alt="" />
						</li>
						<li className="logo-list__item">
							<img className="logo-list__preview" src={p2} alt="" />
						</li>
						<li className="logo-list__item">
							<img className="logo-list__preview" src={p3} alt="" />
						</li>
						<li className="logo-list__item">
							<img className="logo-list__preview" src={p4} alt="" />
						</li>
					</ul>
				</Box>
			</Container>
			<SubscribeSection />
			<Footer />
		</div>
	);
};
