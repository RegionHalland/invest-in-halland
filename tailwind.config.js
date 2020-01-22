// Default config:
// https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js

module.exports = {
	theme: {
		fontFamily: {
			sans: [
				'Axiforma',
				'-apple-system',
				'BlinkMacSystemFont',
				'"Segoe UI"',
				'Roboto',
				'"Helvetica Neue"',
				'Arial',
				'"Noto Sans"',
				'sans-serif',
				'"Apple Color Emoji"',
				'"Segoe UI Emoji"',
				'"Segoe UI Symbol"',
				'"Noto Color Emoji"',
			],
		},
		extend: {
			colors: {
				black: '#1B1B1B',
				gray: {
					200: '#F4F5F9',
					300: '#E8EBF4',
					400: '#CACDD7',
					500: '#898D98',
					600: '#5C666D',
					700: '#33353C',
				},
				red: {
					500: '#E1807A',
				},
				green: {
					500: '#5CB78A',
					400: '#82C3A1',
				},
				blue: {
					600: '#094061',
					500: '#1D506F',
					400: '#3F6F8C',
					300: '#6F95AD',
					200: '#D1E4EF',
				},
			},
			height: {
				96: '24rem',
				128: '32rem',
			},
		},
	},
	plugins: [require('@digitaliseringsbyran/tailwindcss-screens-in-dom')()],
}
