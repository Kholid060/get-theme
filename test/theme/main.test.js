import cssMatcher from 'jest-matcher-css';
import merge from 'lodash.merge';
import generateTailwindCss from '../generateTailwindCss';
import theme from '../../src/main';

expect.extend({
	toMatchCss: cssMatcher,
});

async function getCss(tailwindConfig) {
	const css = await generateTailwindCss(merge({
		theme: {
			screens: false,
		},
		variants: {
			backgroundColor: false,
			textColor: false,
		},
		plugins: [theme()],
	}, tailwindConfig));

	return css;
}

it('generate theme based on tailwind config', async () => {
	const css = await getCss({
		customTheme: {
			light: {
				isDefault: true,
				scheme: {
					backgroundColor: {
						primary: '#0070F3',
					},
				},
			},
			dark: {
				selector: '[data-theme="dark"]',
				scheme: {
					backgroundColor: {
						primary: '#4299E1',
					},
					textColor: {
						default: '#161b25',
					},
				},
			},
		},
	});

	expect(css).toMatchCss(` 
		:root, [data-theme="light"] {
			--bg-primary: 0, 112, 243;
		}
		[data-theme="dark"] {
			--bg-primary: 66, 153, 225;
			--text-default: 22, 27, 37;
		}
		.bg-primary {
			--bg-opacity: 1;
      background-color: rgba(var(--bg-primary), var(--bg-opacity));
		}
		.text-default {
			--text-opacity: 1;
      color: rgba(var(--text-default), var(--text-opacity));
		}
	`);
});
