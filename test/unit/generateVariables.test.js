import generateVariables from '../../src/utils/generateVariables';

it('generate variants for given color', () => {

	expect(generateVariables('backgroundColor', {
		primary: 'white',
		secondary: '#000',
		accent: 'rgb(90,37,142)',
	})).toEqual({
		'--bg-primary': '255, 255, 255',
		'--bg-secondary': '0, 0, 0',
		'--bg-accent': '90, 37, 142',
	});
});

it('generate opacity variants for given color', () => {
	expect(generateVariables('textColor', {
		default: '#00000059',
		light: '#50505080',
	})).toEqual({
		'--text-default': '0, 0, 0, 0.3',
		'--text-light': '80, 80, 80, 0.5',
	});
});
