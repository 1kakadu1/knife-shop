import React from 'react';
import { Link } from 'react-router-dom';
import { useWindowSize, WindowBreakpoints } from '../../utils/useWindowSize';
import { Container } from '../container/container.component';
import { SlideDownCustom } from '../slide-down/slide-down.component';
import { footerMenuTopMock } from './footer.mock';
import './footer.scss';

import fb from '../../assets/images/socials/fb.png';
import tg from '../../assets/images/socials/tg.png';
import wt from '../../assets/images/socials/wt.png';
import vb from '../../assets/images/socials/vb.png';
import { Subscription } from '../subscription/subscription.component';

const FooterMenuItem = ({
	menu,
	items,
	title,
}: {
	title?: string;
	items?: JSX.Element[];
	menu?: { href: string; name: string }[];
}) => {
	return (
		<>
			{title && <div className="footer__item-name">{title}</div>}
			<ul className="footer-menu footer-menu__list">
				{items &&
					items.map((item, index) => (
						<li className="footer-menu__item" key={'footer-menu-' + index}>
							{item}
						</li>
					))}
				{menu &&
					menu.map((item, index) => (
						<li className="footer-menu__item" key={'footer-menu-' + index}>
							<Link to={item.href}>{item.name}</Link>
						</li>
					))}
			</ul>
		</>
	);
};

