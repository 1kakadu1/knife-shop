import React, { useRef, useState } from 'react';
import Map, { Marker, NavigationControl, Popup } from 'react-map-gl';
import { Helmet } from 'react-helmet';
import { Box } from '../../components/box/box.component';
import { Breadcrumbs } from '../../components/breadcrumbs/breadcrumbs.component';
import { Container } from '../../components/container/container.component';
import { Footer } from '../../components/footer/footer.component';
import { Header } from '../../components/header/header.component';
import { mapboxAccessToken } from '../../const/setting.const';
import './contact.scss';
import { contactInitMap, contactMarksMap } from '../../global-mock/map.mock';
import { IMarkShop } from './contact.model';
import { CallbackSection } from '../../components/section/section-callback/section-callback.component';
import { IconLocation } from '../../components/icons/location.icon.component';

export const ContactPage = () => {
	const [viewState, setViewState] = useState(contactInitMap);
	const [popup, setPopup] = useState<IMarkShop | null>(null);
	const refMapContainer = useRef<HTMLDivElement | null>(null);
	const onClickListItem = (item: IMarkShop) => {
		refMapContainer &&
			refMapContainer?.current?.scrollIntoView({
				behavior: 'smooth',
				block: 'start',
			});
		setViewState({
			...viewState,
			zoom: 14,
			latitude: item.point.latitude,
			longitude: item.point.longitude,
		});
		setPopup(item);
	};
	return (
		<div>
			<Helmet>
				<meta charSet="utf-8" />
				<title>Контакты</title>
			</Helmet>
			<Header />
			<Container>
				<Box styles={{ padding: '30px 0px' }}>
					<Breadcrumbs links={[{ name: 'Контакты' }]} />
				</Box>
			</Container>
			<div className="contact-map-container" ref={refMapContainer}>
				<Map
					initialViewState={viewState}
					{...viewState}
					style={{ width: 'auto', height: '500px' }}
					onMove={(evt) => setViewState(evt.viewState)}
					mapStyle="mapbox://styles/mapbox/streets-v9"
					mapboxAccessToken={mapboxAccessToken}
				>
					<NavigationControl />
					{contactMarksMap.map((item) => (
						<Marker
							key={item.id}
							longitude={item.point.longitude}
							latitude={item.point.latitude}
							anchor="bottom"
							onClick={(e) => {
								e.originalEvent.stopPropagation();
								setPopup(item);
							}}
						/>
					))}

					{popup && (
						<Popup
							anchor="top"
							longitude={Number(popup.point.longitude)}
							latitude={Number(popup.point.latitude)}
							onClose={() => setPopup(null)}
						>
							{popup.preview && (
								<img className="map-popup__img" src={popup.preview} alt="" />
							)}
							<h1 className="map-popup__title">{popup.name}</h1>
							<p className="map-popup__desc">{popup.desc}</p>
						</Popup>
					)}
				</Map>
			</div>
			<Container className="contact-city">
				<Box styles={{ padding: '12px' }} />
				<h1 className="contact-city__title">Список доступных магазинов:</h1>
				<ul className="contact-city-list">
					{contactMarksMap.map((item) => (
						<li
							key={'list' + item.id}
							className="contact-city-list__item contact-city-box"
						>
							<div className="contact-city-box__text-info">
								<div className="contact-city-box__name">{item.name}</div>
								<div className="contact-city-box__address">{item.address}</div>
								<div
									className="contact-city-box__show-map"
									onClick={() => onClickListItem(item)}
								>
									<IconLocation />
									<span>На карте</span>
								</div>
								<div className="contact-city-box__time">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="32"
										height="32"
										enableBackground="new 0 0 32 32"
										viewBox="0 0 32 32"
									>
										<path
											fill="#263238"
											d="M16,31C7.729,31,1,24.271,1,16c0-3.646,1.323-7.16,3.727-9.895C4.91,5.898,5.226,5.879,5.433,6.06
                                            C5.64,6.242,5.66,6.559,5.479,6.766C3.235,9.317,2,12.597,2,16c0,7.72,6.28,14,14,14s14-6.28,14-14S23.72,2,16,2
                                            c-2.504,0-4.96,0.668-7.103,1.933C8.662,4.07,8.354,3.994,8.213,3.756C8.072,3.519,8.151,3.212,8.39,3.071
                                            C10.686,1.716,13.317,1,16,1c8.271,0,15,6.729,15,15S24.271,31,16,31z"
										/>
										<path
											fill="#263238"
											d="M16,28.5C9.107,28.5,3.5,22.893,3.5,16S9.107,3.5,16,3.5S28.5,9.107,28.5,16S22.893,28.5,16,28.5z M16,4.5
                                            C9.659,4.5,4.5,9.659,4.5,16S9.659,27.5,16,27.5S27.5,22.341,27.5,16S22.341,4.5,16,4.5z"
										/>
										<path
											fill="#263238"
											d="M20.75 8.27c-.13 0-.26-.05-.351-.14-.1-.1-.149-.23-.149-.36s.05-.26.149-.35c.19-.19.521-.19.7 0 .101.09.15.22.15.35S21.2 8.03 21.1 8.12C21.01 8.22 20.88 8.27 20.75 8.27zM11.25 24.729c-.13 0-.26-.06-.351-.149-.1-.101-.149-.23-.149-.351 0-.13.05-.26.14-.359.19-.181.53-.181.71 0 .101.1.15.229.15.359 0 .12-.05.25-.141.351C11.51 24.67 11.38 24.729 11.25 24.729zM24.229 11.75c-.13 0-.26-.05-.35-.141-.1-.1-.15-.229-.15-.359s.051-.26.141-.351c.199-.199.529-.189.71 0 .09.091.149.221.149.351s-.05.26-.149.35C24.49 11.7 24.359 11.75 24.229 11.75zM7.77 21.25c-.13 0-.25-.05-.35-.141C7.319 21 7.27 20.87 7.27 20.75c0-.13.05-.25.141-.351.22-.199.529-.189.72 0 .09.091.14.221.14.351s-.05.26-.14.35C8.03 21.2 7.91 21.25 7.77 21.25zM25.5 16.5c-.13 0-.26-.05-.351-.15C25.05 16.26 25 16.13 25 16s.05-.26.149-.351c.181-.189.511-.189.7-.01C25.95 15.74 26 15.87 26 16s-.05.26-.141.35C25.76 16.45 25.63 16.5 25.5 16.5zM6.5 16.5c-.13 0-.26-.05-.351-.15C6.05 16.26 6 16.13 6 16s.05-.26.149-.351c.181-.189.511-.189.7-.01C6.95 15.74 7 15.87 7 16s-.05.26-.141.35C6.76 16.45 6.63 16.5 6.5 16.5zM24.229 21.25c-.13 0-.26-.05-.359-.141-.09-.1-.141-.229-.141-.359s.051-.26.141-.351c.199-.199.529-.189.71 0 .09.091.149.221.149.351s-.05.26-.149.35C24.49 21.2 24.359 21.25 24.229 21.25zM7.77 11.75c-.13 0-.25-.05-.35-.141C7.319 11.5 7.27 11.37 7.27 11.25c0-.13.05-.25.141-.351.22-.199.529-.189.72 0 .09.091.14.221.14.351s-.05.26-.14.35C8.03 11.7 7.899 11.75 7.77 11.75zM20.75 24.729c-.13 0-.26-.05-.351-.14-.1-.11-.149-.23-.149-.36s.05-.26.14-.359c.2-.19.521-.181.71 0 .101.1.15.229.15.359 0 .12-.05.25-.141.351C21.01 24.68 20.88 24.729 20.75 24.729zM11.25 8.27c-.13 0-.26-.05-.351-.149C10.8 8.03 10.75 7.899 10.75 7.77s.05-.26.149-.35c.181-.19.511-.19.7-.01.101.1.15.229.15.359S11.7 8.03 11.6 8.12C11.5 8.22 11.38 8.27 11.25 8.27zM16 26c-.13 0-.25-.05-.351-.141C15.55 25.75 15.5 25.63 15.5 25.5s.05-.26.14-.351c.21-.199.53-.189.71 0C16.45 25.24 16.5 25.37 16.5 25.5s-.05.26-.15.35C16.26 25.95 16.13 26 16 26zM16 7c-.13 0-.25-.05-.351-.141C15.55 6.76 15.5 6.63 15.5 6.5c0-.141.05-.26.14-.351.21-.199.53-.189.71 0C16.45 6.24 16.5 6.37 16.5 6.5s-.05.26-.141.35C16.26 6.95 16.13 7 16 7zM22.364 9.636c-.195-.195-.512-.195-.707 0l-5.413 5.413c.351.091.616.356.707.707l5.413-5.413C22.56 10.147 22.56 9.831 22.364 9.636zM15.756 15.049l-6.12-6.12c-.195-.195-.512-.195-.707 0s-.195.512 0 .707l6.12 6.12C15.14 15.405 15.405 15.14 15.756 15.049z"
										/>
										<path
											fill="#263238"
											d="M16,17.5c-0.827,0-1.5-0.673-1.5-1.5s0.673-1.5,1.5-1.5s1.5,0.673,1.5,1.5S16.827,17.5,16,17.5z M16,15.5
                                            c-0.275,0-0.5,0.225-0.5,0.5s0.225,0.5,0.5,0.5s0.5-0.225,0.5-0.5S16.275,15.5,16,15.5z"
										/>
										<g>
											<path
												fill="#263238"
												d="M7.5,4.5C7.5,4.775,7.275,5,7,5l0,0C6.725,5,6.5,4.775,6.5,4.5l0,0C6.5,4.225,6.725,4,7,4l0,0
                                                                    C7.275,4,7.5,4.225,7.5,4.5L7.5,4.5z"
											/>
										</g>
									</svg>
									<span>{item.desc}</span>
								</div>
							</div>
							<div className="contact-city-box__callback-info">
								{item.phones && (
									<div className="contact-city-box__phones">
										{item.phones.map((item: string, index) => (
											<a
												href={'tel:' + item}
												key={'phone-' + index}
												className="contact-city-box__link"
											>
												{item}
											</a>
										))}
									</div>
								)}
								{item.emails && (
									<div className="contact-city-box__emails">
										{item.emails.map((item: string, index) => (
											<a
												key={'email-' + index}
												href={'mailto:' + item}
												className="contact-city-box__link"
											>
												{item}
											</a>
										))}
									</div>
								)}
							</div>
						</li>
					))}
				</ul>
			</Container>
			<CallbackSection />
			<Footer />
		</div>
	);
};
