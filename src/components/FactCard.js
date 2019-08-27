import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import ReactHtmlParser from 'react-html-parser'
import propTypes from 'prop-types'

const fontSizeObject = {
	small: 'text-xl',
	medium: 'text-2xl',
	large: 'text-3xl',
}

const FactCard = ({
	title,
	contactName,
	contactCompany,
	contactImg,
	label,
	url,
	fontSize,
	alignment,
}) => (
	<Link
		to={url}
		className="flex overflow-hidden flex-col justify-between h-full outline-none p-3 sm:p-4 md:p-4 bg-black"
	>
		<div className={`flex flex-col h-full w-full justify-${alignment}`}>
			<StyledText
				className={`${
					fontSize ? fontSizeObject[fontSize] : 'text-2xl'
				} font-semibold text-white leading-snug mb-2 max-w-sm`}
			>
				{ReactHtmlParser(title)}
			</StyledText>
			<span className="text-gray-300 underline">
				{label ? label : 'Se svaret'}
			</span>
		</div>
		<div className="inline-flex items-center">
			{typeof contactImg === 'object' && (
				<Img
					fixed={contactImg}
					style={{ width: '3.2rem', height: '3.2rem' }}
					className="rounded"
				/>
			)}
			{typeof contactImg === 'string' && (
				<img
					src={contactImg}
					style={{ width: '3.2rem', height: '3.2rem' }}
					className="rounded"
				/>
			)}
			<div className="ml-2">
				<span className="block leading-none font-semibold text-gray-300 mb-1 text-lg">
					{contactName}
				</span>
				<span className="block leading-none font-medium text-gray-400">
					{contactCompany}
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

FactCard.propTypes = {
	title: propTypes.string.isRequired,
	contactName: propTypes.string.isRequired,
	contactCompany: propTypes.string.isRequired,
	contactImg: propTypes.any.isRequired,
	label: propTypes.string,
	url: propTypes.string.isRequired,
	fontSize: propTypes.string,
	alignment: propTypes.string,
}

export default FactCard
