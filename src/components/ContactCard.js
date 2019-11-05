import React from 'react'
import Img from 'gatsby-image'

export default ({ name, email, phone, img, company }) => {
	console.log(img)
	return (
		<div>
			<Img className="mb-3" fluid={img} />
			<h2 className="text-xl font-sans font-bold text-black">{name}</h2>
			<span className="text-sm text-gray-600 mb-4 font-bold uppercase block">
				{company}
			</span>
			<a
				href={`mailto:${email}`}
				className="text-lg font-bold text-black underline block mb-1"
			>
				{email}
			</a>
			<a
				href={`tel:${phone}`}
				className="text-lg font-bold text-black underline block mb-1"
			>
				{phone}
			</a>
		</div>
	)
}
