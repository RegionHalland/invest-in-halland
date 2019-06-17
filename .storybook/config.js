import { configure } from '@storybook/react'

import './index.css'

// automatically import all files ending in *.stories.js
const req = require.context('../src', true, /\.stories\.js$/)
function loadStories() {
	req.keys().forEach(filename => req(filename))
}

// https://www.gatsbyjs.org/docs/visual-testing-with-storybook/
global.___loader = {
	enqueue: () => {},
	hovering: () => {},
}

global.__PATH_PREFIX__ = ''

window.___navigate = pathname => {
	action('NavigateTo:')(pathname)
}

configure(loadStories, module)
