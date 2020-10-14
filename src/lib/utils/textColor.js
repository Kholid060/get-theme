import alphaColorVariable from '../../utils/alphaColorVariable';

export default function (colors, { addUtilities, variants }) {
	const utilities = Object.entries(colors).map(([modifier, color]) => {
		const property = alphaColorVariable({
			modifier,
			color,
			prefix: 'text-',
			property: 'color',
			variable: '--text-opacity',
		});

		return {
			[`.text-${modifier}`]: property,
		};
	});

	addUtilities(utilities, variants('textColor'));
};