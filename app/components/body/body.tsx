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
import { Content } from '@/app/styled'

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
				<span className='text-[1rem]'>Learn more</span>
				<MoveRight className='ml-5' />
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

const Body = () => {
	return (
		<Content>
			<Hero />
		</Content>
	)
}

export { Body }
