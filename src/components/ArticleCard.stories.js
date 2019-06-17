import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { withKnobs, object } from '@storybook/addon-knobs/react'

import ArticleCard from './ArticleCard'

export const actions = {
	onClick: action('onClick'),
}

export const props = {
	title: 'hehe',
}

storiesOf('ArticleCard', module)
	.addDecorator(withKnobs)
	.add('default', () => {
		return <ArticleCard {...object('props', { ...props })} {...actions} />
	})
