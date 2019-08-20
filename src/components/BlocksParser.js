import React from 'react'
import ReactHtmlParser from 'react-html-parser'
import Fact from './blocks/Fact'

const Components = {
	'acf/fact': Fact,
}

const BlocksParser = ({ blocks }) => {
	return blocks
		.filter(block => block.blockName !== null)
		.map((block, key) => {
			const Component = Components[block.blockName]
			return block.blockName.includes('core/') ? (
				ReactHtmlParser(block.innerHTML)
			) : (
				<Component key={key} block={block} />
			)
		})
}

export default BlocksParser