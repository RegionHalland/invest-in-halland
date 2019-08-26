import React from 'react'
import ReactHtmlParser from 'react-html-parser'
import styled from 'styled-components'
import Img from 'gatsby-image'
import resolveConfig from 'tailwindcss/resolveConfig'

// The values returned here are based on the default config
// You need to pass the config as an option, but we can't since the config is outside of the project scope
// https://tailwindcss.com/docs/configuration#referencing-in-javascript
const screens = resolveConfig().theme.screens

export default ({ subtitle, title, image }) => {
	return (
		<HeroContainer className="relative flex flex-wrap items-center py-8 bg-black">
			<div className="container mx-auto z-10">
				<div className="w-full px-3">
					{subtitle && (
						<span className="block text-white font-bold text-sm md:text-base lg:text-lg mb-3 leading-none">
							{subtitle}
						</span>
					)}
					<h1 className="block text-white font-bold text-3xl md:text-5xl xl:text-6xl leading-tight">
						{ReactHtmlParser(title)}
					</h1>
				</div>
				{image && (
					<div className="absolute bottom-0 px-3 py-6">
						<span className="block text-sm xl:text-base text-white font-bold">
							{image.title}
						</span>
						<span className="block text-white text-xs xl:text-sm font-medium opacity-75">
							{ReactHtmlParser(image.caption)}
						</span>
					</div>
				)}
			</div>
			{image && (
				<Img
					style={{ position: 'absolute' }}
					className="h-full w-full bottom-0 top-0 z-0"
					objectFit="cover"
					objectPosition="50% 50%"
					alt={image.alt_text}
					fluid={image.localFile.childImageSharp.fluid}
				/>
			)}
		</HeroContainer>
	)
}

const HeroContainer = styled.div`
	height: 24rem;

	@media screen and (min-width: ${screens.md}) {
		height: 32rem;
	}

	@media screen and (min-width: ${screens.xl}) {
		height: 40rem;
	}

	&:after {
		content: '';
		position: absolute;
		bottom: 0;
		display: block;
		height: 100%;
		background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 100%);
		opacity: 0.65;
		width: 100%;
	}
`
