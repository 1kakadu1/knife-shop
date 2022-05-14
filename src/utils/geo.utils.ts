export function parseReverseGeo(geoData: any) {
	let locality, region, country, postcode, returnStr;
	if (geoData.context) {
		geoData.context.forEach((v: any, i: number) => {
			if (v.id.indexOf('locality') >= 0) {
				locality = v.text;
			}
			if (v.id.indexOf('postcode') >= 0) {
				postcode = v.text;
			}
			if (v.id.indexOf('region') >= 0) {
				region = v.text;
			}
			if (v.id.indexOf('country') >= 0) {
				country = v.text;
			}
		});
	}
	if (postcode && region && country) {
		returnStr = `${geoData.address} ${geoData.text}, ${locality} ${region} ${postcode}, ${country}`;
	} else {
		returnStr = geoData.place_name;
	}
	return {
		number: geoData.address,
		address: geoData.text,
		locality,
		region,
		postcode,
		country,
		concat: returnStr,
		complete: geoData.place_name,
	};
}
