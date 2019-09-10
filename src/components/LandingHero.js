import React, { useState, useEffect, useCallback } from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'
import resolveConfig from 'tailwindcss/resolveConfig'
import { useTransition, animated, config } from 'react-spring'

// The values returned here are based on the default config
// You need to pass the config as an option, but we can't since the config is outside of the project scope
// https://tailwindcss.com/docs/configuration#referencing-in-javascript
const screens = resolveConfig().theme.screens

const titles = ['horse', 'dog', 'cat']

const Title = ({ style, word }) => (
	<animated.h1
		className="absolute top-0 left-0 right-0 w-full text-center"
		style={{ ...style }}
	>
		{word}
	</animated.h1>
)

const Image = ({ style, image }) => {
	return (
		<animated.div
			style={{ ...style }}
			className="absolute h-full w-full bottom-0 top-0 z-0"
		>
			<Img
				className="absolute h-full w-full bottom-0 top-0 z-0"
				objectFit="cover"
				objectPosition="50% 50%"
				fluid={image.localFile.childImageSharp.fluid}
			/>
		</animated.div>
	)
}

export default ({ subTitle, title, image, textAlign, words }) => {
	const [index, set] = useState(0)
	const onClick = useCallback(
		() => set(state => (state + 1) % words.length),
		[]
	)

	const titleTransitions = useTransition(index, p => p, {
		from: { opacity: 0, transform: 'translate3d(25%, 0, 0)' },
		enter: { opacity: 1, transform: 'translate3d(0%, 0, 0)' },
		leave: { opacity: 0, transform: 'translate3d(-25%, 0, 0)' },
	})

	const imageTransitions = useTransition(index, p => p, {
		from: { opacity: 0, transform: 'scale3d(1, 1, 1)' },
		enter: { opacity: 1, transform: 'scale3d(1, 1, 1)' },
		leave: { opacity: 0, transform: 'scale3d(1.2, 1.2, 1.2)' },
	})

	useEffect(() => {
		setInterval(() => {
			set(state => (state + 1) % words.length)
		}, 2000)
	}, [])

	return (
		<HeroContainer
			className="relative overflow-hidden bg-black flex items-center justify-center text-center"
			onClick={onClick}
		>
			{imageTransitions.map(({ item, props, key }) => {
				return (
					<Image key={key} style={props} image={words[item].image} />
				)
			})}
			<h1 className="z-20 w-full font-bold text-center text-white text-3xl md:text-5xl mb-6">
				<span className="block mb-1">{title}</span>
				<span className="block relative text-green-500">
					{titleTransitions.map(({ item, props, key }) => {
						return (
							<Title
								key={key}
								style={props}
								word={words[item].word}
							/>
						)
					})}
				</span>
			</h1>
		</HeroContainer>
	)
}

const HeroContainer = styled.div`
	height: 24rem;

	@media screen and (min-width: ${screens.md}) {
		height: 40rem;
	}

	@media screen and (min-width: ${screens.xl}) {
		height: 56rem;
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
