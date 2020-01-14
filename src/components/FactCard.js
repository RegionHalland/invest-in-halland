import React from 'react'
import { Link } from 'gatsby'
import propTypes from 'prop-types'
import ColorText from './ColorText'
import PieChart from './PieChart'
import BarChart from './BarChart'
import SineChart from './SineChart'

const paddings = [
	'pb-40 md:pb-40 lg:pb-48',
	'pb-48 md:pb-48 lg:pb-56',
	'pb-56 md:pb-56 lg:pb-64',
]

const charts = {
	circle: PieChart,
	bar: BarChart,
	line: SineChart,
}

const FactCard = ({
	title,
	label,
	url,
	fontSize,
	alignment,
	randomHeight,
	highlights,
	chart,
}) => {
	// If the randomHeight prop is passed, give each card
	// a random padding for more variation when they are stacked in a grid.
	const padding = randomHeight
		? paddings[Math.floor(Math.random() * paddings.length)]
		: paddings[paddings.length - 1]

	const ChartComponent = chart ? charts[chart] : null

	return (
		<Link
			to={url}
			className="flex overflow-hidden flex-col justify-between h-full outline-none p-4 sm:p-6 bg-black w-full relative"
		>
			<div
				className={`hover:opacity-25 flex flex-col h-full w-full relative z-10 justify-${alignment} ${padding}`}
			>
				<ColorText
					className="text-3xl lg:text-4xl font-semibold font-sans mb-2 text-white leading-tight break-words w-full"
					highlights={highlights}
					title={title}
				/>
				<span className="text-gray-300 underline">
					{label ? label : 'Läs mer'}
				</span>
				{chart && (
					<div className="absolute bottom-0 right-0 z-0 -mr-4 -mb-4 sm:-mr-6 sm:-mb-6">
						<ChartComponent />
					</div>
				)}
			</div>
		</Link>
	)
}

FactCard.propTypes = {
	title: propTypes.string.isRequired,
	label: propTypes.string,
	url: propTypes.string.isRequired,
	alignment: propTypes.string,
	randomHeight: propTypes.bool,
	chart: propTypes.string,
}

export default FactCard
