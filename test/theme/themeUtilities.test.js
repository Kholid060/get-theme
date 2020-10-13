import cssMatcher from 'jest-matcher-css';
import plugin from 'tailwindcss/plugin';
import themeUtilities from '../../src/lib/themeUtilities';
import generateTailwindCss from '../generateTailwindCss';

expect.extend({
  toMatchCss: cssMatcher,
});

async function getCss(pluginConfig, tailwindConfig) {
	const tailwindPlugin = plugin((params) => {
		themeUtilities(pluginConfig, params);
	});
	const css = await generateTailwindCss({
		...tailwindConfig,
		theme: {
			screens: false,
		},
		plugins: [tailwindPlugin],
	});

	return css;
}

it('generate background color utilities', async () => {
	const css = await getCss({
		name: 'backgroundColor',
		scheme: {
			primary: '#2E3440',
			secondary: '#3B4252',
			white: 'white',
		},
	}, {
		variants: {
			backgroundColor: false,
		},
	});

	expect(css).toMatchCss(`
		.bg-primary {
			--bg-opacity: 1;
			background-color: rgba(var(--bg-primary), var(--bg-opacity))
		}
		.bg-secondary {
			--bg-opacity: 1;
			background-color: rgba(var(--bg-secondary), var(--bg-opacity))
		}
		.bg-white {
			--bg-opacity: 1;	
			background-color: rgba(var(--bg-white), var(--bg-opacity)) 
		}
	`);
});

it('generate text color utilities with hover variant', async () => {
	const css = await getCss({
		name: 'textColor',
		scheme: {
			default: '#2E3440',
		},
	}, {
		variants: {
			textColor: ['hover'],
		},
	});

	expect(css).toMatchCss(`
		.text-default {
			--text-opacity: 1;
			color: rgba(var(--text-default), var(--text-opacity))
		}
		.hover\\:text-default:hover {
			--text-opacity: 1;
			color: rgba(var(--text-default), var(--text-opacity))
		}
	`);
});

it('generates background color utilities with an alpha channel', async () => {
	const css = await getCss({
		name: 'backgroundColor',
		scheme: {
			input: 'rgba(0, 0, 0, 0.4)',
			'blue-light': '#0000ff4d',
		},
	}, {
		variants: {
			backgroundColor: false,
		},
	});

	expect(css).toMatchCss(`
		.bg-input {
			background-color: rgba(var(--bg-input));
		}
		.bg-blue-light {
			background-color: rgba(var(--bg-blue-light));
		}
	`);
});

it('generate non color utilities', async () => {
	const css = await getCss({
		name: 'fontFamily',
		scheme: {
			serif: '20px',
		},
	}, {
		variants: {
			fontFamily: false,
		},
	});

	expect(css).toMatchCss(` 
		.serif {
			font-family: var(--serif);
		}
	`);
});
