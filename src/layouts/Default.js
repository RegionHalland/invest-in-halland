import React from 'react'

import '../css/index.css'

import Header from '../components/Header'
import Footer from '../components/Footer'

const Layout = ({ children }) => (
	<div className="font-sans">
		<Header />
		<main>{children}</main>
		<Footer />
	</div>
)

export default Layout
