import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Box } from '../../components/box/box.component';
import { Breadcrumbs } from '../../components/breadcrumbs/breadcrumbs.component';
import { Container } from '../../components/container/container.component';
import { Divider } from '../../components/divider/divider.component';
import { Footer } from '../../components/footer/footer.component';
import { Header } from '../../components/header/header.component';
import { Reviews } from '../../components/reviews/reviews.component';
import { SubscribeSection } from '../../components/section/subscribe-section/subscribe-section.component';
import { RoutsPath } from '../../routes/routes.model';
import { toNewsSelector } from '../../store/reducer/news/news.selector';
import { toSingleNewsAction } from '../../store/reducer/single-news/single-news.reducer';
import { toSingleNewsSelector } from '../../store/reducer/single-news/single-news.selector';
import './news.scss';

export const NewsSinglePage = () => {
	const { slug = '' } = useParams();
	const newsStore = useSelector(toNewsSelector.getNewsBySlug(slug));
	const dispatch = useDispatch();
	const news = useSelector(toSingleNewsSelector.singleNews);

	useEffect(() => {
		window.scrollTo(0, 0);

		if (newsStore) {
			dispatch(toSingleNewsAction.setSingleNews(newsStore));
		}

		return () => {
			dispatch(toSingleNewsAction.setSingleNews(undefined));
		};
	}, []);

	const newsName = news?.title || newsStore?.title || 'News single';

	return (
		<div>
			<Helmet>
				<meta charSet="utf-8" />
				<title>{newsName}</title>
			</Helmet>
			<Header />

			<Container>
				<Box styles={{ padding: '30px 0px' }}>
					<Breadcrumbs
						links={[
							{
								href: RoutsPath.news,
								name: 'Новости',
							},
							{ name: newsName },
						]}
					/>
				</Box>
				<div>
					{news ? (
						<>
							<div className="news-info">
								<div className="news-info__header">
									<div className="news-info__header-title">{newsName}</div>
									<img
										src={news.preview}
										alt=""
										className="news-info__header-preview"
									/>
								</div>
								<div
									className="news-info__body"
									dangerouslySetInnerHTML={{ __html: news?.desc }}
								/>
							</div>
							<Divider />
							<div className="news__reviews">
								<div className="news__reviews-title">
									Последние комментарии:
								</div>
								<Reviews reviews={news?.reviews} />
							</div>
						</>
					) : (
						'Такой новости нет'
					)}
				</div>
			</Container>
			<SubscribeSection />
			<Footer />
		</div>
	);
};
