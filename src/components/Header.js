import React, { useState } from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { Menu } from 'react-feather'
import { useTransition, animated } from 'react-spring'

import PrimaryLink from './PrimaryLink'
import Logo from './Logo'
import LogoSymbol from './LogoSymbol'

import { useNavigationItems } from '../hooks/useNavigationItems'
import { useAcfOptionsPage } from '../hooks/useAcfOptionsPage'
import useTailwindBreakpoint from '../hooks/useTailwindBreakpoint'

export default ({ siteTitle }) => {
	const [menuOpen, setMenuOpen] = useState(false)
	const breakpoint = useTailwindBreakpoint()
	const pages = useNavigationItems()
	const {
		options: {
			right_column: { content: links },
		},
	} = useAcfOptionsPage()
	const transitions = useTransition(menuOpen, null, {
		from: { position: 'absolute', transform: 'translate3d(0,-100%,0)' },
		enter: { transform: 'translate3d(0,0,0)' },
		leave: { transform: 'translate3d(0,-100%,0)' },
	})

	return (
		<header className="relative z-50 shadow-lg">
			<div className="relative z-50 bg-white w-full">
				<div className="container mx-auto flex flex-wrap justify-between items-center">
					<div className="px-3">
						<Link
							className="block"
							to="/"
							onClick={() => setMenuOpen(false)}
						>
							{breakpoint === 'md' ? (
								<LogoSymbol style={{ width: '32px' }} />
							) : (
								<Logo style={{ width: '210px' }} />
							)}
						</Link>
					</div>
					<div className="px-3">
						<div className="md:hidden">
							<MenuButton
								onClick={() => setMenuOpen(!menuOpen)}
							/>
						</div>
						<div className="hidden md:block">
							<DesktopMenu pages={pages} />
						</div>
					</div>
				</div>
			</div>

			<div className="relative w-full">
				{transitions.map(
					({ item, key, props }) =>
						item && (
							<animated.div
								key={key}
								style={props}
								className="absolute z-40 md:hidden bg-white w-full border-b-4 border-green-500"
							>
								<MobileMenu
									pages={pages}
									links={links}
									setMenuOpen={setMenuOpen}
								/>
							</animated.div>
						)
				)}
			</div>
		</header>
	)
}

const MobileMenu = ({ pages, links, setMenuOpen }) => {
	const closeMenu = () => {
		setMenuOpen(false)
	}

	return (
		<React.Fragment>
			<div className="py-6">
				<div className="container mx-auto px-3">
					<ColHeader>Innehåll</ColHeader>
					<ul>
						{pages.map((item, index) => (
							<li
								className={
									pages.length === index + 1 ? null : 'mb-3'
								}
								key={item.wordpress_id}
							>
								<PrimaryLink
									onClick={closeMenu}
									className="font-bold text-xl"
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
			</div>
			<div className="py-6 bg-gray-200">
				<div className="container mx-auto px-3">
					<ColHeader>Direktkontakt</ColHeader>
					<ul>
						{links.map((item, index) => (
							<li
								className={
									links.length === index + 1 ? null : 'mb-3'
								}
								key={index}
							>
								<PrimaryLink
									className="font-bold text-xl underline"
									href={item.url}
								>
									{item.label}
								</PrimaryLink>
							</li>
						))}
					</ul>
				</div>
			</div>
		</React.Fragment>
	)
}

const DesktopMenu = ({ pages }) => (
	<ul className="flex flex-wrap">
		{pages.map((item, index) => (
			<li
				className={pages.length === index + 1 ? null : 'mr-8'}
				key={item.wordpress_id}
			>
				<MenuLink
					className="block font-semibold py-8 leading-none hover:text-green-500"
					activeClassName="active"
					to={`/${item.url
						.split('/')
						.filter(Boolean)
						.pop()}/`}
				>
					{item.title}
				</MenuLink>
			</li>
		))}
	</ul>
)

const MenuButton = ({ onClick }) => (
	<MenuButtonText onClick={onClick} className="flex items-center py-6">
		<span className="font-bold mr-2 leading-none">Meny</span>
		<StyledMenuIcon size={20} />
	</MenuButtonText>
)

const ColHeader = ({ children }) => (
	<span className="block font-semibold text-gray-700 text-xs uppercase mb-3">
		{children}
	</span>
)

const MenuLink = styled(Link)`
	position: relative;
	transform: translateY(2px);
	transition: color 0.125s ease-in-out;

	&.active:after {
		content: '';
		display: block;
		position: absolute;
		background: #2bba86;
		height: 4px;
		border-top-left-radius: 3px;
		border-top-right-radius: 3px;
		width: 100%;
		bottom: 2px;
	}
`

const MenuButtonText = styled.span`
	transform: translateY(3px);
`

const StyledMenuIcon = styled(Menu)`
	transform: translateY(-1px);
`
