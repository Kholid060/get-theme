import kebabCase from 'lodash.kebabcase';
import alphaColorVariable from '../utils/alphaColorVariable';
import properties from '../utils/properties';

export default function ({ name, scheme }, { addUtilities, variants }) {
  const utilities = Object.entries(scheme).map(([modifier, value]) => {
    if (properties[name]) {
      const { prefix, property, variable } = properties[name];

      return {
        [`.${prefix + modifier}`]: alphaColorVariable({
          name: modifier,
          color: value,
          prefix,
          property,
          variable,
        }) 
      };
    }

    return {
      [`.${modifier}`]: {
        [kebabCase(name)]: `var(--${modifier})`,
      },
    };   
  });

  addUtilities(utilities, variants(name));
};
