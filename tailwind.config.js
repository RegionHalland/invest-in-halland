// Default config:
// https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js

module.exports = {
	theme: {
		fontFamily: {
			sans: [
				'axiforma',
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
	},
	plugins: [
		function({ addBase, config }) {
			const screens = config('theme.screens', {})

			if (Object.entries(screens).length === 0) {
				return
			}

			addBase({
				'body:before': { content: '"xs"', display: 'none' },
			})

			for (let [k, v] of Object.entries(screens)) {
				addBase({
					[`@media (min-width: ${v})`]: {
						'body:before': {
							content: `"${k}"`,
						},
					},
				})
			}
		},
	],
}
