import React from 'react'
import propTypes from 'prop-types'
import styled from 'styled-components'
import Img from 'gatsby-image'

import PrimaryLink from './PrimaryLink'

const ArticleContact = ({
	title,
	contactName,
	contactCompany,
	contactEmail,
	contactPhone,
	contactImage,
}) => (
	<div className="py-6 md:py-16 bg-black">
		<div className="container mx-auto">
			<div className="mx-auto w-full md:w-10/12 lg:w-7/12 px-3">
				<span className="relative z-10 uppercase text-xs font-sans font-medium text-gray-400 mb-1 md:mb-2 block">
					Ta kontakt
				</span>
				<h2 className="text-xl lg:text-3xl font-bold font-sans text-white leading-tight break-words w-full mb-8">
					{title}
				</h2>
				<div className="w-full flex space-around items-stretch">
					{contactImage && (
						<Avatar
							className="h-full w-full bottom-0 top-0 left-0 z-0"
							objectFit="cover"
							objectPosition="50% 50%"
							fixed={contactImage}
						/>
					)}
					<div className="">
						<h4 className="text-white font-semibold md:text-2xl leading-tight mb-1">
							{contactName}
						</h4>
						<h5 className="text-gray-400 text-sm md:text-lg font-medium leading-tight">
							{contactCompany}
						</h5>
						<ul className="mt-4 text-sm md:text-base">
							<li className="leading-none mb-2">
								<span className="text-gray-400 font-semibold mr-1">
									Email:
								</span>
								<PrimaryLink
									className="block sm:inline-block text-white underline font-semibold break-all"
									href={`mailto:${contactEmail}`}
								>
									{contactEmail}
								</PrimaryLink>
							</li>
							<li className="leading-none mb-2">
								<span className="block sm:inline-block text-gray-400 font-semibold mr-1">
									Telefon:
								</span>
								<PrimaryLink
									className="text-white underline font-semibold break-all"
									href={`tel:${contactPhone}`}
								>
									{contactPhone}
								</PrimaryLink>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</div>
)

const Avatar = styled(Img)`
	width: 90px;
	height: 90px;
	flex: 0 0 90px;
	margin-right: 1rem;
`

ArticleContact.propTypes = {
	title: propTypes.string.isRequired,
	contactName: propTypes.string.isRequired,
	contactCompany: propTypes.string.isRequired,
	contactEmail: propTypes.string.isRequired,
	contactPhone: propTypes.string.isRequired,
	contactImage: propTypes.any.isRequired,
}

export default ArticleContact
