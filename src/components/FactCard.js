import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import ReactHtmlParser from 'react-html-parser'
import propTypes from 'prop-types'

const paddings = [
	'pb-40 md:pb-40 lg:pb-48',
	'pb-48 md:pb-48 lg:pb-56',
	'pb-56 md:pb-56 lg:pb-64',
]

const FactCard = ({ title, label, url, fontSize, alignment, randomHeight }) => {
	// If the randomHeight prop is passed, give each card
	// a random padding for more variation when they are stacked in a grid.
	const padding = randomHeight
		? paddings[Math.floor(Math.random() * paddings.length)]
		: paddings[paddings.length - 1]

	return (
		<Link
			to={url}
			className="flex overflow-hidden flex-col justify-between h-full outline-none p-4 sm:p-6 bg-black w-full"
		>
			<div
				className={`hover:opacity-25 flex flex-col h-full w-full justify-${alignment} ${padding}`}
			>
				<Title className="text-2xl lg:text-3xl font-semibold font-sans mb-2 text-white leading-tight break-words w-full">
					{ReactHtmlParser(title)}
				</Title>
				<span className="text-gray-300 underline">
					{label ? label : 'Läs mer'}
				</span>
			</div>
		</Link>
	)
}

const Title = styled.h2`
	& > span {
		color: #5cb78a;
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
