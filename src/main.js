import plugin from 'tailwindcss/plugin';
import themeVariables from './lib/themeVariables';
import themeUtilities from './lib/themeUtilities';
import flattenScheme, { getScheme } from './utils/flattenScheme';

export default function(config = {}) {
  return plugin((tailwind) => {
    const themes = tailwind.config('customTheme') || config;

    Object.entries(themes).forEach(([name, value]) => {
      themeVariables({ 
      	...value,
        name,
      	scheme: getScheme(value.scheme, tailwind.theme),
      }, tailwind);
    });

    const schemes = flattenScheme(themes, tailwind);
  	Object.entries(schemes).forEach(([name, scheme]) => {
  		themeUtilities({ name, scheme }, tailwind);
  	});
  });
};
