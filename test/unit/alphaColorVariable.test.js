import alphaColorVariable from '../../src/utils/alphaColorVariable';

it('generate correct css variable property', () => {
	expect(alphaColorVariable({
		property: 'background-color',
		variable: '--bg-opacity',
		color: '#fff',
		prefix: 'bg-',
		name: 'primary',
	})).toEqual({
		'--bg-opacity': '1',
		'background-color': ['rgba(var(--bg-primary), var(--bg-opacity))'],
	});
});

it('ignore color that have an alpha channel', () => {
	expect(alphaColorVariable({
		property: 'background-color',
		prefix: 'bg-',
		name: 'primary',
		color: '#ffffff4d',
	})).toEqual({
		'background-color': 'rgba(var(--bg-primary))',
	});
});