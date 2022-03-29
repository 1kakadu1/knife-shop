import React from 'react';
import { IGalleryProps } from './gallery-slider.model';
import ImageGallery from 'react-image-gallery';
import './gallery-slider.scss';

export const GallerySlider = ({ className = '', ...props }: IGalleryProps) => {
	return (
		<div className={'gallery ' + className}>
			<ImageGallery {...props} />
		</div>
	);
};
