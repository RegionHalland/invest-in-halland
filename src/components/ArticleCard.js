import React from 'react'
import ReactHtmlParser from 'react-html-parser'
import propTypes from 'prop-types'
import styled from 'styled-components'
import { Link } from 'gatsby'
import Img from 'gatsby-image'

import ColorText from './ColorText'

const paddings = [
	'pt-40 md:pt-40 lg:pt-48',
	'pt-48 md:pt-48 lg:pt-56',
	'pt-56 md:pt-56 lg:pt-64',
]

const ArticleCard = ({
	title,
	subtitle,
	img,
	url,
	randomHeight,
	highlights,
}) => {
	// If the randomHeight prop is passed, give each card
	// a random padding for more variation when they are stacked in a grid.
	const padding = randomHeight
		? paddings[Math.floor(Math.random() * paddings.length)]
		: paddings[paddings.length - 1]

	return (
		<StyledLink
			to={url}
			className={`block relative px-4 pb-4 sm:px-6 sm:pb-6 overflow-hidden w-full outline-none bg-black ${padding}`}
		>
			<div className="relative z-10">
				<span className="uppercase text-xs font-sans font-medium text-gray-300 mb-1 md:mb-2 block">
					{ReactHtmlParser(subtitle)}
				</span>
				<ColorText
					className="text-2xl lg:text-3xl font-semibold font-sans text-white leading-tight break-words w-full"
					highlights={highlights}
					title={title}
				/>
			</div>
			{img && (
				<StyledImg
					style={{ position: 'absolute' }}
					className="h-full w-full bottom-0 top-0 left-0 z-0 articleCard--inner"
					objectFit="cover"
					objectPosition="50% 50%"
					fluid={img}
				/>
			)}
		</StyledLink>
	)
}

const StyledImg = styled(Img)`
	&:before {
		content: '';
		position: absolute;
		display: block;
		width: 100%;
		height: 100%;
		background: linear-gradient(
			to top,
			rgba(0, 0, 0, 0.5),
			rgba(0, 0, 0, 0)
		);
		z-index: 5;
	}
`

const StyledLink = styled(Link)`
	.articleCard--inner {
		transition: transform 0.45s;
	}

	&:hover .articleCard--inner {
		transform: scale(1.1);
	}
`

ArticleCard.propTypes = {
	title: propTypes.string.isRequired,
	subtitle: propTypes.string,
	img: propTypes.any,
	url: propTypes.string.isRequired,
	randomHeight: propTypes.bool,
}

export default ArticleCard
