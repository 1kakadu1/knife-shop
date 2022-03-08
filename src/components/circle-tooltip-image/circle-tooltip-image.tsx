import React, { useEffect, useRef, useState } from 'react';
import { useWindowSize } from '../../utils/useWindowSize';
import { ICircleTooltipImageProps } from './circle-tooltip-image.model';
import ReactTooltip from 'react-tooltip';
import './circle-tooltip-image.scss';

export const CircleTooltipImage = ({
	img,
	radius,
	radiusContainer = 4.5,
	tooltips,
	classContainer = '',
	classImage = '',
}: ICircleTooltipImageProps) => {
	const ref = useRef<HTMLImageElement | null>(null);
	const [circle, setCircle] = useState<JSX.Element[]>([]);
	const { width } = useWindowSize();

	const createTooltips = () => {
		let main = ref.current;
		if (ref) {
			const mainHeight = parseInt(
				window.getComputedStyle(main as Element).height.slice(0, -2)
			);
			const circleRadius =
				radius || (main!.offsetWidth + main!.offsetHeight) / radiusContainer;
			const theta = [
				0,
				Math.PI / 6,
				Math.PI / 4,
				Math.PI / 3,
				Math.PI / 2,
				2 * (Math.PI / 3),
				3 * (Math.PI / 4),
				5 * (Math.PI / 6),
				Math.PI,
				7 * (Math.PI / 6),
				5 * (Math.PI / 4),
				4 * (Math.PI / 3),
				3 * (Math.PI / 2),
				5 * (Math.PI / 3),
				7 * (Math.PI / 4),
				11 * (Math.PI / 6),
			];
			let circleArray: JSX.Element[] = [];

			for (let i = 0; i < 16; i++) {
				const tooltip = tooltips.find((x) => x.position === i);
				if (tooltip) {
					const posx = Math.round(circleRadius * Math.cos(theta[i])) + 'px';
					const posy = Math.round(circleRadius * Math.sin(theta[i])) + 'px';

					circleArray[i] = (
						<div
							key={'image-tooltip-' + tooltip.position}
							className={'circle-tooltip-image__tooltip number-' + i}
							style={{
								top: mainHeight / 2 - parseInt(posy.slice(0, -2)) + 'px',
								left: mainHeight / 2 + parseInt(posx.slice(0, -2)) + 'px',
								position: 'absolute',
							}}
							data-tip
							data-for={'tooltip-' + tooltip.position}
						>
							+
							<ReactTooltip
								className="circle-tooltip-image__tooltip-window"
								id={'tooltip-' + tooltip.position}
								place="top"
								effect="solid"
							>
								<span>{tooltip.text}</span>
							</ReactTooltip>
						</div>
					);
				}
			}
			setCircle(circleArray);
		}
	};

	useEffect(() => {
		createTooltips();
	}, []);

	useEffect(() => {
		createTooltips();
	}, [width]);

	return (
		<div className={`${classContainer} circle-tooltip-image`} ref={ref}>
			<div className="circle-tooltip-image__container-tooltip">{circle}</div>
			<img
				src={img}
				className={classImage + ' circle-tooltip-image__preview'}
				alt=""
			/>
		</div>
	);
};
