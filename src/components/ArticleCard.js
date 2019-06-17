import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import Img from 'gatsby-image'

const alignmentObject = {
	top: 'justify-start',
	center: 'justify-center',
	bottom: 'justify-end',
}

export default ({ title, img, category, url, fontSize, sizes, alignment }) => (
	<Link
		to={url}
		className="inline-block overflow-hidden relative outline-none"
	>
		<Img className="align-bottom" fixed={img} />
		<div className="absolute h-full w-full top-0 left-0 bg-black opacity-25" />
		<Inner
			className={`${
				alignment ? alignmentObject[alignment] : 'justify-bottom'
			} absolute flex flex-col left-0 top-0 h-full w-full p-4 z-10`}
		>
			<span className="uppercase text-xs font-sans font-medium text-gray-300 mb-2 block">
				{category}
			</span>
			<h2
				className={`${
					fontSize ? fontSize : 'text-3xl'
				} font-bold font-sans text-white leading-snug`}
			>
				{title}
			</h2>
		</Inner>
	</Link>
)

const Inner = styled.div`
	transition: transform 0.25s;
	&:hover {
		transform: translateY(-0.5rem);
	}
`
