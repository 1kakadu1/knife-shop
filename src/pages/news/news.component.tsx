import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Breadcrumbs } from '../../components/breadcrumbs/breadcrumbs.component';
import { ContainerAside } from '../../components/container-aside/container-aside.component';
import { Container } from '../../components/container/container.component';
import { Footer } from '../../components/footer/footer.component';
import { Header } from '../../components/header/header.component';
import { SectionRow } from '../../components/section/section-row/section-row.component';
import './news.scss';
import { Pagination } from '../../components/pagination/pagination.component';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { RoutsPath } from '../../routes/routes.model';
import { AsideNews } from '../../components/aside/aside-news/aside-news.component';
import { useSelector } from 'react-redux';
import { toNewsSelector } from '../../store/reducer/news/news.selector';
import { CardPost } from '../../components/ cards/card-post/card-post.component';
import { SubscribeSection } from '../../components/section/subscribe-section/subscribe-section.component';

export const NewsPage = () => {
	const { page = 1 } = useParams();
	const navigate = useNavigate();
	const { search } = useLocation();
	const news = useSelector(toNewsSelector.news);
	const total = useSelector(toNewsSelector.total);

	const onChangePagination = (page: number) => {
		navigate(RoutsPath.products + '/' + page + search);
	};

	useEffect(() => {
		window.scrollTo(0, 0);
	}, [page]);

	return (
		<div>
			<Helmet>
				<meta charSet="utf-8" />
				<title>Последние новости</title>
			</Helmet>
			<Header />
			<Container>
				<div className="news">
					<div className="h1-title news_title">Последние новости</div>
					<div className="news__header">
						<div className="news__breadcrumbs">
							<Breadcrumbs links={[{ name: 'Новости' }]} />
						</div>
					</div>

					<ContainerAside
						aside={<AsideNews />}
						content={
							<SectionRow container={false}>
								{news.map((item) => (
									<div key={item.id} className="section-row__item-3">
										<CardPost data={item} />
									</div>
								))}
							</SectionRow>
						}
						sticky
						shadow
					/>
					<div className="page-pagination-container">
						<Pagination
							count={total}
							page={Number(page)}
							onChange={onChangePagination}
							search={search}
						/>
					</div>
				</div>
			</Container>
			<SubscribeSection />
			<Footer />
		</div>
	);
};
