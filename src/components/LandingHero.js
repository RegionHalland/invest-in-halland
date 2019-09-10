import React, { useState, useEffect, useCallback } from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'
import resolveConfig from 'tailwindcss/resolveConfig'
import { useTransition, animated, config } from 'react-spring'

// The values returned here are based on the default config
// You need to pass the config as an option, but we can't since the config is outside of the project scope
// https://tailwindcss.com/docs/configuration#referencing-in-javascript
const screens = resolveConfig().theme.screens

const images = [
	({ style }) => (
		<ImageContainer style={{ ...style, background: 'lightpink' }} />
	),
	({ style }) => (
		<ImageContainer style={{ ...style, background: 'lightblue' }} />
	),
	({ style }) => (
		<ImageContainer style={{ ...style, background: 'lightgreen' }} />
	),
]

const titles = [
	({ style, word }) => <animated.h1 style={{ ...style }}>A</animated.h1>,
	({ style, word }) => <animated.h1 style={{ ...style }}>B</animated.h1>,
	({ style, word }) => <animated.h1 style={{ ...style }}>C</animated.h1>,
]

export default ({ subTitle, title, image, textAlign, words }) => {
	const [index, set] = useState(0)
	const onClick = useCallback(() => set(state => (state + 1) % 3), [])
	const imageTransitions = useTransition(index, p => p, {
		from: { opacity: 0, transform: 'scale3d(1, 1, 1)' },
		enter: { opacity: 1, transform: 'scale3d(1, 1, 1)' },
		leave: { opacity: 0, transform: 'scale3d(1.3, 1.3, 1.3)' },
	})
	const titleTransitions = useTransition(index, p => p, {
		from: { opacity: 0, transform: 'translate3d(100%, 0, 0)' },
		enter: { opacity: 1, transform: 'translate3d(0%, 0, 0)' },
		leave: { opacity: 0, transform: 'translate3d(-100%, 0, 0)' },
	})

	console.log(titleTransitions)

	return (
		<HeroContainer
			className="relative overflow-hidden flex items-center justify-center text-center"
			onClick={onClick}
		>
			{imageTransitions.map(({ item, props, key }) => {
				const Image = images[item]
				return <Image key={key} style={props} />
			})}

			<h1 className="z-20 relative">
				{title}
				<span>
					{titleTransitions.map(({ item, props, key }) => {
						const Title = titles[item]
						return <Title key={key} style={props} />
					})}
				</span>
			</h1>
		</HeroContainer>
	)
}

const HeroContainer = styled.div`
	height: 24rem;

	@media screen and (min-width: ${screens.md}) {
		height: 36rem;
	}

	@media screen and (min-width: ${screens.xl}) {
		height: 46rem;
	}
`

const ImageContainer = styled(animated.div)`
	position: absolute;
	height: 100%;
	width: 100%;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
`
