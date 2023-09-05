'use client'

import { Container, Navbar } from './styled'
import { Menu } from './components/navbar/menu'
import { Brand } from './components/navbar/brand'
import { Body } from './components/body/body'
import { Mobile } from './components/navbar/mobile'

const Home = () => (
	<Container>
		<Navbar>
			<Brand />
			<Menu />
			<Mobile />
		</Navbar>
		<Body />
	</Container>
)

export default Home
