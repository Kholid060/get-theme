import tinyColor from 'tinycolor2';
import properties from './properties';

export default function(name, scheme) {
  if (typeof scheme !== 'object' || scheme === null) throw new Error('scheme must be an object');

  const colorVariables = Object.entries(scheme).reduce((variables, [modifier, value]) => {
    const color = tinyColor(value);

    if (properties[name] && color.isValid()) {
      const { prefix } = properties[name];
      const { r, g, b, a } = color.toRgb();

      variables[`--${prefix}${modifier}`] = `${r}, ${g}, ${b}${a === 1 ? '' : `, ${a.toFixed(1)}`}`;
      
      return variables;
    }

    variables[`--${modifier}`] = value;

    return variables;
  }, {});

  return colorVariables;
}