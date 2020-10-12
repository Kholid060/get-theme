import tailwindcss from 'tailwindcss';
import postcss from 'postcss';
import merge from 'lodash.merge';
import themePlugin from '../src/main';

export default async function(config) {
	const { css } = await postcss(
		tailwindcss(merge({
			corePlugins: false 
		}, config))
	).process('@tailwind base; @tailwind components; @tailwind utilities', {
    from: undefined,
  });

	return css;
}
