import React, { useState } from 'react'
import ReactHtmlParser from 'react-html-parser'
import { useAcfOptionsPage } from '../hooks/useAcfOptionsPage'
import { useCookies } from 'react-cookie'

const CookieNotice = ({ title }) => {
	const {
		options: { cookie_content, cookie_title, cookie_button_label },
	} = useAcfOptionsPage()

	const [cookies, setCookie] = useCookies(['cookies_consent'])
	const [showNotice, setShowNotice] = useState(true)

	const consent = () => {
		setCookie('cookies_consent', 'accepted', { path: '/' })
		setShowNotice(false)
		console.log('va händer')
	}

	return showNotice ? (
		<div className="bg-black">
			<div className="container mx-auto py-3 md:py-6">
				<div className="w-full flex flex-wrap items-center justify-between px-3">
					<div className="w-full sm:w-auto">
						<span className="block text-white leading-tight text-xs md:text-sm font-semibold mb-1">
							{cookie_title}
						</span>
						<span className="block text-gray-400 leading-tight text-xs md:text-sm mb-2 sm:mb-0">
							{ReactHtmlParser(cookie_content)}
						</span>
					</div>
					<button
						onClick={consent}
						className="w-full sm:w-auto sm:w-au text-xs caps bg-green-500 text-white px-6 py-3 rounded leading-none"
					>
						{cookie_button_label}
					</button>
				</div>
			</div>
		</div>
	) : null
}

export default CookieNotice
