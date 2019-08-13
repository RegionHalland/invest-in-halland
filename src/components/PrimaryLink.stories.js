import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { withKnobs, object } from '@storybook/addon-knobs/react'

import PrimaryLink from './PrimaryLink'

export const actions = {}

export const props = {
	to: '#',
	className: 'text-green',
}

storiesOf('PrimaryLink', module)
	.addDecorator(withKnobs)
	.add('default', () => {
		return (
			<PrimaryLink {...object('props', { ...props })}>
				En länk till ingenting
			</PrimaryLink>
		)
	})
