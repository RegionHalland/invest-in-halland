import React, { useState, useEffect } from 'react'
import { useTransition, animated } from 'react-spring'

const itemsFromApi = [
	{
		title: 'Hey',
		id: 0,
	},
	{
		title: 'Hey again',
		id: 1,
	},
	{
		title: 'Hey again again',
		id: 2,
	},
]

const Card = ({ title, deleteItems, hideFomo, style }) => {
	useEffect(() => {
		const timer = setTimeout(() => {
			deleteItems()
		}, 1000)

		return () => clearTimeout(timer)
	}, [])

	return (
		<div style={style} className="bg-gray-300 rounded p-3">
			<span className="block mb-1">{title}</span>
			<button className="block " onClick={hideFomo}>
				Stäng
			</button>
		</div>
	)
}

const AnimatedCard = animated(Card)

const Fomo = ({ hideFomo }) => {
	const [index, setIndex] = useState(0)
	const [items, setItems] = useState([])

	// Update the index
	useEffect(() => {
		const interval = setInterval(() => {
			setIndex(state => (state + 1) % itemsFromApi.length)
		}, 2000)

		return () => clearInterval(interval)
	}, [])

	// Update array of items
	useEffect(() => {
		setItems([itemsFromApi[index]])
	}, [index])

	const deleteItems = () => {
		setItems([])
	}

	const transitions = useTransition(items, item => item.id, {
		from: { opacity: 0, transform: 'translate3d(0,40px,0)' },
		enter: { opacity: 1, transform: 'translate3d(0,0,0)' },
		leave: { opacity: 0, transform: 'translate3d(0,40px,0)' },
	})

	return (
		<div className="fixed bottom-0 left-0 mb-3 ml-3 z-50">
			{transitions.map(({ item, props, key }) => (
				<AnimatedCard
					style={{
						transform: `translate3d(0,${props.transform}px,0)`,
						...props,
					}}
					key={key}
					id={item.id}
					title={item.title}
					hideFomo={hideFomo}
					deleteItems={deleteItems}
				/>
			))}
		</div>
	)
}

export default Fomo
