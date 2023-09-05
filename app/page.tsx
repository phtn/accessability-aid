'use client'

import {
	Container,
	Content,
	Hero,
	HeroPrimary,
	HeroSecondary,
	HeroSubtext,
	HeroTitle,
	Navbar,
} from './styled'
import { Brand, Menu, Mobile } from './components'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { MoveRight } from 'lucide-react'

const Home = () => (
	<Container>
		<Navbar>
			<Brand />
			<Menu />
			<Mobile />
		</Navbar>
		<Content>
			<Hero>
				<HeroPrimary>
					<HeroTitle>A brand new way of living in comfort.</HeroTitle>
					<HeroSubtext>
						Explore our care services for a life of freedom, happiness and
						well-being.
					</HeroSubtext>
					<Button
						className='rounded-full px-8 py-6 mb-8'
						variant={'outline'}
						size={'lg'}>
						<span className='text-[1rem]'>Learn more</span>
						<MoveRight className='ml-5' />
					</Button>
				</HeroPrimary>
				<HeroSecondary>
					<Image
						alt='hero-image'
						src={'/hero-image-one.jpg'}
						height={200}
						width={200}
						className='w-full z-0 opacity-90'
					/>
				</HeroSecondary>
			</Hero>
		</Content>
	</Container>
)

export default Home
