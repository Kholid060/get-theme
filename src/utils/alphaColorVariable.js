import tinyColor from 'tinycolor2';

export default function({ 
  property, 
  variable, 
  color, 
  prefix, 
  name,
}) {
  const alpha = tinyColor(color).getAlpha();

  if (alpha !== 1) {
    return {
      [property]: `rgba(var(--${prefix}${name}))`,
    };
  }

  return {
    [variable]: '1',
    [property]: [color, `rgba(var(--${prefix}${name}), var(${variable}))`],
  };
}
