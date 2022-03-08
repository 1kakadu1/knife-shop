import React from 'react';
import { ITitleTextProps } from './title-text.model';
import './title-text.scss';

export const TitleText = ({ className = '', text }: ITitleTextProps) => {
	return <p className={`title-text ${className}`}>{text}</p>;
};
