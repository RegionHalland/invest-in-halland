import React from 'react'
import ReactHtmlParser from 'react-html-parser'

import PrimaryLink from './PrimaryLink'
import Logo from './Logo'

import { useNavigationItems } from '../hooks/useNavigationItems'
import { useAcfOptionsPage } from '../hooks/useAcfOptionsPage'

export default () => {
	const pages = useNavigationItems()
	const {
		options: {
			description,
			right_column: { content: links, title: rightColumnTitle },
		},
	} = useAcfOptionsPage()

	return (
		<footer className="py-8">
			<div className="container mx-auto flex flex-wrap">
				<div className="w-full lg:w-6/12 px-3 mb-8">
					<div className="w-48 mb-6">
						<Logo />
					</div>
					<div className="max-w-xl pr-6">
						{ReactHtmlParser(description)}
					</div>
				</div>

				<div className="w-full sm:w-6/12 lg:w-3/12 px-3 mb-8 md:mb-0">
					<ColHeader>Sidor</ColHeader>
					<ul>
						{pages.map(item => (
							<li className="mb-3" key={item.wordpress_id}>
								<PrimaryLink
									className="font-bold text-lg"
									to={`/${item.url
										.split('/')
										.filter(Boolean)
										.pop()}/`}
								>
									{item.title}
								</PrimaryLink>
							</li>
						))}
					</ul>
				</div>

				<div className="w-full sm:w-6/12 lg:w-3/12 px-3 mb-8 md:mb-0">
					<ColHeader>{rightColumnTitle}</ColHeader>
					<ul>
						{links.map((item, index) => (
							<li className="mb-3" key={index}>
								<PrimaryLink
									className="font-bold text-lg"
									href={item.url}
								>
									{item.label}
								</PrimaryLink>
							</li>
						))}
					</ul>
				</div>
			</div>
		</footer>
	)
}

const ColHeader = ({ children }) => (
	<span className="block font-bold text-sm text-gray-700 uppercase mb-3">
		{children}
	</span>
)
