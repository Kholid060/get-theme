import alphaColorVariable from '../../utils/alphaColorVariable';

export default function (
	colors, 
	{ addUtilities, variants }, 
	isColorsVariant,
) {
	const utilities = Object.entries(colors).map(([modifier, color]) => {
		const property = alphaColorVariable({
			modifier,
			color,
			prefix: isColorsVariant ? 'color-' : 'border-',
			property: 'border-color',
			variable: '--border-opacity',
		});

		return {
			[`.border-${modifier}`]: property,
		};
	});

	addUtilities(utilities, variants('borderColor'));
};