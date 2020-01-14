import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'
import resolveConfig from 'tailwindcss/resolveConfig'
import tw from 'tailwind.macro'

// The values returned here are based on the default config
// You need to pass the config as an option, but we can't since the config is outside of the project scope
// https://tailwindcss.com/docs/configuration#referencing-in-javascript
const screens = resolveConfig().theme.screens

export default ({ titleTop, titleBottom, image_1, image_2 }) => {
	return (
		<HeroContainer className="relative overflow-hidden bg-black flex flex-col sm:flex-row">
			<div className="bg-gray-700 flex items-center justify-center flex-1 w-full sm:w-6/12 relative">
				<h1 className="relative z-20 font-bold text-center text-white leading-tight text-3xl md:text-4xl lg:text-6xl p-3">
					{titleTop}
				</h1>
				<div className="absolute h-full w-full left-0 top-0">
					<Img
						className="h-full w-full z-0"
						objectFit="cover"
						objectPosition="50% 50%"
						fluid={image_1.localFile.childImageSharp.fluid}
					/>
				</div>
			</div>

			<div className="flex items-center justify-center flex-1 w-full sm:w-6/12 relative">
				<KnockoutText>{titleBottom}</KnockoutText>
				<div className="absolute h-full w-full left-0 top-0">
					<Img
						className="h-full w-full z-0"
						objectFit="cover"
						objectPosition="50% 50%"
						fluid={image_2.localFile.childImageSharp.fluid}
					/>
				</div>
			</div>
		</HeroContainer>
	)
}

const HeroContainer = styled.div`
	height: 28rem;

	@media screen and (min-width: ${screens.md}) {
		height: 40rem;
	}

	@media screen and (min-width: ${screens.xl}) {
		height: 42rem;
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

const KnockoutText = styled.span`
	${tw`font-bold relative z-10 text-black leading-tight text-3xl md:text-4xl lg:text-6xl bg-white p-3`};
	mix-blend-mode: screen;
`
