import React from 'react'
import Highlighter from 'react-highlight-words'

const HighlightText = ({ children, highlightIndex }) => (
	<strong className="text-green-500">{children}</strong>
)

const ColorText = ({ title, highlights, ...props }) => {
	if (highlights) {
		var string = highlights
		var res = string.split(' ')
	}
	return (
		<h1 {...props}>
			{highlights ? (
				<Highlighter
					highlightTag={HighlightText}
					searchWords={res}
					autoEscape={true}
					textToHighlight={title}
				/>
			) : (
				title
			)}
		</h1>
	)
}

export default ColorText
