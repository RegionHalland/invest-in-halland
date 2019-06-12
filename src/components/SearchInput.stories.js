import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { withKnobs, object, text, boolean } from '@storybook/addon-knobs/react'

import SearchInput from './SearchInput'

export const actions = {
	onClick: action('onClick'),
}

export const placeholder = 'Skriv här'
export const classes = 'mb-4'
export const disabled = false

storiesOf('SearchInput', module)
	.addDecorator(withKnobs)
	.add('default', () => {
		return (
			<SearchInput
				classes={text(classes)}
				placeholder={text(placeholder)}
				disabled={boolean('Disabled', false)}
				{...actions}
			/>
		)
	})
