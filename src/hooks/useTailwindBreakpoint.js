import { useState, useEffect } from 'react'

export default () => {
	const isClient = typeof window === 'object'

	function getBreakpoint() {
		return window
			.getComputedStyle(document.querySelector('body'), ':before')
			.getPropertyValue('content')
			.replace(/"|'/g, '')
	}

	const initialState = isClient ? getBreakpoint() : ''
	const [breakpoint, setBreakpoint] = useState(initialState)

	useEffect(() => {
		if (!isClient) {
			return false
		}

		function handleResize() {
			setBreakpoint(getBreakpoint())
		}

		window.addEventListener('resize', handleResize)
		return () => window.removeEventListener('resize', handleResize)
	}, [])

	return breakpoint
}
