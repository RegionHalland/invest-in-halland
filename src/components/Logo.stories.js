import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { withKnobs, boolean } from '@storybook/addon-knobs/react'

import Logo from './Logo'

export const inverse = false
export const symbolOnly = false

storiesOf('Logo', module)
	.addDecorator(withKnobs)
	.add('default', () => {
		return (
			<Logo
				inverse={boolean('Inverse', false)}
				symbolOnly={boolean('Symbol Only', false)}
			/>
		)
	})
