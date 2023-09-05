'use client'

import { Container, Navbar } from './styled'

import { Body, Brand, Menu, Mobile } from './components'
import { useEffect } from 'react'

const Home = () => {
	useEffect(() => {
		document.addEventListener('DOMContentLoaded', function () {
			var replacers = document.querySelectorAll(
				'[data-replace]'
			) as NodeListOf<HTMLElement>
			replacers.forEach(function (replacer) {
				var replaceClasses = JSON.parse(
					(replacer.getAttribute('data-replace') as string).replace(/'/g, '"')
				)
				Object.keys(replaceClasses).forEach(function (key) {
					replacer.classList.remove(key)
					replacer.classList.add(replaceClasses[key])
				})
			})
		})
	}, [])

	return (
		<Container>
			<Navbar>
				<Brand />
				<Menu />
				<Mobile />
			</Navbar>
			<Body />
		</Container>
	)
}

export default Home
