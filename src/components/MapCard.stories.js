import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { withKnobs, object, text } from '@storybook/addon-knobs/react'
import { radios } from '@storybook/addon-knobs'

import MapCard from './MapCard'

export const actions = {
	onClick: action('onClick'),
}

export const title = 'Halland, Sverige, världen.'
export const category = 'Kommunikationer'
export const url = '/link'

storiesOf('MapCard', module)
	.addDecorator(withKnobs)
	.add('default', () => {
		return (
			<MapCard
				title={text('title', title)}
				category={text('category', category)}
				url={text('url', url)}
			/>
		)
	})
