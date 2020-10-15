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
			prefix: isColorsVariant ? 'color-' : 'text-',
			property: 'color',
			variable: '--text-opacity',
		});

		return {
			[`.text-${modifier}`]: property,
		};
	});

	addUtilities(utilities, variants('textColor'));
};