export const Footer = () => {
	const { breakpoint } = useWindowSize();
	return (
		<div className="footer">
			<Container>
				<div className="footer__menu-container">
					{footerMenuTopMock.map((item) => (
						<div className="footer__item" key={item.title}>
							{breakpoint >= WindowBreakpoints.lg ? (
								<FooterMenuItem title={item.title} menu={item.menu} />
							) : (
								<SlideDownCustom
									title={item.title}
									classNameTitle="footer__item-name"
								>
									<FooterMenuItem menu={item.menu} />
								</SlideDownCustom>
							)}
						</div>
					))}
				</div>
				<div className="footer__hr" />
				<div className="footer__menu-container">
					<div className="footer__item footer-contact">
						{
							<FooterMenuItem
								title="КОНТАКТЫ"
								items={[
									<a href="tel:99009999999" className="footer-contact-link">
										<div className="footer-contact-link__icon">
											<svg
												width="15"
												height="16"
												viewBox="0 0 15 16"
												fill="none"
												xmlns="http://www.w3.org/2000/svg"
											>
												<path
													d="M14.6144 11.6797L12.7496 9.7111C12.2355 9.1684 11.3989 9.1684 10.8848 9.7111L10.0372 10.6059C9.64769 11.0171 9.01392 11.0169 8.62457 10.6061L4.95058 6.72429C4.56018 6.31217 4.56012 5.64513 4.95058 5.23294C5.08711 5.08882 5.47915 4.67496 5.79821 4.33815C6.31008 3.79782 6.31722 2.91744 5.79771 2.36907L3.93341 0.407207C3.41928 -0.135498 2.58273 -0.135498 2.06999 0.405784C1.6863 0.8073 1.56254 0.936829 1.3905 1.11686C-0.463486 3.074 -0.463486 6.25851 1.39041 8.21558L7.21173 14.3641C9.07005 16.3258 12.0778 16.326 13.9363 14.3641L14.6144 13.6482C15.1285 13.1055 15.1285 12.2224 14.6144 11.6797ZM2.69023 1.06339C2.86159 0.882487 3.14039 0.882456 3.31232 1.06388L5.17662 3.02575C5.34839 3.20709 5.34839 3.50057 5.17662 3.68193L4.86579 4.01002L2.38101 1.38696L2.69023 1.06339ZM7.83343 13.708L2.01209 7.55943C0.577712 6.04522 0.498871 3.66758 1.76962 2.05394L4.24719 4.66939C3.59619 5.44845 3.62332 6.63559 4.32884 7.38038L8.00272 11.262C8.00275 11.262 8.00281 11.2621 8.00284 11.2621C8.7076 12.0061 9.8321 12.0366 10.571 11.3484L13.0486 13.9639C11.5249 15.3031 9.27769 15.2326 7.83343 13.708ZM13.9928 12.992L13.682 13.3202L11.1956 10.6954L11.5064 10.3673C11.6778 10.1864 11.9566 10.1864 12.128 10.3673L13.9928 12.3359C14.1642 12.5168 14.1642 12.8112 13.9928 12.992Z"
													fill="white"
												/>
											</svg>
										</div>
										<div className="footer-contact-link__name">
											9 (900) 999-99-99
										</div>
									</a>,
									<a href="#" target="_blank" className="footer-contact-link">
										<div className="footer-contact-link__icon">
											<svg
												width="11"
												height="17"
												viewBox="0 0 11 17"
												fill="none"
												xmlns="http://www.w3.org/2000/svg"
											>
												<path
													d="M5.5 0C2.4673 0 0 2.60071 0 5.7974C0 6.87745 0.283831 7.93148 0.820997 8.84592L5.18693 16.262C5.27056 16.4041 5.4179 16.4904 5.57636 16.4904C5.57758 16.4904 5.57877 16.4904 5.57999 16.4904C5.73983 16.489 5.88748 16.4001 5.96958 16.2555L10.2242 8.76759C10.7318 7.87248 11 6.8454 11 5.7974C11 2.60071 8.5327 0 5.5 0ZM9.43757 8.27153L5.56942 15.0792L1.6001 8.33685C1.15298 7.57571 0.910556 6.6976 0.910556 5.7974C0.910556 3.13349 2.97275 0.959791 5.5 0.959791C8.02725 0.959791 10.0864 3.13349 10.0864 5.7974C10.0864 6.6709 9.85994 7.52657 9.43757 8.27153Z"
													fill="white"
												/>
												<path
													d="M5.50014 2.44336C3.8153 2.44336 2.44458 3.81328 2.44458 5.49713C2.44458 7.17022 3.793 8.5509 5.50014 8.5509C7.22832 8.5509 8.55569 7.15183 8.55569 5.49713C8.55569 3.81328 7.18497 2.44336 5.50014 2.44336ZM5.50014 7.53976C4.37104 7.53976 3.45631 6.62251 3.45631 5.49713C3.45631 4.37456 4.37691 3.4545 5.50014 3.4545C6.62336 3.4545 7.54057 4.37456 7.54057 5.49713C7.54057 6.60609 6.64712 7.53976 5.50014 7.53976Z"
													fill="white"
												/>
											</svg>
										</div>
										<div className="footer-contact-link__name">
											Город, улица, д. 1, офис «6Б»
										</div>
									</a>,
									<span className="footer-contact-link">
										<div className="footer-contact-link__icon">
											<svg
												width="16"
												height="16"
												viewBox="0 0 16 16"
												fill="none"
												xmlns="http://www.w3.org/2000/svg"
											>
												<circle cx="8" cy="8" r="7.5" stroke="white" />
												<rect
													width="1"
													height="5"
													rx="0.5"
													transform="matrix(-1 0 0 1 8 4)"
													fill="white"
												/>
												<rect
													width="1"
													height="4"
													rx="0.5"
													transform="matrix(-4.37114e-08 1 1 4.37114e-08 7 8)"
													fill="white"
												/>
											</svg>
										</div>
										<div className="footer-contact-link__name">
											Пн-Пт 7:00 - 16:00 (МСК)
										</div>
									</span>,
									<a
										href="mailto:info@mail.test"
										className="footer-contact-link"
									>
										<div className="footer-contact-link__icon">
											<svg
												width="18"
												height="13"
												viewBox="0 0 18 13"
												fill="none"
												xmlns="http://www.w3.org/2000/svg"
											>
												<path
													d="M1 1L8.4 6.55C8.75556 6.81667 9.24444 6.81667 9.6 6.55L17 1"
													stroke="white"
												/>
												<rect
													x="0.5"
													y="0.5"
													width="17"
													height="12"
													rx="1.5"
													stroke="white"
												/>
											</svg>
										</div>

										<div className="footer-contact-link__name">
											info@mail.test
										</div>
									</a>,
									<div className="footer-socials">
										<a
											href="#"
											target="_blank"
											className="footer-socials__item"
										>
											<img src={tg} alt="" />
										</a>
										<a
											href="#"
											target="_blank"
											className="footer-socials__item"
										>
											<img src={fb} alt="" />
										</a>
										<a
											href="#"
											target="_blank"
											className="footer-socials__item"
										>
											<img src={wt} alt="" />
										</a>
										<a
											href="#"
											target="_blank"
											className="footer-socials__item"
										>
											<img src={vb} alt="" />
										</a>
									</div>,
								]}
							/>
						}
					</div>
					<div className="footer__item footer_show-lg">
						<FooterMenuItem
							title="ПОЛЕЗНЫЕ ССЫЛКИ"
							menu={[
								{
									href: '/order-and-sell',
									name: 'Способы оплаты и доставки',
								},
							]}
						/>
					</div>
					<div className="footer__item footer_show-lg">
						<FooterMenuItem
							title="НАША ГАРАНТИЯ"
							items={[
								<div>
									Недовольны своей покупкой? Вы можете вернуть ее в течении 30
									дней с даты получения, согласно{' '}
									<a href="#" className="active-link">
										{' '}
										нашим правилам{' '}
									</a>
								</div>,
							]}
						/>
					</div>
					<div className="footer__item footer_show-lg">
						<FooterMenuItem
							title=" НОВОСТНАЯ РАССЫЛКА"
							items={[
								<Subscription
									title="Подпишитесь прямо сейчас!"
									onSend={(value: string) => void 0}
								/>,
							]}
						/>
					</div>
				</div>
				<div className="footer__hr" />
				<div className="footer__copyright">www.site.com ©</div>
			</Container>
		</div>
	);
};
