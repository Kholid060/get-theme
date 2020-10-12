import generateVariables from '../utils/generateVariables';

export default function({ scheme, selector, isDefault, name }, plugin) {
	const themeVariables = Object.entries(scheme).reduce((variables, [property, value]) => {
		if (typeof scheme[property] !== 'object' || scheme === null) return variables;
	
		Object.assign(variables, generateVariables(property, value));

		return variables;
	}, {});

	const themeSelector = isDefault || name === 'default' 
		? ':root' 
		: (selector || `data-theme="${name}"`);

	plugin.addBase({
		[themeSelector]: themeVariables,
	});
}