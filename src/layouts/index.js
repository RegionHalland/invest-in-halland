import React, { useState, useEffect } from 'react'
import { CookiesProvider, useCookies } from 'react-cookie'
import useTailwindBreakpoint from '../hooks/useTailwindBreakpoint'

import Header from '../components/Header'
import Footer from '../components/Footer'
import CookieNotice from '../components/CookieNotice'
import Fomo from '../components/Fomo'

const Layout = ({ children }) => {
	const [cookies, setCookie] = useCookies()
	const [showNotice, setShowNotice] = useState(false)
	const [showFomo, setShowFomo] = useState(false)

	const handleShowNotice = val => {
		setShowNotice(val)
		setCookie('cookies_consent', 'accepted', { path: '/' })
	}

	const hideFomo = () => {
		setShowFomo(false)
		setCookie('show_fomo', 'false', { path: '/' })
	}

	const breakpoint = useTailwindBreakpoint()

	useEffect(() => {
		setShowNotice(cookies.cookies_consent !== 'accepted')
		setShowFomo(
			cookies.cookies_consent === 'accepted' &&
				cookies.show_fomo !== 'false'
		)
	}, [])

	useEffect(() => {
		setShowFomo(
			cookies.cookies_consent === 'accepted' &&
				cookies.show_fomo !== 'false'
		)
	}, [cookies])

	return (
		<CookiesProvider>
			<div className="font-sans">
				{showNotice && <CookieNotice onAccept={handleShowNotice} />}
				<Header />
				<main>{children}</main>
				<Footer />
				{showFomo && breakpoint !== 'xs' && breakpoint !== 'sm' && (
					<Fomo hideFomo={hideFomo} />
				)}
			</div>
		</CookiesProvider>
	)
}

export default Layout
