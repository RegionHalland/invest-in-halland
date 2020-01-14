import React from 'react'

const SineChart = () => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="300"
		height="300"
		fill="none"
		viewBox="0 0 300 300"
	>
		<g fill="#fff" clip-path="url(#clip0)">
			<path
				d="M55.647 159v.005c19.546.441 35.738 18.313 37.464 41.535 1.979 26.625 4.237 56.898 4.56 60.719.587 6.98 1.762 16.753 9.403 26.874C114.715 298.255 125 300 125 300H-14s10.285-1.745 17.926-11.867c7.64-10.121 8.816-19.894 9.404-26.874.322-3.821 2.58-34.094 4.559-60.719 1.726-23.222 17.918-41.094 37.464-41.535V159l.147.002.147-.002z"
				opacity="0.05"
			></path>
			<path
				d="M148.681 126v.007c24.046.543 43.966 22.598 46.089 51.256 2.434 32.856 5.213 70.214 5.608 74.929.723 8.614 2.17 20.674 11.569 33.164C221.347 297.846 234 300 234 300H63s12.653-2.154 22.053-14.644 10.846-24.55 11.569-33.164c.395-4.715 3.174-42.073 5.608-74.929 2.123-28.658 22.043-50.713 46.089-51.256V126l.181.003.181-.003z"
				opacity="0.1"
			></path>
			<path
				d="M262.7 107v.007c26.577.603 48.594 25.067 50.94 56.853 2.691 36.444 5.762 77.882 6.199 83.112.799 9.554 2.398 22.931 12.787 36.785C343.015 297.611 357 300 357 300H168s13.985-2.389 24.374-16.243 11.988-27.231 12.787-36.785c.437-5.23 3.508-46.668 6.199-83.112 2.346-31.786 24.363-56.25 50.94-56.853V107l.2.003.2-.003z"
				opacity="0.15"
			></path>
		</g>
		<defs>
			<clipPath id="clip0">
				<path fill="#fff" d="M0 0H300V300H0z"></path>
			</clipPath>
		</defs>
	</svg>
)

export default SineChart
