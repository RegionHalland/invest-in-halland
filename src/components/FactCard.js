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

export default ({ title, img, label, url, fontSize, alignment }) => (
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
				} text-gray-300 font-semibold text-white leading-snug mb-2 max-w-sm`}
			>
				{ReactHtmlParser(title)}
			</StyledText>
			<span className="text-gray-300 underline">
				{label ? label : 'Se svaret'}
			</span>
		</div>
		<div className="inline-flex items-center">
			{img && <Img fixed={img} className="rounded" />}
			<div className="ml-2">
				<span className="block leading-none text-white mb-1">
					Kristina Höglund
				</span>
				<span className="block leading-none text-gray-300 text-sm">
					Halmstad Näringsliv
				</span>
			</div>
		</div>
	</Link>
)

const StyledText = styled.h2`
	& > span {
		color: #5cb78a;
	}
`
