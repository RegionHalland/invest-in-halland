import React, { useState, useEffect } from 'react'
import { CookiesProvider, useCookies } from 'react-cookie'

import Header from '../components/Header'
import Footer from '../components/Footer'
import CookieNotice from '../components/CookieNotice'

const Layout = ({ children }) => {
	const [cookies, setCookie] = useCookies()
	const [showNotice, setShowNotice] = useState(false)

	const handleShowNotice = val => {
		setShowNotice(val)
		setCookie('cookies_consent', 'accepted', { path: '/' })
	}

	useEffect(() => {
		setShowNotice(cookies.cookies_consent !== 'accepted')
	}, [])

	return (
		<CookiesProvider>
			<div className="font-sans">
				{showNotice && <CookieNotice onAccept={handleShowNotice} />}
				<Header />
				<main className="mb-12">{children}</main>
				<Footer />
			</div>
		</CookiesProvider>
	)
}

export default Layout
