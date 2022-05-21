import React from 'react';
import { Helmet } from 'react-helmet';
import { Container } from '../../components/container/container.component';
import { Footer } from '../../components/footer/footer.component';
import { Header } from '../../components/header/header.component';
import { AboutSection } from '../../components/section/about-info/about-info.component';
import './about.scss';
import a1 from '../../assets/images/about/about-1.jpg';
import a2 from '../../assets/images/about/about-2.jpg';
import { Box } from '../../components/box/box.component';
import { Breadcrumbs } from '../../components/breadcrumbs/breadcrumbs.component';
import { IconsInformation } from '../../components/section/icons-information/icons-information.component';
import { iconsInformationMock } from '../../components/section/icons-information/icons-information.mock';
import { SubscribeSection } from '../../components/section/subscribe-section/subscribe-section.component';

export const AboutPage = () => {
	return (
		<div>
			<Helmet>
				<meta charSet="utf-8" />
				<title>О нас</title>
			</Helmet>
			<Header />
			<Container>
				<Box styles={{ padding: '30px 0px' }}>
					<Breadcrumbs links={[{ name: 'О нас' }]} />
				</Box>
				<Box styles={{ padding: '20px' }}>
					<h1 className="about-title about-title_center">
						Узнай о нас больше!
					</h1>
				</Box>
				<AboutSection
					preview={a1}
					text={
						"orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
					}
				/>
				<AboutSection
					preview={a2}
					text={
						"orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
					}
					order={1}
				/>
				<Box styles={{ padding: '20px' }}>
					<h2 className="about-title about-title_center">Мы предоставляем</h2>
				</Box>

				<Box styles={{ padding: '20px' }} />
				<IconsInformation data={iconsInformationMock} color="black" />
				<Box styles={{ padding: '20px' }} />
			</Container>
			<SubscribeSection />
			<Footer />
		</div>
	);
};
