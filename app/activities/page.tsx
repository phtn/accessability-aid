import { MoveRight } from 'lucide-react'
import {
	HeroPrimary,
	HeroSecondary,
	HeroSubtext,
	HeroTitle,
} from '../components/body/styled'
import { Action, LgContainerV3, LgContentV3, OverlayV5 } from '../styled'
import Image from 'next/image'

const Hero = () => (
	<LgContainerV3>
		<OverlayV5>
			<LgContentV3>
				<HeroPrimary>
					<HeroTitle>Group and Centre based activities. </HeroTitle>
					<HeroSubtext>
						Join us today and experience the inspiring power of togetherness.
					</HeroSubtext>
					<Action
						variant={'v2'}
						size={'lg'}>
						<span className='xl:text-[.90rem] text-[.75rem]'>Call us</span>
						<MoveRight className='ml-5 w-4' />
					</Action>
				</HeroPrimary>
				<HeroSecondary>
					<Image
						src={'/centre-based.jpg'}
						alt='centre based activities'
						width={200}
						height={200}
						className='w-full h-auto'
					/>
				</HeroSecondary>
			</LgContentV3>
		</OverlayV5>
	</LgContainerV3>
)

const Household = () => {
	return (
		<>
			<Hero />
		</>
	)
}

export default Household
