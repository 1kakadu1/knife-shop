import { useEffect, useRef, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export const useFilterUrl = <T extends { [key: string]: any }>(
	filter: T,
	options?: {
		setFilter?: (value: { [key: string]: any }) => void;
		offUpdate?: boolean;
		unMountFilter?: () => void;
	}
) => {
	const navigate = useNavigate();
	const location = useLocation();
	const initRef = useRef(false);
	const [newSearch, setNewSearch] = useState('');
	const { offUpdate = false } = options || {};

	const updateUrl = (value: { [key: string]: any }) => {
		const q = createSearch(value);
		setNewSearch(q);
		navigate({
			pathname: location.pathname,
			search: '?' + q,
		});
	};

	useEffect(() => {
		if (options && options.setFilter && location.search) {
			const filterMount = queryParse(location.search);
			setNewSearch(createSearch(filterMount));
			options.setFilter(filterMount);
		}
		return () => {
			if (options?.unMountFilter) {
				options?.unMountFilter();
			}
		};
	}, []);

	useEffect(() => {
		if (initRef.current && !offUpdate) {
			updateUrl(filter);
		} else {
			initRef.current = true;
		}
	}, [filter]);

	return {
		init: initRef.current,
		search: newSearch,
		updateUrl: updateUrl,
		queryParse: queryParse,
		createSearch: createSearch,
	};
};

const createSearch = (filter: { [key: string]: any }) => {
	return Object.keys(filter || {})
		.map(function (key) {
			if (typeof filter[key] === 'object') {
				return key + '=' + JSON.stringify(filter[key]);
			}
			return key + '=' + filter[key];
		})
		.join('&');
};

function queryParse(search: string) {
	let qd: { [key: string]: any } = {};

	if (search)
		search
			.substr(1)
			.split('&')
			.forEach(function (item) {
				let s = item.split('='),
					k = s[0],
					v = s[1] && decodeURIComponent(s[1]);
				try {
					const parse = JSON.parse(v);
					if (typeof parse === 'object') {
						qd[k] = parse;
					} else {
						qd[k] = v;
					}
				} catch (e) {
					qd[k] = v;
				}
			});

	return qd;
}
