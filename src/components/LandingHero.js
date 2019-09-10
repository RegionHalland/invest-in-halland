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

export default ({ subTitle, title, image, textAlign, words }) => {
	const [index, set] = useState(0)
	const onClick = useCallback(() => set(state => (state + 1) % 3), [])

	const titleTransitions = useTransition(index, p => p, {
		from: { opacity: 0, transform: 'translate3d(25%, 0, 0)' },
		enter: { opacity: 1, transform: 'translate3d(0%, 0, 0)' },
		leave: { opacity: 0, transform: 'translate3d(-25%, 0, 0)' },
	})

	return (
		<HeroContainer
			className="relative overflow-hidden flex items-center justify-center text-center"
			onClick={onClick}
		>
			<h1 className="z-20 w-full font-bold text-center text-white text-3xl md:text-5xl">
				<span className="block mb-1">{title}</span>
				<span className="block relative">
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
	background: red;

	@media screen and (min-width: ${screens.md}) {
		height: 36rem;
	}

	@media screen and (min-width: ${screens.xl}) {
		height: 46rem;
	}
`
