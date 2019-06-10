import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { withKnobs, object } from '@storybook/addon-knobs/react'

import Button from './Button'

export const actions = {
	onClick: action('onClick'),
}

export const props = {
	title: 'hehe',
}

storiesOf('Button', module)
	.addDecorator(withKnobs)
	.add('default', () => (
		<Button {...object('props', { ...props })} {...actions} />
	))
