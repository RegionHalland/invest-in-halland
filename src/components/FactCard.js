import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import ReactHtmlParser from 'react-html-parser'
import propTypes from 'prop-types'

const paddings = [
	'pb-20 md:pb-20 lg:pb-32',
	'pb-24 md:pb-24 lg:pb-40',
	'pb-32 md:pb-32 lg:pb-48',
]

const FactCard = ({ title, label, url, fontSize, alignment, randomHeight }) => {
	// If the randomHeight prop is passed, give each card
	// a random padding for more variation when they are stacked in a grid.
	const padding = randomHeight
		? paddings[Math.floor(Math.random() * paddings.length)]
		: paddings[paddings.length - 1]

	return (
		<StyledLink
			to={url}
			className="flex overflow-hidden flex-col justify-between h-full outline-none p-3 sm:p-4 md:p-4 bg-black w-full"
		>
			<div
				className={`factCard--inner flex flex-col h-full w-full justify-${alignment} ${padding}`}
			>
				<Title className="text-2xl lg:text-3xl font-semibold font-sans mb-2 text-white leading-tight break-words w-full">
					{ReactHtmlParser(title)}
				</Title>
				<span className="text-gray-300 underline">
					{label ? label : 'Se svaret'}
				</span>
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
	label: propTypes.string,
	url: propTypes.string.isRequired,
	alignment: propTypes.string,
	randomHeight: propTypes.bool,
}

export default FactCard
