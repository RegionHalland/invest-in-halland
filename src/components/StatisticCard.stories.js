import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { withKnobs, object, text } from '@storybook/addon-knobs/react'
import { radios } from '@storybook/addon-knobs'

import StatisticCard from './StatisticCard'

export const actions = {
	onClick: action('onClick'),
}

export const fontSizes = {
	small: 'small',
	medium: 'medium',
	large: 'large',
}

export const alignment = {
	top: 'top',
	center: 'center',
	bottom: 'bottom',
}

export const title =
	'Finanisering för hälsoinnovation i Halland ökade med <span>238%</span> förra året'
export const label = 'Läs mer'
export const url = '/link'

storiesOf('StatisticCard', module)
	.addDecorator(withKnobs)
	.add(
		'default',
		() => {
			return (
				<StatisticCard
					title={text('title', title)}
					fontSize={radios('fontSize', fontSizes)}
					alignment={radios('alignment', alignment)}
					label={text('label', label)}
					url={text('url', url)}
				/>
			)
		},
		{
			knobs: {
				escapeHTML: false, // Escapes strings to be safe for inserting as innerHTML. This option is true by default. It's safe to set it to `false` with frameworks like React which do escaping on their side.
				// You can still set it to false, but it's strongly unrecommendend in cases when you host your storybook on some route of your main site or web app.
			},
		}
	)
