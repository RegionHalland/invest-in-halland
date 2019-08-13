import React from 'react'
import ReactHtmlParser from 'react-html-parser'

import PrimaryLink from './PrimaryLink'
import Logo from './Logo'

import { useNavigationItems } from '../hooks/useNavigationItems'
import { useAcfOptionsPage } from '../hooks/useAcfOptionsPage'

export default () => {
	const { items: navigation } = useNavigationItems()
	const {
		options: { description },
	} = useAcfOptionsPage()

	return (
		<footer>
			<div className="container mx-auto flex flex-wrap">
				<div className="w-full lg:w-6/12 px-3 mb-8">
					<div className="w-56 mb-6">
						<Logo />
					</div>
					<div className="max-w-xl pr-6">
						{ReactHtmlParser(description)}
					</div>
				</div>

				<div className="w-full sm:w-6/12 lg:w-3/12 px-3 mb-8 md:mb-0">
					<ColHeader>Sidor</ColHeader>
					<ul>
						{navigation.map(item => (
							<li className="mb-3" key={item.wordpress_id}>
								<PrimaryLink
									className="text-lg"
									to={`/${item.url
										.split('/')
										.filter(Boolean)
										.pop()}`}
								>
									{item.title}
								</PrimaryLink>
							</li>
						))}
					</ul>
				</div>

				<div className="w-full sm:w-6/12 lg:w-3/12 px-3 mb-8 md:mb-0">
					<ColHeader>Direktkontakt</ColHeader>
					<ul>
						<li className="mb-3">
							<PrimaryLink className="text-lg" to="#">
								+46 730 936 515
							</PrimaryLink>
						</li>
						<li className="mb-3">
							<PrimaryLink className="text-lg" to="#">
								info@investinhalland.com
							</PrimaryLink>
						</li>
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
