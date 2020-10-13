import themeVariables from './lib/themeVariables';
import themeUtilities from './lib/themeUtilities';
import flattenScheme, { getScheme } from './utils/flattenScheme';

export default function(plugin, config = {}) {
	if (typeof plugin === 'undefined') throw new Error('You need pass tailwind plugin');

  return plugin((tailwind) => {
    const themes = tailwind.config('customTheme') || config;

    Object.entries(themes).forEach(([name, value]) => {
      themeVariables({ 
      	...value,
      	scheme: getScheme(value.scheme, tailwind.theme),
      }, tailwind);
    });

    const schemes = flattenScheme(themes, tailwind);
  	Object.entries(schemes).forEach(([name, scheme]) => {
  		themeUtilities({ name, scheme }, tailwind);
  	});
  });
};
