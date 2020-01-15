import React, { useState, useEffect } from 'react'
import { useTransition, animated } from 'react-spring'
import ReactHtmlParser from 'react-html-parser'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import { useAcfOptionsPage } from '../hooks/useAcfOptionsPage'

const Card = ({ title, url, deleteItems, hideFomo, style }) => {
	useEffect(() => {
		const timer = setTimeout(() => {
			deleteItems()
		}, 4000)

		return () => clearTimeout(timer)
	}, [])

	return (
		<div
			style={style}
			className="bg-black border-l-4 border-green-500 shadow-lg p-4 md:p-5 w-10/12 md:max-w-sm"
		>
			<StyledTitle>{ReactHtmlParser(title)}</StyledTitle>
			<div className="flex">
				<button
					className="mr-3 text-gray-400 text-sm"
					onClick={hideFomo}
				>
					Stäng
				</button>
				<a
					href={url}
					className="text-white text-sm underline font-semibold"
				>
					Läs mer
				</a>
			</div>
		</div>
	)
}

const AnimatedCard = animated(Card)

const Fomo = ({ hideFomo }) => {
	const {
		options: { fomo },
	} = useAcfOptionsPage()

	const [index, setIndex] = useState(0)
	const [items, setItems] = useState([])

	// Update the index
	useEffect(() => {
		const interval = setInterval(() => {
			setIndex(state => (state + 1) % fomo.length)
		}, 8000)

		return () => clearInterval(interval)
	}, [])

	// Update array of items
	useEffect(() => {
		setItems([fomo[index]])
	}, [index])

	const deleteItems = () => {
		setItems([])
	}

	const transitions = useTransition(items, item => item.id, {
		from: {
			opacity: 0,
			transform: 'translate3d(0,40px,0) rotateX(-20deg)',
		},
		enter: { opacity: 1, transform: 'translate3d(0,0,0) rotateX(0deg)' },
		leave: {
			opacity: 0,
			transform: 'translate3d(0,40px,0) rotateX(-20deg)',
		},
	})

	return (
		<div
			style={{ perspective: '999px' }}
			className="fixed bottom-0 left-0 mb-3 ml-3 mr-3 z-50"
		>
			{transitions.map(({ item, props, key }) => (
				<AnimatedCard
					style={{
						transform: `translate3d(0,${props.transform}px,0)`,
						...props,
					}}
					key={key}
					title={item.fomo_message}
					url={item.fomo_url}
					hideFomo={hideFomo}
					deleteItems={deleteItems}
				/>
			))}
		</div>
	)
}

const StyledTitle = styled.span`
	${tw`block mb-2 text-white text-base break-words`};
	p {
		${tw`font-normal`};
	}
	strong {
		${tw`font-semibold`};
	}
`

export default Fomo
