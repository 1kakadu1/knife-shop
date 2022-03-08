import React from 'react';
import { IIconProps } from './icon.model';

export const IconCompare = ({ className = '' }: IIconProps) => {
	return (
		<svg className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
			<path
				d="M25.9558 12.5275L25.9337 12.5386L22.2036 3.25484H23.9056C24.2108 3.25484 24.4582 3.00741 24.4582 2.70223C24.4582 2.39706 24.2108 2.14963 23.9056 2.14963H13.5056V0.552604C13.5056 0.247428 13.2582 0 12.953 0C12.6479 0 12.4004 0.247428 12.4004 0.552604V2.1441H2.00595C1.70078 2.1441 1.45335 2.39153 1.45335 2.69671C1.45335 3.00188 1.70078 3.24931 2.00595 3.24931H3.77981L0.0442083 12.5275C0.0165781 12.5922 0.00158874 12.6617 0 12.732C0 15.2697 2.0572 17.3269 4.5949 17.3269C7.13259 17.3269 9.1898 15.2697 9.1898 12.732C9.18821 12.6617 9.17322 12.5922 9.14559 12.5275L5.41552 3.24378H12.4004V20.3303C9.76451 20.5292 7.70329 22.1318 7.70329 24.0714C7.70329 24.3766 7.95072 24.624 8.2559 24.624H17.6502C17.9553 24.624 18.2028 24.3766 18.2028 24.0714C18.2028 22.1318 16.1416 20.5292 13.5056 20.3303V3.24378H20.5624L16.8544 12.5275C16.8268 12.5922 16.8118 12.6617 16.8102 12.732C16.8102 15.2697 18.8674 17.3269 21.4051 17.3269C23.9428 17.3269 26 15.2697 26 12.732C25.9984 12.6617 25.9834 12.5922 25.9558 12.5275ZM4.59214 16.23C2.88058 16.2276 1.42295 14.9852 1.14942 13.2956H8.01275C7.74059 14.977 6.29533 16.2168 4.59214 16.23ZM7.81382 12.1904H1.38151L4.60319 4.17216L7.81382 12.1904ZM16.9981 23.5188H8.90244C9.31137 22.3307 10.9968 21.4134 12.9475 21.4134C14.8982 21.4134 16.5892 22.3307 16.9981 23.5188ZM21.3802 4.17768L24.5909 12.1904H18.1586L21.3802 4.17768ZM21.3802 16.23V16.2355C19.6752 16.2219 18.2294 14.9792 17.9596 13.2956H24.823C24.5494 14.9852 23.0918 16.2276 21.3802 16.23Z"
				fill="black"
			/>
		</svg>
	);
};