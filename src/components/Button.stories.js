import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { withKnobs, object } from '@storybook/addon-knobs/react'

import Button from './Button'

export const props = {
	title: 'Gå till sida',
	to: '/pant',
}

storiesOf('Button', module)
	.addDecorator(withKnobs)
	.add('default', () => {
		return <Button {...object('props', { ...props })} />
	})
