import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import ReactHtmlParser from 'react-html-parser'

const alignmentObject = {
	top: 'pb-16 pt-4',
	center: 'py-16',
	bottom: 'pt-16 pb-4',
}

const fontSizeObject = {
	small: 'text-xl',
	medium: 'text-2xl',
	large: 'text-3xl',
}

export default ({ title, label, url, fontSize, alignment }) => (
	<Link
		to={url}
		className="inline-block overflow-hidden relative outline-none px-3 sm:px-4 md:px-4 bg-black"
	>
		<div
			className={`${
				alignment ? alignmentObject[alignment] : 'pb-16 pt-4'
			} flex flex-col h-full w-full`}
		>
			<StyledText
				className={`${
					fontSize ? fontSizeObject[fontSize] : 'text-2xl'
				} font-semibold font-sans text-white leading-snug mb-2 max-w-sm`}
			>
				{ReactHtmlParser(title)}
			</StyledText>
			<span className="text-gray-300 font-sans underline">
				{label ? label : 'Läs mer'}
			</span>
		</div>
	</Link>
)

const StyledText = styled.h2`
	& > span {
		color: #5cb78a;
	}
`
