import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, object, text } from '@storybook/addon-knobs/react'
import { radios } from '@storybook/addon-knobs'

import FactCard from './FactCard'

export const fontSizes = {
	small: 'small',
	medium: 'medium',
	large: 'large',
}

export const alignment = {
	top: 'top',
	center: 'center',
	bottom: 'bottom',
}

export const title = 'Varför har Halland Sveriges högsta medellivslängd?'
export const contactName = 'Kristina Höglund'
export const contactCompany = 'Halmstad Näringsliv'
export const contactImg = {
	aspectRatio: 1,
	base64:
		'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsSAAALEgHS3X78AAAD2klEQVQ4y3WUW2xUVRSGDyY+8MCLTxofvNNWqPY61Wgk4IvxEmI1ktpxOm2n01IKCg8gCYpGgxgkpTB3LjOlnaYNDQGaaC0kpbaVS0molWYql9SMGDWxRBrajt3nrOX6d+cMo5aTrOx99uXba61/7W14i0MGvrqikOEtDt+HvqcgeH+DI/LO+rKDnQ2lkUmZU2JmfWkkKWPdMlcp/0uxFnvqisJGum/YnSVNLxy2+2tlQ6KhKMrVuRF2LfezpyDEnsIQu3L87M6JcENhlGXNDVlbYRh3GRlqFmzXBkeM3Xkh3vTSEdWxe1D9OJy0bl6bopvXp2j83C/Utfd7tXl1TLlzg9zkOMreknBLFtTIhAnYprI4V+X5zOjOfnM+pYiZCbCRvut0sfcaJX/6U49ZpsXxLwbNqqd9qqm0netLwr502jJeroVngPVELlmyiS/3T9KONztJNrFz+X5trjwfb3+jg85/fRVg7u+6QrJXpT11GlkCJBAmPMPCk8ERqnxqP7tX+HE6ixgLJv3qlX6ueHwfH2s+R5ZF/PFbXWZtfhhzSYEvM6AmBGh68bD6e07R6MDP5BSYNw2SRf8yjEloIlSQt73aTmjh5YbSVrQeA6UBNeVEhfxsfz1O8EwO0huzYfa/9lqs5pkAWrKBMt9joM6qcgMc+/Qsckd9bT/oXGlIyV1Idlv7bFAbvJOWxKz1JUcwPw5lFMJY92gzdXw5pJN9Oj7GrtwDi0LhmZRUxj5YHaP3V0WpvlhHNGNIwZqNzx/i0NY+qnyyhdp3fceLQQFyiyAflXfy9NQsp2bneWY6xTO3UzQx8ivVFeq0zBm4TrgBKNqhkxNU/uAeju8e/B8UUSDMzWti3N1ynk/4LyLvfOevOZq88odVu1JXQQKidEMUgWhRvm0dpbcf3rs4VLxE3t6T/4rH9rHkn01lUU/4kgmGCPkNysaJu7nl5VY1fWuWbWHuBYX6jc8dZEkPD3SP65x/+Fpc1Rfo+90IUZbiouNuiii6sO8JFfVr8gO6sGOf9GvYcd8F05UTgLe/CesB++pV4PpI0tWZjjGyob2to1z+0FdsC4VDRFE+e2zBs+FTE1SdH5jf6GiDcF4btvA4yKux0dGuoZ17hs07t1MaOnQiQe8+0ULiqX4Y0sbHD1wwF2Bx5DaaecIyj6J8eDXgaZWEv/WVNoXbc2Psd+voZwO07pFmavt8wOqNXTYxhzDhmQ3775u4JGvQKTlNQigoh3JoLDukFa1ZEdZjWgDJmaz1LgILZR5He7CuMLRMoB4pqR7xYFz+Z1C0UosJlAbUtAXAHnsfGP8An71yIvslifEAAAAASUVORK5CYII=',
	height: 50,
	width: 50,
	originalName: 'gatsby-icon.png',
	src: '/static/4a9773549091c227cd2eb82ccd9c5e3a/647de/gatsby-icon.png',
	srcSet: '/static/4a9773549091c227cd2eb82ccd9c5e3a/647de/gatsby-icon.png 1x',
	srcSetWebp:
		'/static/4a9773549091c227cd2eb82ccd9c5e3a/f4957/gatsby-icon.webp 1x',
	srcWebp: '/static/4a9773549091c227cd2eb82ccd9c5e3a/f4957/gatsby-icon.webp',
	tracedSVG:
		"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='50' height='50'%3e%3cpath d='M173 1A201 201 0 0 0 23 294a200 200 0 0 0 377-78c1 1 1-7 1-17l-1-15-2-9A201 201 0 0 0 173 1m5 43A158 158 0 0 0 47 164c0 1 42 44 94 95l94 94 8-2a158 158 0 0 0 114-148v-3H257v28h34l34 1a127 127 0 0 1-72 87l-10 5-82-82-82-83a128 128 0 0 1 221-36l5 5 11-8 10-9c2-2-25-29-37-38-18-11-37-20-57-24-11-2-44-4-54-2M43 212a156 156 0 0 0 148 144h6l-76-76-77-77-1 9' fill='%23d3d3d3' fill-rule='evenodd'/%3e%3c/svg%3e",
}
export const contactImgAlt = 'Bild på Kristina Höglund'
export const label = 'Se svaret'
export const url = '/link'

storiesOf('FactCard', module)
	.addDecorator(withKnobs)
	.add(
		'default',
		() => {
			return (
				<FactCard
					title={text('title', title)}
					contactName={text('contactName', contactName)}
					contactCompany={text('contactCompany', contactCompany)}
					contactImg={object('contactImg', contactImg)}
					contactImgAlt={text('contactImgAlt', contactImgAlt)}
					fontSize={radios('fontSize', fontSizes)}
					alignment={radios('alignment', alignment)}
					label={text('label', label)}
					url={text('url', url)}
				/>
			)
		},
		{
			knobs: {
				escapeHTML: false, // Escapes strings to be safe for inserting as innerHTML. This option is true by default. It's safe to set it to `false` with frameworks like React which do escaping on their side.
				// You can still set it to false, but it's strongly unrecommendend in cases when you host your storybook on some route of your main site or web app.
			},
		}
	)
