import React from 'react'
import ReactHtmlParser from 'react-html-parser'
import Fact from './blocks/Fact'
import TwoColumn from './blocks/TwoColumn'

const Components = {
	'acf/fact': Fact,
	'acf/two-column': TwoColumn,
}

const BlocksParser = ({ blocks }) => {
	return blocks
		.filter(block => block.blockName !== null)
		.map(block => {
			console.log('asda', block)
			const Component = Components[block.blockName]
			return block.blockName.includes('core/') ? (
				ReactHtmlParser(block.innerHTML)
			) : (
				<Component key={block.attrs.id} block={block} />
			)
		})
}

export default BlocksParser
