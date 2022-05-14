import React, { useEffect } from 'react';
import './city-search.scss';
import { ICitySearch } from './city-search.model';
import Map, { NavigationControl } from 'react-map-gl';
import GeocoderControl from './geocoder.component';

const mapboxAccessToken =
	'pk.eyJ1IjoiMWtha2FkeTEiLCJhIjoiY2wyeDhxdG82MHQ5MDNqb3pwdDh1YXRyeiJ9.QKQ_NGfhIoRaNbxvlbOyCw';

export const CitySearch = ({
	className = '',
	error,
	name = 'city-search',
	id,
	value,
	onChange,
}: ICitySearch) => {
	const [viewState, setViewState] = React.useState({
		longitude: -122.4,
		latitude: 37.8,
		zoom: 14,
	});

	useEffect(() => {
		navigator.geolocation.getCurrentPosition((pos) => {
			console.log(pos.coords.latitude, pos.coords.longitude);
			setViewState({
				...viewState,
				latitude: pos.coords.latitude,
				longitude: pos.coords.longitude,
			});
		});
	}, []);

	return (
		<div className="city-search">
			<h3 className="city-search__label">Выберете адрес догставки:</h3>
			<Map
				initialViewState={viewState}
				{...viewState}
				style={{ width: 'auto', height: 400 }}
				onMove={(evt) => setViewState(evt.viewState)}
				mapStyle="mapbox://styles/mapbox/streets-v9"
				mapboxAccessToken={mapboxAccessToken}
			>
				<GeocoderControl
					mapboxAccessToken={mapboxAccessToken}
					position="top-left"
					onResult={(e) => {
						console.log('onResult', e);
						onChange && onChange((e as any).result.place_name);
					}}
				/>
				<NavigationControl />
			</Map>
			<div className={`city-search__error ${error ? 'error' : ''}`}>
				{error}
			</div>
		</div>
	);
};
