import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import Input from './Input'

export const actions = {
	onClick: action('onClick'),
}

storiesOf('Input', module).add('default', () => (
	<Input title="Default Button" {...actions} />
))
