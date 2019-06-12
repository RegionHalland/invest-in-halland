import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { withKnobs, object, text, boolean } from '@storybook/addon-knobs/react'

import Input from './Input'

export const actions = {
	onClick: action('onClick'),
}

export const placeholder = 'Skriv här'
export const disabled = false

storiesOf('Input', module)
	.addDecorator(withKnobs)
	.add('default', () => {
		return (
			<Input
				placeholder={text(placeholder)}
				disabled={boolean('Disabled', false)}
				{...actions}
			/>
		)
	})
