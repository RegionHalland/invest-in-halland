import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import ReactHtmlParser from 'react-html-parser'
import propTypes from 'prop-types'

const paddings = [
	'pb-12 md:pb-20 lg:pb-32',
	'pb-16 md:pb-24 lg:pb-40',
	'pb-20 md:pb-32 lg:pb-48',
]

const FactCard = ({
	title,
	contactName,
	contactCompany,
	contactImg,
	contactImgAlt,
	label,
	url,
	fontSize,
	alignment,
	randomHeight,
}) => {
	// If the randomHeight prop is passed, give each card
	// a random padding for more variation when they are stacked in a grid.
	const padding = randomHeight
		? paddings[Math.floor(Math.random() * paddings.length)]
		: paddings[paddings.length - 1]

	return (
		<StyledLink
			to={url}
			className="flex overflow-hidden  flex-col justify-between h-full outline-none p-3 sm:p-4 md:p-4 bg-black rounded w-full"
		>
			<div
				className={`factCard--inner flex flex-col h-full w-full justify-${alignment} ${padding}`}
			>
				<Title className="text-xl lg:text-3xl font-semibold font-sans text-white leading-tight break-words w-full">
					{ReactHtmlParser(title)}
				</Title>
				<span className="text-gray-300 underline">
					{label ? label : 'Se svaret'}
				</span>
			</div>
			<div className="hidden md:flex md:items-center">
				{typeof contactImg === 'object' && (
					<Img
						fixed={contactImg}
						alt={contactImgAlt}
						style={{ width: '3.2rem', height: '3.2rem' }}
						className="rounded"
					/>
				)}
				{typeof contactImg === 'string' && (
					<img
						src={contactImg}
						alt={contactImgAlt}
						style={{ width: '3.2rem', height: '3.2rem' }}
						className="rounded"
					/>
				)}
				<div className="w-full ml-2">
					<span className="block leading-none font-semibold text-gray-300 mb-1 text-sm md:text-base lg:text-lg">
						{contactName}
					</span>
					<span className="block leading-none font-medium text-gray-400 text-xs md:text-sm lg:text-base">
						{contactCompany}
					</span>
				</div>
			</div>
		</StyledLink>
	)
}

const Title = styled.h2`
	& > span {
		color: #5cb78a;
	}
`

const StyledLink = styled(Link)`
	.factCard--inner {
		transition: transform 0.25s;
	}

	&:hover .factCard--inner {
		transform: translateY(-0.5rem);
	}
`

FactCard.propTypes = {
	title: propTypes.string.isRequired,
	contactName: propTypes.string.isRequired,
	contactCompany: propTypes.string.isRequired,
	contactImg: propTypes.any.isRequired,
	contactImgAlt: propTypes.string.isRequired,
	label: propTypes.string,
	url: propTypes.string.isRequired,
	alignment: propTypes.string,
	randomHeight: propTypes.bool,
}

export default FactCard
