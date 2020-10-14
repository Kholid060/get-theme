import kebabCase from 'lodash.kebabcase';
import alphaColorVariable from '../utils/alphaColorVariable';
import * as utils from './utils';

export default function ({ name, scheme }, plugin) {
  if (utils[name]) {
    utils[name](scheme, plugin);
    return;
  }

  plugin.addUtilities({
    [`.${modifier}`]: {
      [kebabCase(name)]: `var(--${modifier})`,
    },
  }, variants(name));
};
