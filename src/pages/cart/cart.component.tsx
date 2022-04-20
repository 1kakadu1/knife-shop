import React from 'react';
import { Helmet } from 'react-helmet';
import { SwitchTransition, CSSTransition } from 'react-transition-group';
import { AsideCart } from '../../components/aside/aside-cart/aside-cart.component';
import { Box } from '../../components/box/box.component';
import { Breadcrumbs } from '../../components/breadcrumbs/breadcrumbs.component';
import { CartFull } from '../../components/cart/cart.components';
import { ContainerAside } from '../../components/container-aside/container-aside.component';
import { Container } from '../../components/container/container.component';
import { Footer } from '../../components/footer/footer.component';
import { Header } from '../../components/header/header.component';
import { useCart } from '../../hook/useCart';
import './cart.scss';
import empty from '../../assets/images/empty-cart.svg';

export const CartPage = () => {
	const { counter } = useCart();
	return (
		<div>
			<Helmet>
				<meta charSet="utf-8" />
				<title>Cart</title>
			</Helmet>
			<Header />
			<Container>
				<Box styles={{ padding: '30px 0px' }}>
					<Breadcrumbs links={[{ name: 'Корзина' }]} />
				</Box>
				<div className="cart-page">
					<SwitchTransition>
						<CSSTransition
							key={counter === 0 ? 'empty' : 'not_empty'}
							addEndListener={(
								node: {
									addEventListener: (
										arg0: string,
										arg1: any,
										arg2: boolean
									) => any;
								},
								done: any
							) => node.addEventListener('transitionend', done, false)}
							classNames="fade"
						>
							<div>
								{counter === 0 ? (
									<div className="cart-page-empty">
										<img
											className="cart-page-empty__preview"
											src={empty}
											alt="cart empty"
										/>
										<h3 className="cart-page-empty__title">
											Ваша корзина пуста !
										</h3>
									</div>
								) : (
									<ContainerAside
										aside={<AsideCart />}
										content={<CartFull />}
										position="right"
										height="auto"
										sticky
									/>
								)}
							</div>
						</CSSTransition>
					</SwitchTransition>
				</div>
			</Container>

			<Footer />
		</div>
	);
};
