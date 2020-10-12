import plugin from 'tailwindcss/plugin';
import cssMatcher from 'jest-matcher-css';
import themeVariables from '../../src/lib/themeVariables';
import generateTailwindCss from '../generateTailwindCss';

expect.extend({
  toMatchCss: cssMatcher,
});

async function getCss(pluginConfig, tailwindConfig) {
	const tailwindPlugin = plugin((params) => {
		themeVariables(pluginConfig, params);
	});
	const css = await generateTailwindCss({
		...tailwindConfig,
		plugins: [tailwindPlugin],
	});

	return css;
}

it('generate theme variables', async () => {
	const css = await getCss({
		selector: '.dark-theme',
		scheme: {
			backgroundColor: {
				primary: '#0070F3',
				danger: '#F56565',
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
	});

	expect(css).toMatchCss(` 
		.dark-theme {
			--bg-primary: 0, 112, 243;
			--bg-danger: 245, 101, 101;
			--bg-input: 160, 174, 192, 0.1;
			--text-default: 22, 27, 37;
			--text-light: 29, 35, 49;
			--border-default: 226, 232, 240;
		}
	`);
});
