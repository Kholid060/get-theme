import addTheme from './lib/addTheme';

export default function(plugin, config = {}) {
	if (typeof plugin === 'undefined') throw new Error('You need pass tailwind plugin');

  return plugin((tailwind) => {
    const themes = tailwind.config('customTheme') || config;

    Object.entries(themes).forEach(([name, value]) => {
      addTheme({ name, ...value }, tailwind);
    });
  });
};
