import tinyColor from 'tinycolor2';

export default function({ 
  property, 
  variable, 
  color, 
  prefix, 
  modifier,
}) {
  const alpha = tinyColor(color).getAlpha();

  if (alpha !== 1) {
    return {
      [property]: `rgba(var(--${prefix}${modifier}))`,
    };
  }

  return {
    [variable]: '1',
    [property]: `rgba(var(--${prefix}${modifier}), var(${variable}))`,
  };
}
