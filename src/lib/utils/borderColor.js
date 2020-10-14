import alphaColorVariable from '../../utils/alphaColorVariable';

export default function (colors, { addUtilities, variants }) {
	const utilities = Object.entries(colors).map(([modifier, color]) => {
		const property = alphaColorVariable({
			modifier,
			color,
			prefix: 'border-',
			property: 'border-color',
			variable: '--border-opacity',
		});

		return {
			[`.border-${modifier}`]: property,
		};
	});

	addUtilities(utilities, variants('borderColor'));
};