import flattenScheme from '../../src/utils/flattenScheme';

it('merge all theme schemes', () => {
	const config = {
		dark: {
			scheme: {
				backgroundColor: {
					primary: '#0070F3',
	        warning: '#ECC94B',
	        danger: '#F56565',
				},
			},
		},
		light: {
			scheme: {
				backgroundColor: {
					primary: '#4299E1',
					warning: '#ED8936',
	        danger: '#F56565',
				},
			},
		},
	};

	expect(flattenScheme(config)).toEqual({
		backgroundColor: {
			primary: '#4299E1',
			warning: '#ED8936',
      danger: '#F56565',
		},
	});
});