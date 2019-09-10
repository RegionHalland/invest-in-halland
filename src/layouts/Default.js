import React from 'react'
import { graphql } from 'gatsby'
import { CookiesProvider, useCookies } from 'react-cookie'

import Header from '../components/Header'
import Footer from '../components/Footer'
import CookieNotice from '../components/CookieNotice'

const Layout = ({ children }) => {
	const [cookies] = useCookies()

	return (
		<CookiesProvider>
			<div className="font-sans">
				{cookies.cookies_consent !== 'accepted' && <CookieNotice />}
				<Header />
				<main className="mb-12">{children}</main>
				<Footer />
			</div>
		</CookiesProvider>
	)
}

export default Layout
