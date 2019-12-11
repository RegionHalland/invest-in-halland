import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, object, text } from '@storybook/addon-knobs/react'

import ColorText from './ColorText'

export const title = 'Hur stor andel av Hallands omsättning?'
export const highlights = 'omsättning?'

storiesOf('ColorText', module)
	.addDecorator(withKnobs)
	.add('default', () => {
		return (
			<ColorText
				className="text-2xl lg:text-3xl font-semibold font-sans mb-2 text-white leading-tight break-words w-full"
				title={text('Hur stor andel av Hallands omsättning?', title)}
				highlights={text('omsättning?', highlights)}
			/>
		)
	})
