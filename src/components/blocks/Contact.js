import React from 'react'
import styled from 'styled-components'
import Image from 'gatsby-image'

const Contact = ({
	block: {
		attrs: {
			data: {
				contact_title,
				contact_link_1_contact_link_1_url: link_1_url,
				contact_link_1_contact_link_1_label: link_1_label,
				contact_link_2_contact_link_2_url: link_2_url,
				contact_link_2_contact_link_2_label: link_2_label,
				contact_relationship,
			},
		},
	},
}) => {
	console.log(contact_relationship)
	return (
		<Aside className="w-full lg:w-auto p-6 lg:float-left bg-black lg:-ml-32 lg:mr-6 lg:mr-8 mb-8 mt-8 border-l-4 border-green-500">
			<h3 className="text-white mb-5 font-bold text-xl leading-tight">
				{contact_title}
			</h3>
			{contact_relationship && (
				<div className="flex flex-col">
					<div className="flex mb-6">
						<Image
							className="rounded"
							fixed={
								contact_relationship.acf.image
									? contact_relationship.acf.image.localFile
											.childImageSharp.fixed
									: null
							}
						/>
						<div className="pl-3">
							<span className="text-white block text-xl font-semibold">
								{contact_relationship.title}
							</span>
							<span className="text-white block mb-2">
								{contact_relationship.acf.company}
							</span>
						</div>
					</div>
					<div className="flex flex-col mb-6">
						<span className="text-lg text-white font-semibold block mb-3">
							Kontakt
						</span>
						<a
							href={`mailto:${contact_relationship.acf.email}`}
							className="text-white block underline"
						>
							{contact_relationship.acf.email}
						</a>
						<a
							href={`tel:${contact_relationship.acf.phone}`}
							className="text-white block underline"
						>
							{contact_relationship.acf.phone}
						</a>
					</div>
				</div>
			)}

			{link_1_url && link_2_url && (
				<span className="text-lg text-white font-semibold block mb-3">
					Länkar
				</span>
			)}
			{link_1_url && (
				<a
					className="text-white underline block mb-1"
					href={link_1_url}
				>
					{link_1_label}
				</a>
			)}
			{link_2_url && (
				<a
					className="text-white underline block mb-1"
					href={link_2_url}
				>
					{link_2_label}
				</a>
			)}
		</Aside>
	)
}

const Aside = styled.aside`
	@media screen and (min-width: 1024px) {
		max-width: 360px;
	}
`

export default Contact
