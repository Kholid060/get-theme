import themeVariables from './themeVariables';
import themeUtilities from './themeUtilities';

export default function(theme, plugin) {
  const scheme = typeof theme.scheme === 'function' ? theme.scheme(plugin.theme) : theme.scheme;
	
  themeVariables({ ...theme, scheme }, plugin);

  Object.entries(scheme).forEach(([name, value]) => {
    if (typeof value === 'undefined') return;
  
    themeUtilities({
      name,
      scheme: value,
    }, plugin);
  });
};
