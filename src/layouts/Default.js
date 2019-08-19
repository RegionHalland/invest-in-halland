import React from 'react'

import Header from '../components/Header'
import Footer from '../components/Footer'

const Layout = ({ children }) => (
	<div className="font-sans">
		<Header />
		<main className="mb-12">{children}</main>
		<Footer />
	</div>
)

export default Layout
