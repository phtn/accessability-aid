'use client'
import Image from 'next/image'
import {
	Discover,
	HeroContainer,
	HeroPrimary,
	HeroSecondary,
	HeroSubtext,
	HeroTitle,
} from './styled'
import { MoveRight } from 'lucide-react'

const Hero = () => (
	<HeroContainer>
		<HeroPrimary>
			<HeroTitle>A brand new way of living in comfort.</HeroTitle>
			<HeroSubtext>
				Explore our care services for a life of freedom, happiness and
				well-being.
			</HeroSubtext>
			<Discover
				variant={'outline'}
				size={'lg'}>
				<span className='xl:text-[.90rem] text-[.75rem]'>Learn more</span>
				<MoveRight className='ml-5 w-4' />
			</Discover>
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
	</HeroContainer>
)

export { Hero }
