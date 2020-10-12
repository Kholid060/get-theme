import cssMatcher from 'jest-matcher-css';
import plugin from 'tailwindcss/plugin';
import merge from 'lodash.merge';
import generateTailwindCss from '../generateTailwindCss';
import addTheme from '../../src/lib/addTheme';

expect.extend({
	toMatchCss: cssMatcher,
});

async function getCss(pluginConfig, tailwindConfig) {
	const tailwindPlugin = plugin((params) => {
		addTheme(pluginConfig, params);
	});
	const css = await generateTailwindCss(merge({
		theme: {
			screens: false,
		},
		plugins: [tailwindPlugin],
	}, tailwindConfig));

	return css;
}

it('generate theme variables and utilities', async () => {
	const css = await getCss({
		selector: '.light-theme',
		scheme: {
			backgroundColor: {
				primary: '#0070F3',
				input: 'rgba(160, 174, 192, 0.1)',
			},
			textColor: {
				default: '#161b25',
				light: '#1d2331',
			},
			borderColor: {
				default: '#e2e8f0',
			},
		},
	}, {
		variants: {
			borderColor: false,
			backgroundColor: false,
			textColor: false,
		},
	});

	expect(css).toMatchCss(` 
		.light-theme {
			--bg-primary: 0, 112, 243;
			--bg-input: 160, 174, 192, 0.1;
			--text-default: 22, 27, 37;
			--text-light: 29, 35, 49;
			--border-default: 226, 232, 240;
		}
		.bg-primary {
			--bg-opacity: 1;
      background-color: #0070F3;
      background-color: rgba(var(--bg-primary), var(--bg-opacity));
		}
		.bg-input {
      background-color: rgba(var(--bg-input));
		}
		.text-default {
			--text-opacity: 1;
      color: #161b25;
      color: rgba(var(--text-default), var(--text-opacity))
		}
		.text-light {
			--text-opacity: 1;
      color: #1d2331;
      color: rgba(var(--text-light), var(--text-opacity))
		}
		.border-default {
			--border-opacity: 1;
			border-color: #e2e8f0;
			border-color: rgba(var(--border-default), var(--border-opacity));
		}
	`);
});