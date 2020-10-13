import merge from 'lodash.merge';

export const getScheme = (scheme, theme) => typeof scheme === 'function' ? scheme(theme) : scheme;

export default function (themes, plugin = {}) {
	const schemes = Object.values(themes).reduce((obj, { scheme }) => {
		const schemeObj = getScheme(scheme, plugin.theme);

		merge(obj, schemeObj);

		return obj;
	}, {});

	return schemes;
};